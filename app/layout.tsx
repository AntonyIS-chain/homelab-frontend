import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dipple Payments | African Payment Infrastructure",
  description: "Accept and manage M-Pesa, Airtel Money, bank, SACCO, card, and wallet payments through one developer-friendly API.",
  icons: {
    icon: "/icon", // This will use your generated icon
  },
};





export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
