
"use client";

import { MessageCircle } from "lucide-react";
import { whatsapp } from "@/lib/data";

declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      params?: Record<string, string>
    ) => void;
  }
}

export default function WhatsApp() {
  function handleWhatsAppClick() {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click_whatsapp", {
        event_category: "contato",
        event_label: "Botão flutuante do WhatsApp",
      });
    }
  }

  return (
    <a
      className="whatsapp"
      href={`https://wa.me/${whatsapp}?text=Olá%20Koodu!%20Quero%20conhecer%20os%20serviços%20da%20agência.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      onClick={handleWhatsAppClick}
    >
      <MessageCircle size={25} />
      <span>Fale no WhatsApp</span>
    </a>
  );
}
