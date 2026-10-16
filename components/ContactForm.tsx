
"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      service: String(data.get("service") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(
          result.error || "Não foi possível enviar sua mensagem."
        );
      }

      setSent(true);
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Erro ao enviar. Tente novamente."
      );
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="form-success">
        <CheckCircle2 size={46} />
        <h3>Mensagem enviada!</h3>
        <p>
          Recebemos os dados do seu projeto. Obrigado por entrar em
          contato com a Koodu!
        </p>
        <button
          className="btn btn-dark"
          type="button"
          onClick={() => setSent(false)}
        >
          Voltar ao formulário
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="field-row">
        <label>
          Seu nome
          <input
            required
            name="name"
            maxLength={120}
            placeholder="Como podemos chamar você?"
          />
        </label>

        <label>
          E-mail
          <input
            required
            type="email"
            name="email"
            maxLength={254}
            placeholder="voce@empresa.com"
          />
        </label>
      </div>

      <div className="field-row">
        <label>
          Empresa
          <input
            name="company"
            maxLength={150}
            placeholder="Nome da empresa"
          />
        </label>

        <label>
          O que você precisa?
          <select required name="service" defaultValue="">
            <option value="" disabled>
              Selecione um serviço
            </option>
            <option>Site institucional</option>
            <option>Loja virtual</option>
            <option>Landing page</option>
            <option>SEO &amp; performance</option>
            <option>Manutenção / evolução</option>
            <option>Outro projeto</option>
          </select>
        </label>
      </div>

      <label>
        Conte um pouco sobre o projeto
        <textarea
          required
          name="message"
          rows={5}
          maxLength={5000}
          placeholder="Objetivo, prazo, funcionalidades, referências..."
        />
      </label>

      {error && (
        <p role="alert" className="form-error">
          {error}
        </p>
      )}

      <button
        className="btn btn-primary"
        type="submit"
        disabled={loading}
      >
        {loading ? "Enviando..." : "Solicitar orçamento"}
        {!loading && <ArrowUpRight size={18} />}
      </button>

      <small>
        Seus dados serão utilizados para responder à sua solicitação
        de orçamento.
      </small>
    </form>
  );
}
