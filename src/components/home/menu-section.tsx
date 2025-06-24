import { menuItems, type CategoryTab } from "@/data/menu-data";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryTab>({
    key: "ayam",
    name: "Ayam",
  });

  const categories: CategoryTab[] = [
    {
      key: "ayam",
      name: "Ayam",
    },
    {
      key: "ikan",
      name: "Ikan",
    },
    {
      key: "minuman",
      name: "Minuman",
    },
    {
      key: "add-ons",
      name: "Add-ons",
    },
  ];

  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory.key
  );

  return (
    <section
      id="menu"
      className="py-16 bg-secondary dark:bg-background transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 transition-colors duration-300">
            Menu Lengkap Kami
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto transition-colors duration-300">
            Pilihan hidangan lezat dengan lalapan segar dan sambal yang
            menggugah selera
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                `h-12 w-24 rounded-xl font-medium transition-all duration-200 ${
                  activeCategory.key === category.key
                    ? "bg-primary text-white shadow-lg"
                    : "bg-secondary text-foreground hover:bg-orange-50 dark:hover:bg-dark-border hover:text-orange-600 dark:hover:text-dark-accent"
                }`
              )}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Link key={item.slug} to={`/menu/${item.slug}`}>
              <Card className="group overflow-hidden w-full h-full pt-0 transition-all duration-300 transform hover:-translate-y-1">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-chart-2 transition-colors duration-200">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2 transition-colors duration-200">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary transition-colors duration-200">
                      Rp {item.price.toLocaleString("id-ID")}
                    </span>
                    <span className="text-primary font-medium group-hover:text-orange-700 dark:group-hover:text-chart-2 transition-colors duration-200">
                      Lihat Detail →
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-dark-muted text-lg transition-colors duration-300">
              Menu untuk kategori ini sedang dalam persiapan.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
