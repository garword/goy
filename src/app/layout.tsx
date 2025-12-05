import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/contexts/auth-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Email Routing Manager - Cloudflare Email Management",
  description: "Manage your Cloudflare email routing addresses easily with our secure dashboard",
  keywords: ["Email Routing", "Cloudflare", "Email Management", "Next.js", "TypeScript"],
  authors: [{ name: "Email Routing Manager" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Email Routing Manager",
    description: "Manage your Cloudflare email routing addresses easily",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Email Routing Manager",
    description: "Manage your Cloudflare email routing addresses easily",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
