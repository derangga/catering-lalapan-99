import React from "react";
import { Utensils, Phone, MapPin, Clock, Heart } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-dark-surface text-white py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-orange-600 dark:bg-dark-accent p-2 rounded-lg transition-colors duration-300">
                <Utensils size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Warung Lalapan 99</h3>
                <p className="text-orange-400 dark:text-dark-accent text-sm transition-colors duration-300">
                  Authentic Indonesian Cuisine
                </p>
              </div>
            </div>
            <p className="text-gray-300 dark:text-dark-muted mb-4 leading-relaxed transition-colors duration-300">
              Menyajikan hidangan Indonesia autentik dengan cita rasa rumahan
              yang telah teruji waktu. Setiap hidangan dibuat dengan penuh cinta
              dan menggunakan bahan-bahan berkualitas terbaik.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400 dark:text-dark-muted transition-colors duration-300">
              <Heart size={16} className="text-red-500 dark:text-dark-error" />
              <span>Dibuat dengan cinta untuk keluarga Indonesia</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Kontak Kami</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone
                  size={16}
                  className="text-orange-400 dark:text-dark-accent mt-1 transition-colors duration-300"
                />
                <div>
                  <p className="text-sm text-gray-300 dark:text-dark-muted transition-colors duration-300">
                    Telepon/WhatsApp
                  </p>
                  <p className="font-medium">+62 812-4653-9967</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="text-orange-400 dark:text-dark-accent mt-1 transition-colors duration-300"
                />
                <div>
                  <p className="text-sm text-gray-300 dark:text-dark-muted transition-colors duration-300">
                    Alamat
                  </p>
                  <p className="font-medium">
                    Jl. Kaliurang No. 123
                    <br />
                    Jember, Jawa Timur 68121
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div>
            <h4 className="text-lg font-bold mb-4">Jam Buka</h4>
            <div className="flex items-start gap-3">
              <Clock
                size={16}
                className="text-orange-400 dark:text-dark-accent mt-1 transition-colors duration-300"
              />
              <div>
                <p className="font-medium mb-2">Setiap Hari</p>
                <p className="text-gray-300 dark:text-dark-muted transition-colors duration-300">
                  10.00 - 22.00 WIB
                </p>
                <p className="text-sm text-orange-400 dark:text-dark-accent mt-2 transition-colors duration-300">
                  Siap melayani dine-in & take away
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 dark:border-dark-border mt-8 pt-8 transition-colors duration-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 dark:text-dark-muted text-sm transition-colors duration-300">
              © 2024 Warung Lalapan 99. Semua hak cipta dilindungi.
            </p>
            <div className="flex gap-6">
              <button
                onClick={() => window.open("https://wa.me/6281246539967")}
                className="text-green-400 dark:text-dark-success hover:text-green-300 dark:hover:text-green-500 transition-colors duration-200"
              >
                WhatsApp
              </button>
              <button
                onClick={() => window.open("tel:+6281246539967")}
                className="text-blue-400 dark:text-blue-300 hover:text-blue-300 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Telepon
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
