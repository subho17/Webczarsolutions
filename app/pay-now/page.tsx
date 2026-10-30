import type { Metadata } from "next";
import { SITE_URL, COMPANY } from "@/lib/site";
import PayNowPage from "@/components/payments/PayNowPage";

export const metadata: Metadata = {
  title: "Pay Online — Webczar Solutions | Instamojo, Razorpay, Paytm, PayPal & Stripe",
  description:
    "Securely pay invoices, project milestones, and software retainers for Webczar Solutions via Instamojo, Razorpay, Paytm, PayPal, and Stripe. 256-bit SSL encrypted.",
  alternates: {
    canonical: `${SITE_URL}/pay-now`,
  },
  openGraph: {
    title: "Pay Online — Webczar Solutions | Instamojo, Razorpay, Paytm, PayPal & Stripe",
    description:
      "Securely pay invoices, project milestones, and software retainers for Webczar Solutions via Instamojo, Razorpay, Paytm, PayPal, and Stripe. 256-bit SSL encrypted.",
    url: `${SITE_URL}/pay-now`,
    siteName: COMPANY.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pay Online — Webczar Solutions | Instamojo, Razorpay, Paytm, PayPal & Stripe",
    description:
      "Securely pay invoices, project milestones, and software retainers for Webczar Solutions via Instamojo, Razorpay, Paytm, PayPal, and Stripe.",
  },
};

export default function Page() {
  return <PayNowPage />;
}
