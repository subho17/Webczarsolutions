export interface LoginPortal {
  id: string;
  title: string;
  url: string;
  description: string;
  tag: string;
  category: "sms" | "rcs" | "voice" | "whatsapp" | "dlt";
}

export const LOGIN_PORTALS: LoginPortal[] = [
  {
    id: "text-messaging",
    title: "Text Messaging",
    url: "https://login.smsmedia.org/",
    description: "Enterprise SMS & messaging gateway",
    tag: "SMS Gateway",
    category: "sms",
  },
  {
    id: "rcs-messaging",
    title: "RCS Messaging",
    url: "https://rcs.webczarsolutions.com/",
    description: "Rich communication services & multimedia",
    tag: "Rich Messaging",
    category: "rcs",
  },
  {
    id: "ivr-service",
    title: "IVR Service",
    url: "https://ivr.webczarsolutions.com/",
    description: "Interactive voice response & call routing",
    tag: "Cloud Telephony",
    category: "voice",
  },
  {
    id: "ai-voice-calling",
    title: "AI-Voice Calling",
    url: "http://103.255.103.28/login.php",
    description: "Smart automated voice broadcast & dialer",
    tag: "Voice OBD",
    category: "voice",
  },
  {
    id: "whatsapp-iq",
    title: "WhatsApp IQ Messaging",
    url: "https://www.airtel.in/business/b2b/airtel-iq/dashboard/",
    description: "Airtel IQ enterprise WhatsApp console",
    tag: "Airtel IQ",
    category: "whatsapp",
  },
  {
    id: "whatsapp-api",
    title: "WhatsApp API",
    url: "https://wapi.webczarsolutions.com",
    description: "Official Cloud API & webhook gateway",
    tag: "Cloud API",
    category: "whatsapp",
  },
  {
    id: "dlt-smartping",
    title: "DLT Smartping",
    url: "https://smartping.live/entity/login",
    description: "TRAI compliance & entity management",
    tag: "DLT Compliance",
    category: "dlt",
  },
];
