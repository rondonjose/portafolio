import React from 'react';

type WhatsAppButtonProps = {
  phoneNumber: string;
  message?: string;
  className?: string;
};

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message = '',
  className = '',
}) => {
  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'ClickWhatsApp');
    } else {
      console.warn('Facebook Pixel no está cargado.');
    }
  };

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}${message ? `?text=${encodedMessage}` : ''}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
      aria-label="Enviar mensaje por WhatsApp"
    >
      Contactar por WhatsApp
    </a>
  );
};

export default WhatsAppButton;