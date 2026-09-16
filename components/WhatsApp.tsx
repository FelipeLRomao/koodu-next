import { MessageCircle } from "lucide-react"; import { whatsapp } from "@/lib/data";


export default function WhatsApp()
{
    return <a className="whatsapp" href={`https://wa.me/${whatsapp}?text=Olá%20Koodu!%20Quero%20conhecer%20os%20serviços%20da%20agência.`
} 
target="_blank" aria-label="Falar pelo WhatsApp">
    <MessageCircle size={25}/>
    <span>Fale no WhatsApp</span>
    </a>
}
