import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

const WhatsAppButton = ({ 
  phoneNumber = "5500000000000", 
  message = "Olá! Gostaria de saber mais sobre seus serviços." 
}: WhatsAppButtonProps) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform animate-pulse-glow"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-7 w-7 fill-current" />
    </a>
  );
};

export default WhatsAppButton;
