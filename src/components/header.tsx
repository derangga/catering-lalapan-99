import React, { useState } from "react";
import { Menu, X, Utensils, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "./ui/button";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-background dark:bg-secondary shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary dark:bg-dark-accent p-2 rounded-lg transition-colors duration-300">
              <Utensils className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground transition-colors duration-300">
                Warung
              </h1>
              <p className="text-sm text-primary dark:text-dark-accent font-medium transition-colors duration-300">
                Lalapan 99
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:text-primary font-medium transition-colors duration-200"
            >
              Beranda
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="text-foreground hover:text-primary font-medium transition-colors duration-200"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary font-medium transition-colors duration-200"
            >
              Kontak
            </button>
            <Button
              onClick={() => scrollToSection("map")}
              className="text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Lokasi
            </Button>
            <Button
              onClick={toggleTheme}
              size="icon"
              variant="secondary"
              className="p-2 rounded-lg hover:bg-accent dark:hover:bg-stone-600 bg-border"
            >
              {isDark ? (
                <Sun size={20} className="text-orange-500" />
              ) : (
                <Moon size={20} className="text-gray-600" />
              )}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              onClick={toggleTheme}
              size="icon"
              variant="secondary"
              className="p-2 rounded-lg hover:bg-accent"
            >
              {isDark ? (
                <Sun size={20} className="text-orange-500" />
              ) : (
                <Moon size={20} className="text-gray-600" />
              )}
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="p-2 text-gray-700 dark:text-dark-text"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-dark-border">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left text-foreground hover:text-primary font-medium transition-colors duration-200"
              >
                Beranda
              </button>
              <button
                onClick={() => scrollToSection("menu")}
                className="text-left text-foreground hover:text-primary font-medium transition-colors duration-200"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-foreground hover:text-primary font-medium transition-colors duration-200"
              >
                Kontak
              </button>
              <Button
                onClick={() => scrollToSection("map")}
                className="text-left text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg w-fit"
              >
                Lokasi
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
