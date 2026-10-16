import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Criação de Lojas Virtuais Profissionais",
  description:
    "Crie sua loja virtual com a Koodu. Desenvolvemos e-commerces responsivos, com catálogo organizado e experiência de compra pensada para seus clientes.",
  alternates: {
    canonical: "https://koodu.com.br/loja-virtual",
  },
  openGraph: {
    title: "Criação de Lojas Virtuais Profissionais | Koodu",
    description:
      "Desenvolvimento de lojas virtuais personalizadas para apresentar seus produtos e facilitar a experiência de compra.",
    url: "https://koodu.com.br/loja-virtual",
    siteName: "Koodu Digital Design",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Criação de Lojas Virtuais | Koodu",
    description:
      "Desenvolvemos lojas virtuais responsivas para sua empresa vender pela internet.",
  },
};

export default function Page() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">E-commerce</span>
          <h1>Sua loja aberta para vender, todos os dias.</h1>
          <p>
            Estruturamos experiências de compra que valorizam seus produtos,
            facilitam a navegação e criam uma jornada mais simples para o
            cliente.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="visual">
            <div className="orb" />
            <div className="visual-copy">
              <b>comprar deve ser simples.</b>
              <p>
                Catálogo, categorias, produto, carrinho e checkout organizados
                para reduzir atrito.
              </p>
            </div>
          </div>

          <div>
            <span className="eyebrow">E-commerce Koodu</span>
            <h2
              style={{
                fontFamily: "Manrope",
                fontSize: 45,
                letterSpacing: "-2px",
              }}
            >
              Venda com uma experiência que representa sua marca.
            </h2>

            <ul className="check-list">
              <li>
                <Check size={18} />
                Catálogo e categorias organizados
              </li>
              <li>
                <Check size={18} />
                Experiência mobile-first
              </li>
              <li>
                <Check size={18} />
                Integrações conforme a necessidade
              </li>
              <li>
                <Check size={18} />
                Estrutura preparada para campanhas
              </li>
            </ul>

            <Link className="btn btn-primary" href="/contato">
              Planejar minha loja <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}