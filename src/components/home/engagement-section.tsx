import React from "react";
import { Star, Users, Clock, Award } from "lucide-react";
import { Button } from "../ui/button";

const EngagementSection: React.FC = () => {
  const features = [
    {
      icon: Star,
      title: "Rasa Autentik",
      description:
        "Resep turun temurun dengan bumbu tradisional yang kaya rasa",
    },
    {
      icon: Users,
      title: "Layanan Catering",
      description:
        "Melayani acara spesial Anda dengan porsi dan kualitas terjamin",
    },
    {
      icon: Clock,
      title: "Selalu Fresh",
      description: "Lalapan segar dan sayuran langsung dari kebun setiap hari",
    },
    {
      icon: Award,
      title: "Kualitas Terbaik",
      description: "Menggunakan bahan-bahan pilihan berkualitas premium",
    },
  ];

  return (
    <section className="py-16 bg-background dark:bg-secondary transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 transition-colors duration-300">
            Mengapa Memilih Warung Lalapan 99?
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed transition-colors duration-300">
            Rasakan nikmatnya masakan rumahan dengan cita rasa Indonesia yang
            autentik. Setiap hidangan kami disiapkan dengan penuh perhatian dan
            menggunakan bumbu-bumbu tradisional yang telah teruji waktu. Dari
            ayam bakar yang empuk hingga ikan lele goreng yang renyah, setiap
            gigitan akan membawa Anda pada pengalaman kuliner yang tak
            terlupakan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:bg-accent dark:hover:bg-stone-700 p-6 rounded-xl transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 dark:bg-orange-300 text-orange-600 dark:text-white rounded-full mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary to-red-600 rounded-2xl p-8 md:p-12 text-center text-white transition-colors duration-300">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Siap Menikmati Kelezatan Nasi Lalapan Kami?
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Kunjungi warung kami langsung atau pesan untuk acara spesial Anda.
            Kami siap melayani dengan sepenuh hati!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => {
                const message =
                  "Halo, saya ingin informasi tentang layanan catering untuk acara saya.";
                const whatsappUrl = `https://wa.me/6281246539967?text=${encodeURIComponent(
                  message
                )}`;
                window.open(whatsappUrl, "_blank");
              }}
              className="h-14 bg-white text-orange-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Tanya Catering
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              variant="outline"
              className="h-14 bg-transparent dark:border-white dark:bg-transparent text-white font-bold py-3 px-8 rounded-xl hover:bg-white hover:text-orange-600 dark:hover:bg-white dark:hover:text-orange-600 transition-all duration-200"
            >
              Hubungi Kami
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementSection;
