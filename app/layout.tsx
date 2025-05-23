import type { Metadata } from "next";
import { Source_Sans_3 as FontSans } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import BgGradient from "@/components/common/bg-gradient";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";


const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Easy",
  description: "Effortlessly summarize PDF files with a quick upload.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
       <head>
          <link rel="icon" type="image/svg+xml" href="/easy.svg" />
        </head>
      <body className={`${fontSans.variable} antialiased`}>
        <BgGradient/>
        <div className="relative min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster/>
      </body>
    </html>
    </ClerkProvider>
  );
}
