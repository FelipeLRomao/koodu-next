# Koodu — Agência Web

Site institucional completo em Next.js + TypeScript, com App Router e CSS responsivo.

## Rodar localmente

Requer Node.js 20.9+.

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Antes de publicar

1. Edite `lib/data.ts` e substitua `whatsapp` pelo número comercial real da Koodu.
2. Atualize e-mail, Instagram e LinkedIn em `lib/data.ts` e `components/Footer.tsx`.
3. Substitua os blocos visuais do portfólio por imagens reais dos projetos em `public/`.
4. Revise a Política de Privacidade com os dados reais de analytics, cookies e fornecedores usados.
5. Se quiser receber contatos por e-mail/CRM, conecte `app/api/contact/route.ts` a um provedor como Resend, Brevo ou seu backend.
6. Rode `npm run build` antes do deploy.

## Páginas

- `/` Home
- `/servicos`
- `/criacao-de-sites`
- `/loja-virtual`
- `/landing-pages`
- `/seo`
- `/sobre`
- `/portfolio`
- `/contato`
- `/blog`
- `/politica-de-privacidade`
- `/termos`

O formulário comercial já monta uma mensagem com os dados preenchidos e abre o WhatsApp. O endpoint `/api/contact` também está preparado para futura integração de backend.
