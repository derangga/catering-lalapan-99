import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const WhatsAppFloat: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsAppClick = () => {
    const message =
      "Halo, saya ingin bertanya tentang menu dan harga di Warung Lalapan Barokah.";
    const whatsappUrl = `https://wa.me/6281246539967?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Popup Message */}
        {isExpanded && (
          <div className="absolute bottom-16 right-0 bg-white dark:bg-dark-card rounded-lg shadow-xl p-4 max-w-xs transform transition-all duration-300 z-50">
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-2 right-2 text-gray-400 dark:text-dark-muted hover:text-gray-600 dark:hover:text-dark-text transition-colors duration-200"
            >
              <X size={16} />
            </button>
            <div className="pr-6">
              <h4 className="font-bold text-gray-900 dark:text-dark-text mb-1 transition-colors duration-300">
                Butuh Bantuan?
              </h4>
              <p className="text-sm text-gray-600 dark:text-dark-muted mb-3 transition-colors duration-300">
                Chat langsung dengan kami untuk informasi menu, harga, dan
                pemesanan!
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-600 dark:bg-dark-success hover:bg-green-700 dark:hover:bg-green-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200"
              >
                Chat Sekarang
              </button>
            </div>
          </div>
        )}

        {/* Pulsing Ring Effect - Behind the main button */}
        <div className="absolute inset-0 bg-green-600 dark:bg-dark-success rounded-full animate-ping opacity-20 z-40"></div>

        {/* Main WhatsApp Button - On top */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="relative bg-green-600 dark:bg-dark-success hover:bg-green-700 dark:hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 group z-50"
        >
          <MessageCircle size={24} className="group-hover:animate-pulse" />
        </button>
      </div>
    </div>
  );
};

export default WhatsAppFloat;
