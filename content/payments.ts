export interface PaymentGateway {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  brandColor: string;
  accentBg: string;
  logoText: string;
  supportedMethods: string[];
  currencies: string[];
  features: string[];
  paymentUrl: string; // The user will paste their actual payment link here later
  isInternational: boolean;
}

export const PAYMENT_GATEWAYS: PaymentGateway[] = [
  {
    id: "instamojo",
    name: "Instamojo",
    badge: "Domestic Netbanking & UPI",
    tagline: "India's trusted payment rail for startups & businesses",
    description:
      "Pay securely using all Indian bank accounts, instant UPI apps, RuPay, Visa, and Mastercard with zero payment friction.",
    brandColor: "#184BFE",
    accentBg: "rgba(24, 75, 254, 0.08)",
    logoText: "Instamojo",
    supportedMethods: [
      "Instant UPI (GPay / PhonePe / Paytm)",
      "50+ Indian NetBanking Banks",
      "Debit & Credit Cards (RuPay / Visa / Master)",
      "Pay Later & Wallets",
    ],
    currencies: ["INR (₹)"],
    features: [
      "Instant 0-second confirmation",
      "RBI-compliant payment processor",
      "Instant digital GST receipt",
    ],
    // REPLACE THIS WITH YOUR REAL INSTAMOJO LINK LATER
    paymentUrl: "https://imjo.in/webczar-pay",
    isInternational: false,
  },
  {
    id: "razorpay",
    name: "Razorpay",
    badge: "Enterprise Multi-Rail",
    tagline: "India's #1 financial and payment gateway network",
    description:
      "All-in-one payment gateway supporting domestic and international cards, UPI QR, NetBanking, Cred Pay, and corporate accounts.",
    brandColor: "#0284C7",
    accentBg: "rgba(2, 132, 199, 0.08)",
    logoText: "Razorpay",
    supportedMethods: [
      "All UPI Apps & Dynamic QR Code",
      "Credit & Debit Cards (Domestic & Global)",
      "NetBanking (All Major Indian Banks)",
      "Cred Pay, Mobikwik & EMI Options",
    ],
    currencies: ["INR (₹)", "USD ($)", "EUR (€)", "GBP (£)"],
    features: [
      "Highest transaction success rates",
      "PCI-DSS Level 1 certified",
      "Automated webhook invoice dispatch",
    ],
    // REPLACE THIS WITH YOUR REAL RAZORPAY LINK LATER
    paymentUrl: "https://rzp.io/l/webczar-solutions",
    isInternational: false,
  },
  {
    id: "paytm",
    name: "Paytm",
    badge: "Instant Wallet & UPI",
    tagline: "Quick checkout via India's most ubiquitous mobile payment app",
    description:
      "One-tap checkout for clients preferring the Paytm ecosystem, Paytm UPI, Paytm Wallet, or direct bank UPI transfers.",
    brandColor: "#00BAF2",
    accentBg: "rgba(0, 186, 242, 0.08)",
    logoText: "Paytm",
    supportedMethods: [
      "Paytm Wallet & Postpaid",
      "Paytm UPI & Scan to Pay",
      "RuPay, Visa & Mastercard Debit",
      "Major NetBanking Gateways",
    ],
    currencies: ["INR (₹)"],
    features: [
      "Zero convenience fee for clients",
      "Superfast mobile-first checkout",
      "Direct settlement notifications",
    ],
    // REPLACE THIS WITH YOUR REAL PAYTM LINK LATER
    paymentUrl: "https://paytm.me/webczar-pay",
    isInternational: false,
  },
  {
    id: "paypal",
    name: "PayPal",
    badge: "Global Cross-Border",
    tagline: "The gold standard for overseas clients across USA, Europe, UK & UAE",
    description:
      "Seamless cross-border settlements with multi-currency conversions, buyer protection, and international credit cards.",
    brandColor: "#003087",
    accentBg: "rgba(0, 48, 135, 0.08)",
    logoText: "PayPal",
    supportedMethods: [
      "PayPal Balance & Instant Transfer",
      "International Credit / Debit Cards",
      "American Express, Discover, JCB",
      "USD, EUR, GBP, CAD, AUD, AED Settlement",
    ],
    currencies: ["USD ($)", "EUR (€)", "GBP (£)", "CAD (C$)", "AUD (A$)", "AED"],
    features: [
      "Worldwide PayPal Buyer Protection",
      "No Indian account required for overseas clients",
      "Instant currency conversion",
    ],
    // REPLACE THIS WITH YOUR REAL PAYPAL LINK LATER
    paymentUrl: "https://paypal.me/webczarsolutions",
    isInternational: true,
  },
  {
    id: "stripe",
    name: "Stripe",
    badge: "Global Card Infrastructure",
    tagline: "Modern global cards, Apple Pay & Google Pay checkout",
    description:
      "Engineered for international founders and enterprises. Pay with premium cards, Apple Pay, or Google Pay with sub-second authentication.",
    brandColor: "#635BFF",
    accentBg: "rgba(99, 91, 255, 0.08)",
    logoText: "Stripe",
    supportedMethods: [
      "Apple Pay & Google Pay",
      "Visa, Mastercard, Amex, UnionPay",
      "Corporate & Commercial Cards",
      "Global Currencies (135+ countries)",
    ],
    currencies: ["USD ($)", "EUR (€)", "GBP (£)", "SGD (S$)", "Global"],
    features: [
      "3D Secure 2.0 authentication",
      "Optimized for international clients",
      "Instant electronic receipt dispatch",
    ],
    // REPLACE THIS WITH YOUR REAL STRIPE LINK LATER
    paymentUrl: "https://buy.stripe.com/webczar-invoice",
    isInternational: true,
  },
];

export const BANK_TRANSFER_DETAILS = {
  accountName: "Webczar Solutions",
  accountType: "Current Account",
  bankName: "HDFC Bank / ICICI Bank",
  branch: "Tricity Tech Corridor, Mohali, Punjab",
  note: "For direct RTGS / NEFT / IMPS corporate wire transfers, please reference your Invoice Number in the payment remarks.",
  gstNumber: "Provided on official tax invoices",
};

export const PAYMENT_FAQS = [
  {
    q: "How do I choose which payment gateway to use?",
    a: "If you are based in India, Instamojo, Razorpay, or Paytm are ideal for UPI, NetBanking, and RuPay/Visa/Mastercard. If you are an international client paying from the US, UK, Europe, UAE, or Australia, PayPal and Stripe offer seamless cross-border multi-currency checkout.",
  },
  {
    q: "Will I receive a formal GST tax invoice after payment?",
    a: "Yes, absolutely. Once your transaction is confirmed, our billing department generates and dispatches an official GST-compliant tax invoice along with your payment receipt via email and WhatsApp within 24 hours.",
  },
  {
    q: "Is my payment information safe and encrypted?",
    a: "Yes. Webczar Solutions never stores your credit card, debit card, or banking credentials. All transactions are processed through 256-bit SSL encrypted, PCI-DSS Level 1 certified gateways regulated by the Reserve Bank of India (RBI) or respective global monetary authorities.",
  },
  {
    q: "Can I pay milestone-based installments for software projects?",
    a: "Yes. Our standard development contracts follow agreed milestone stages (e.g. 40% Kickoff, 40% Staging Approval, 20% Production Deployment). You can settle each milestone individually using your project invoice number.",
  },
  {
    q: "Can I request a custom payment link or wire transfer details?",
    a: "Certainly! If you require a customized payment link with a pre-set amount, custom milestone terms, or direct corporate SWIFT/wire transfer details, chat directly with our billing team on WhatsApp at +91 99882 21729.",
  },
];
