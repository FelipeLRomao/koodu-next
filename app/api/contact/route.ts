
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const company = String(body.company ?? "").trim();
    const service = String(body.service ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { ok: false, error: "Preencha todos os campos obrigatórios." },
        { status: 400 }
      );
    }

    if (
      name.length > 120 ||
      email.length > 254 ||
      company.length > 150 ||
      service.length > 150 ||
      message.length > 5000 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json(
        { ok: false, error: "Verifique os dados preenchidos." },
        { status: 400 }
      );
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      CONTACT_EMAIL,
    } = process.env;

    if (
      !SMTP_HOST ||
      !SMTP_PORT ||
      !SMTP_USER ||
      !SMTP_PASS ||
      !CONTACT_EMAIL
    ) {
      console.error("Configuração SMTP incompleta.");

      return NextResponse.json(
        { ok: false, error: "O envio está temporariamente indisponível." },
        { status: 500 }
      );
    }

    const port = Number(SMTP_PORT);

    if (!Number.isInteger(port) || port !== 465) {
      return NextResponse.json(
        { ok: false, error: "Configuração de e-mail inválida." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: true,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: {
        name: "Koodu Digital Design",
        address: SMTP_USER,
      },
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Novo pedido de orçamento - ${service}`,
      text: [
        "Novo contato recebido pelo site da Koodu.",
        "",
        `Nome: ${name}`,
        `E-mail: ${email}`,
        `Empresa: ${company || "Não informada"}`,
        `Serviço: ${service}`,
        "",
        "Descrição do projeto:",
        message,
      ].join("\n"),
    });

    return NextResponse.json({
      ok: true,
      message: "Mensagem enviada com sucesso.",
    });
  } catch (error) {
    console.error("Erro ao enviar contato:", error);

    return NextResponse.json(
      {
        ok: false,
        error: "Não foi possível enviar sua mensagem. Tente novamente.",
      },
      { status: 500 }
    );
  }
}
