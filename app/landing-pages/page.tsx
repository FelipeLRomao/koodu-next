import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Criação de Landing Pages que Convertem",
  description:
    "A Koodu desenvolve landing pages profissionais, rápidas e responsivas para campanhas, anúncios e captação de clientes. Solicite seu orçamento.",
  alternates: {
    canonical: "https://koodu.com.br/landing-pages",
  },
  openGraph: {
    title: "Criação de Landing Pages que Convertem | Koodu",
    description:
      "Landing pages personalizadas para divulgar ofertas, captar leads e transformar visitantes em potenciais clientes.",
    url: "https://koodu.com.br/landing-pages",
    siteName: "Koodu Digital Design",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Criação de Landing Pages | Koodu",
    description:
      "Landing pages profissionais para campanhas, anúncios e geração de leads.",
  },
};

export default function Page() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Landing Pages</span>
          <h1>Uma página com um objetivo: fazer a ação acontecer.</h1>
          <p>
            Landing pages para campanhas, anúncios, lançamentos e captação de
            leads, com estrutura pensada para conversão.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container service-detail">
          <div>
            <h2>Menos distração. Mais foco.</h2>
            <p>
              Construímos páginas com mensagem clara, hierarquia visual e
              chamadas para ação posicionadas de forma estratégica.
            </p>
            <Link className="btn btn-primary" href="/contato">
              Criar landing page <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="service-list">
            <div className="item">
              <h3>Headline e proposta de valor</h3>
              <p>
                Mensagem direta para o visitante entender rapidamente o que
                você oferece.
              </p>
            </div>

            <div className="item">
              <h3>CTA e geração de leads</h3>
              <p>
                Formulários e chamadas de ação pensados para facilitar a
                conversão.
              </p>
            </div>

            <div className="item">
              <h3>Mobile first</h3>
              <p>
                Campanhas recebem muitos acessos no celular. A experiência
                precisa funcionar bem ali.
              </p>
            </div>

            <div className="item">
              <h3>Pronta para mídia</h3>
              <p>
                Estrutura organizada para receber tráfego de campanhas e
                acompanhar resultados.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}