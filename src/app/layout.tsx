import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "@/components/provider/react-query-provider";
import { Toaster } from "sonner";
import { GoogleOAuthProvider } from "@react-oauth/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Iconocity",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const googleClientId = process.env.NEXT_PUBLIC_CLIENT_ID;

  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleOAuthProvider clientId={googleClientId || ""}>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </GoogleOAuthProvider>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
