<?php
/**
 * Webczar Solutions - Career Application & CV Upload Endpoint (Hostinger / Apache / PHP)
 * Receives candidate applications and CV files (PDF, Word DOC/DOCX, JPG/JPEG/PNG).
 */

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "error" => "Method not allowed"]);
    exit;
}

// 1. Gather text fields
$role = isset($_POST['role']) ? trim($_POST['role']) : 'General Application';
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
$portfolio = isset($_POST['portfolio']) ? trim($_POST['portfolio']) : '';
$coverNote = isset($_POST['coverNote']) ? trim($_POST['coverNote']) : '';

if (empty($name) || empty($email) || empty($phone)) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Name, email, and phone number are required."]);
    exit;
}

// 2. Prepare upload directory
$uploadBaseDir = __DIR__ . '/../uploads';
$cvDir = $uploadBaseDir . '/cvs';

if (!is_dir($uploadBaseDir)) {
    @mkdir($uploadBaseDir, 0755, true);
}
if (!is_dir($cvDir)) {
    @mkdir($cvDir, 0755, true);
}

// Prevent script execution in uploads folder via .htaccess
$htaccessPath = $cvDir . '/.htaccess';
if (!file_exists($htaccessPath)) {
    @file_put_contents($htaccessPath, "php_flag engine off\nOptions -ExecCGI\nAddType text/plain .php .phtml .php3 .php4 .php5 .php7 .phps\n");
}

$uploadedCvPath = '';
$uploadedCvFilename = '';
$fileExtension = '';

// 3. Handle file upload (Word, PDF, JPG)
if (isset($_FILES['cv']) && $_FILES['cv']['error'] === UPLOAD_ERR_OK) {
    $file = $_FILES['cv'];
    $originalName = basename($file['name']);
    $fileSize = $file['size'];
    $tmpPath = $file['tmp_name'];

    // Max 15 MB
    if ($fileSize > 15 * 1024 * 1024) {
        http_response_code(400);
        echo json_encode(["success" => false, "error" => "File size exceeds 15 MB limit."]);
        exit;
    }

    $fileExtension = strtolower(pathinfo($originalName, PATHINFO_EXTENSION));
    $allowedExtensions = ['pdf', 'doc', 'docx', 'jpg', 'jpeg', 'png'];

    if (!in_array($fileExtension, $allowedExtensions)) {
        http_response_code(400);
        echo json_encode([
            "success" => false,
            "error" => "Invalid file format. Only Word (.doc, .docx), PDF (.pdf), and JPG/PNG (.jpg, .jpeg, .png) are accepted."
        ]);
        exit;
    }

    // Sanitize candidate name for filename
    $safeName = preg_replace('/[^a-zA-Z0-9_-]/', '_', $name);
    $timestamp = date('Ymd_His');
    $uniqueId = substr(md5(uniqid(rand(), true)), 0, 6);
    $savedFilename = "CV_{$safeName}_{$timestamp}_{$uniqueId}.{$fileExtension}";
    $destination = $cvDir . '/' . $savedFilename;

    if (move_uploaded_file($tmpPath, $destination)) {
        $uploadedCvFilename = $savedFilename;
        $uploadedCvPath = '/uploads/cvs/' . $savedFilename;
    } else {
        http_response_code(500);
        echo json_encode(["success" => false, "error" => "Could not save uploaded CV file on server."]);
        exit;
    }
}

// 4. Save record in applications.json
$appsJsonPath = $uploadBaseDir . '/applications.json';
$existingApps = [];
if (file_exists($appsJsonPath)) {
    $content = @file_get_contents($appsJsonPath);
    $decoded = json_decode($content, true);
    if (is_array($decoded)) {
        $existingApps = $decoded;
    }
}

$newApplication = [
    "id" => uniqid("app_", true),
    "date" => date('Y-m-d H:i:s'),
    "role" => $role,
    "name" => $name,
    "email" => $email,
    "phone" => $phone,
    "portfolio" => $portfolio,
    "coverNote" => $coverNote,
    "cvPath" => $uploadedCvPath,
    "cvFilename" => $uploadedCvFilename,
    "fileType" => $fileExtension,
    "ip" => $_SERVER['REMOTE_ADDR'] ?? 'Unknown'
];

array_unshift($existingApps, $newApplication);
@file_put_contents($appsJsonPath, json_encode($existingApps, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));

// 5. Send notification email to info@webczarsolutions.com
$to = "info@webczarsolutions.com";
$subject = "New Job Application: {$role} - {$name}";
$message = "You have received a new career application at Webczar Solutions.\n\n"
         . "Position Applied: {$role}\n"
         . "Candidate Name: {$name}\n"
         . "Email: {$email}\n"
         . "Phone / WhatsApp: {$phone}\n"
         . "Portfolio / Link: " . ($portfolio ? $portfolio : "N/A") . "\n"
         . "CV File: " . ($uploadedCvPath ? "https://webczarsolutions.com" . $uploadedCvPath : "N/A") . "\n\n"
         . "Candidate Cover Note:\n" . ($coverNote ? $coverNote : "None provided") . "\n\n"
         . "---\nWebczar Solutions Career Portal (webczarsolutions.com)";

$headers = "From: Webczar Careers <no-reply@webczarsolutions.com>\r\n"
         . "Reply-To: {$email}\r\n"
         . "X-Mailer: PHP/" . phpversion();

@mail($to, $subject, $message, $headers);

echo json_encode([
    "success" => true,
    "message" => "Application submitted successfully",
    "applicationId" => $newApplication['id'],
    "cvPath" => $uploadedCvPath
]);
