import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "234XXXXXXXXXX"; // Replace with actual WhatsApp business number
  const message = "Hi! I'm interested in learning more about Kenora Fitness & Spa.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-elegant transition-smooth hover:scale-110 animate-fade-in"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="text-white" size={28} />
    </a>
  );
};

export default WhatsAppButton;
