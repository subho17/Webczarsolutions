export interface NavSubService {
  name: string;
  href: string;
  desc?: string;
  badge?: string;
}

export interface NavServiceGroup {
  id: string;
  title: string;
  href?: string;
  hasSubmenu: boolean;
  items?: NavSubService[];
}

export const SERVICES_NAV: NavServiceGroup[] = [
  {
    id: "verticals",
    title: "Other Business Verticals",
    hasSubmenu: true,
    items: [
      {
        name: "Automobiles",
        href: "/contact?vertical=Automobiles",
        desc: "Dealerships, workshops & spare parts",
      },
      {
        name: "Immigration",
        href: "/contact?vertical=Immigration",
        desc: "Visa consultants, study abroad & PR",
      },
      {
        name: "Construction",
        href: "/contact?vertical=Construction",
        desc: "Builders, contractors & building materials",
      },
      {
        name: "Real Estate",
        href: "/services/real-estate-marketing",
        desc: "Property developers & real estate brokers",
      },
      {
        name: "Election Notification",
        href: "/contact?vertical=Election+Notification",
        desc: "Voter communication & campaign OBD",
      },
      {
        name: "Health & Fitness",
        href: "/contact?vertical=Health+and+Fitness",
        desc: "Hospitals, clinics, gyms & nutrition",
      },
      {
        name: "Unisex Salon Services",
        href: "/contact?vertical=Salon+Services",
        desc: "Salons, luxury spas & beauty studios",
      },
      {
        name: "Lifestyle Outfits",
        href: "/contact?vertical=Lifestyle+Outfits",
        desc: "Fashion brands, apparel & boutiques",
      },
      {
        name: "Education Job Consultant",
        href: "/contact?vertical=Education+Job+Consultant",
        desc: "Colleges, coaching & job recruitment",
      },
      {
        name: "Apply Credit Card Online",
        href: "/contact?vertical=Credit+Card+Online",
        desc: "Fintech, banks & loan lead funnels",
      },
      {
        name: "Legal Publications Books",
        href: "/contact?vertical=Legal+Publications",
        desc: "Law books, legal journals & printing",
      },
    ],
  },
  {
    id: "home-automation",
    title: "Home Automation System",
    href: "/contact?service=Home+Automation",
    hasSubmenu: false,
    items: [
      {
        name: "Smart Lighting & Climate",
        href: "/contact?service=Smart+Lighting",
        desc: "Automated switches, mood lighting & HVAC",
      },
      {
        name: "Security & Smart Locks",
        href: "/contact?service=Smart+Security",
        desc: "Biometrics, video doorbells & sensors",
      },
      {
        name: "Voice & IoT Control",
        href: "/contact?service=IoT+Integration",
        desc: "Alexa & Google Home ecosystem integration",
      },
    ],
  },
  {
    id: "web-hosting",
    title: "Web Hosting",
    hasSubmenu: true,
    items: [
      {
        name: "Linux Shared Hosting",
        href: "/contact?service=Linux+Hosting",
        desc: "cPanel, ultra-fast SSD storage & free SSL",
      },
      {
        name: "Windows Shared Hosting",
        href: "/contact?service=Windows+Hosting",
        desc: "ASP.NET, MSSQL database & Plesk panel",
      },
      {
        name: "VPS Cloud Hosting",
        href: "/contact?service=VPS+Hosting",
        desc: "Dedicated CPU/RAM & full root server access",
      },
      {
        name: "Dedicated Servers",
        href: "/contact?service=Dedicated+Servers",
        desc: "Bare-metal performance for high traffic",
      },
    ],
  },
  {
    id: "software-dev",
    title: "Software Development",
    href: "/services/software-development",
    hasSubmenu: false,
    items: [
      {
        name: "Custom Web Applications",
        href: "/services/software-development",
        desc: "Enterprise SaaS, CRM & ERP portals",
      },
      {
        name: "API & Backend Engineering",
        href: "/services/software-development",
        desc: "REST & GraphQL scalable microservices",
      },
      {
        name: "Cloud Architecture & DevOps",
        href: "/services/software-development",
        desc: "AWS, Azure & Google Cloud deployment",
      },
    ],
  },
  {
    id: "mobile-apps",
    title: "Android/IOS App",
    hasSubmenu: true,
    items: [
      {
        name: "Native Android App",
        href: "/services/mobile-app-development",
        desc: "Kotlin, Jetpack Compose & Google Play",
      },
      {
        name: "Native iOS App",
        href: "/services/mobile-app-development",
        desc: "Swift, SwiftUI & Apple App Store approval",
      },
      {
        name: "Flutter & Cross-Platform",
        href: "/services/mobile-app-development",
        desc: "Unified codebase with native 60fps performance",
      },
      {
        name: "App Maintenance & ASO",
        href: "/services/mobile-app-development",
        desc: "Continuous upgrades & app store optimization",
      },
    ],
  },
  {
    id: "call-center",
    title: "Call center setup",
    hasSubmenu: true,
    items: [
      {
        name: "Vicidial & GoAutoDial",
        href: "/services/ivr-solutions",
        desc: "Open-source predictive dialer deployment",
      },
      {
        name: "FusionPBX & FreePBX",
        href: "/services/ivr-solutions",
        desc: "Multi-tenant IP PBX & IVR call flows",
      },
      {
        name: "Inbound & Outbound Calling",
        href: "/services/ivr-solutions",
        desc: "Call queues, live recording & agent stats",
      },
      {
        name: "DID & Virtual Numbers",
        href: "/services/ivr-solutions",
        desc: "Toll-free 1800 numbers & Tricity virtual DIDs",
      },
    ],
  },
];
