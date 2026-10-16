
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Criação de Sites Profissionais",
  description:
    "Desenvolvimento de sites profissionais, rápidos e responsivos para empresas. Fortaleça sua presença digital com a Koodu e solicite um orçamento.",
  alternates: {
    canonical: "https://koodu.com.br/criacao-de-sites",
  },
  openGraph: {
    title: "Criação de Sites Profissionais | Koodu",
    description:
      "Sites profissionais, personalizados e responsivos para fortalecer a presença digital da sua empresa.",
    url: "https://koodu.com.br/criacao-de-sites",
    siteName: "Koodu Digital Design",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Criação de Sites Profissionais | Koodu",
    description:
      "Desenvolvemos sites personalizados e responsivos para empresas.",
  },
};

export default function Page() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Criação de Sites</span>

          <h1>
            Um site profissional para sua empresa ser levada a sério.
          </h1>

          <p>
            Projetamos e desenvolvemos sites institucionais personalizados,
            rápidos, responsivos e preparados para apresentar sua marca da
            melhor forma.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container service-detail">
          <div>
            <h2>Seu site como uma ferramenta de negócio.</h2>

            <p>
              Mais do que colocar sua empresa no ar, criamos uma experiência
              clara para quem chega até você. Estrutura, conteúdo e interface
              trabalham juntos para facilitar a decisão do visitante.
            </p>

            <Link className="btn btn-primary" href="/contato">
              Quero conversar <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="service-list">
            <div className="item">
              <h3>Design sob medida</h3>
              <p>
                Identidade visual aplicada à web, sem depender de templates
                genéricos.
              </p>
            </div>

            <div className="item">
              <h3>Responsivo por padrão</h3>
              <p>
                Experiência consistente em celular, tablet e desktop.
              </p>
            </div>

            <div className="item">
              <h3>SEO técnico</h3>
              <p>
                Estrutura semântica e boas práticas para facilitar a
                indexação.
              </p>
            </div>

            <div className="item">
              <h3>Pronto para evoluir</h3>
              <p>
                Arquitetura organizada para novos conteúdos, páginas e
                funcionalidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section lime">
        <div className="container split">
          <div>
            <span className="eyebrow">Incluído no projeto</span>

            <h2
              style={{
                fontFamily: "Manrope",
                fontSize: 45,
                letterSpacing: "-2px",
              }}
            >
              Pensamos nos detalhes que fazem diferença.
            </h2>
          </div>

          <ul className="check-list">
            <li>
              <Check size={18} />
              Mapa de páginas e arquitetura de conteúdo
            </li>
            <li>
              <Check size={18} />
              Interface visual personalizada
            </li>
            <li>
              <Check size={18} />
              Formulários e canais de contato
            </li>
            <li>
              <Check size={18} />
              Otimização de performance
            </li>
            <li>
              <Check size={18} />
              Configuração básica de SEO
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
