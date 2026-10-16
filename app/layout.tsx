import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Koodu | Agência Web e Criação de Sites",
    template: "%s | Koodu",
  },
  description:
    "A Koodu cria sites, lojas virtuais, landing pages e soluções digitais para empresas que querem crescer na internet.",
  keywords: [
    "criação de sites",
    "agência web",
    "site profissional",
    "loja virtual",
    "landing page",
    "SEO",
    "Koodu",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <WhatsApp />
        <Footer />
        <GoogleAnalytics gaId="G-ZJZ9WFZZSB" />
      </body>
    </html>
  );
}
