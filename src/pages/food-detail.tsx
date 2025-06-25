import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Phone } from "lucide-react";
import { menuItems } from "@/data/menu-data";
import { Card } from "@/components/ui/card";
import Footer from "@/components/footer";

const FoodDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = menuItems.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-bg transition-colors duration-300">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-dark-text mb-4 transition-colors duration-300">
            Menu tidak ditemukan
          </h1>
          <Link
            to="/"
            className="text-orange-600 dark:text-dark-accent hover:text-orange-700 dark:hover:text-dark-accent-hover font-medium transition-colors duration-200"
          >
            Kembali ke beranda
          </Link>
        </div>
      </div>
    );
  }

  const handleWhatsAppOrder = () => {
    const message = `Halo, saya ingin memesan ${item.name}. Apakah masih tersedia?`;
    const whatsappUrl = `https://wa.me/6281246539967?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen">
      <div className="bg-background transition-colors duration-300">
        <div className="container mx-auto px-4 py-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary font-medium mb-8 transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            Kembali ke Menu
          </Link>
          <Card className="pt-0 pb-0 max-w-4xl mx-auto overflow-hidden transition-colors duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="uppercase tracking-wide text-sm text-primary font-semibold mb-2 transition-colors duration-300">
                  {item.category}
                </div>
                <h1 className="text-3xl font-bold text-foreground mb-4 transition-colors duration-300">
                  {item.name}
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6 transition-colors duration-300">
                  {item.fullDescription || item.description}
                </p>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-3xl font-bold text-primary transition-colors duration-300">
                    Rp {item.price.toLocaleString("id-ID")}
                  </span>
                </div>
                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full bg-green-600 dark:bg-dark-success hover:bg-green-700 dark:hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Phone size={20} />
                  Pesan via WhatsApp
                </button>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FoodDetail;
