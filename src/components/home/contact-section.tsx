import React from "react";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telepon",
      content: "+62 812-4653-9967",
      action: () => window.open("tel:+6281246539967"),
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "+62 812-4653-9967",
      action: () => window.open("https://wa.me/6281246539967"),
    },
    {
      icon: MapPin,
      title: "Alamat",
      content: "Jl. Kaliurang No. 123, Jember, Jawa Timur 68121",
      action: () => {
        const element = document.getElementById("map");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      },
    },
    {
      icon: Clock,
      title: "Jam Buka",
      content: "Setiap Hari: 10.00 - 22.00 WIB",
      action: null,
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 bg-background dark:bg-secondary transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 transition-colors duration-300">
            Hubungi Kami
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto transition-colors duration-300">
            Siap melayani Anda dengan sepenuh hati. Hubungi kami untuk pemesanan
            atau informasi catering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-xl border-2 hover:border-orange-200 dark:hover:border-dark-accent transition-all duration-300 ${
                info.action
                  ? "cursor-pointer hover:bg-orange-50 dark:hover:bg-dark-card"
                  : ""
              }`}
              onClick={info.action || undefined}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 dark:bg-primary text-orange-600 dark:text-white rounded-full mb-4 transition-colors duration-300">
                <info.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 transition-colors duration-300">
                {info.title}
              </h3>
              <p className="text-muted-foreground transition-colors duration-300">
                {info.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
