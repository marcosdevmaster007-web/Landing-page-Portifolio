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
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full  text-white shadow-lg hover:scale-110 transition-transform animate-pulse-glow"
      aria-label="Contato via WhatsApp"
    >
      <img width="60" height="60" src="https://img.icons8.com/color/60/whatsapp--v1.png" alt="whatsapp--v1" />
    </a>
  );
};

export default WhatsAppButton;
