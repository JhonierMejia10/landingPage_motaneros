import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/573108252470?text=Hola%2C%20quiero%20consultar%20por%20llantas"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-110 active:scale-95"
        >
            <MessageCircle className="h-7 w-7" />
            <span className="sr-only">Abrir chat de WhatsApp</span>
        </a>
    )
}
