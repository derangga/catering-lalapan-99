import React from "react";
import { Link } from "react-router-dom";
import { ChefHat, Phone, Soup } from "lucide-react";
import { featuredItems } from "@/data/menu-data";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const HeroSection: React.FC = () => {
  const scrollToMenu = () => {
    const element = document.getElementById("menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleWhatsAppOrder = () => {
    const message =
      "Halo, saya ingin memesan makanan. Apakah warung sedang buka?";
    const whatsappUrl = `https://wa.me/6281246539967?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleGoFoodOrder = () => {
    window.open(
      "https://gofood.co.id/jember/restaurant/lalapan-99-jl-hayam-wuruk-127--c29339bd-3388-4eca-a744-d1a6cd6f6a78",
      "_blank"
    );
  };

  return (
    <section
      id="hero"
      className="relative bg-accent dark:bg-background py-16 md:py-24 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-chart-1 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce transition-colors duration-300">
            <ChefHat size={16} />
            Cita Rasa Autentik Indonesia
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight transition-colors duration-300">
            Rasakan Kelezatan
            <span className="block text-primary transition-colors duration-300">
              Nasi Lalapan Tradisional
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            Nikmati hidangan Indonesia autentik dengan lalapan segar dan sambal
            yang menggugah selera. Dibuat dengan resep turun temurun dan
            bahan-bahan pilihan berkualitas tinggi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleWhatsAppOrder}
              className="h-14 bg-green-600 dark:bg-dark-success hover:bg-green-700 dark:hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Phone size={20} />
              Pesan Sekarang
            </Button>
            <Button
              variant="outline"
              onClick={scrollToMenu}
              className="h-14 font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:bg-background"
            >
              Lihat Menu Lengkap
            </Button>
          </div>
          <div className="flex justify-center mt-6">
            <Button
              size="lg"
              onClick={handleGoFoodOrder}
              className="bg-green-100 dark:bg-green-900/20 hover:bg-green-200 dark:hover:bg-green-900/30 text-green-800 dark:text-green-300 py-3 rounded-full font-medium flex items-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              <Soup size={20} />
              Tersedia di GoFood
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 w-full">
          {featuredItems.map((item, index) => (
            <Link
              key={item.slug}
              to={`/menu/${item.slug}`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <Card className="group pt-0 overflow-hidden transition-all duration-300 transform hover:-translate-y-2 w-full h-full gap-3">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="pl-3 pr-3">
                  <h3 className="font-bold text-foreground text-sm md:text-base mb-1 group-hover:text-primary transition-colors duration-200">
                    {item.name}
                  </h3>
                  <p className="text-primary font-semibold text-sm transition-colors duration-200">
                    Rp {item.price.toLocaleString("id-ID")}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
