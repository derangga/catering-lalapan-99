import { Card, CardContent, CardFooter } from "../ui/card";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";

const MapSection: React.FC = () => {
  const position: [number, number] = [-8.1863105, 113.6619061];

  const handleOpenGoogleMaps = () => {
    console.log("hello");
    window.open("https://maps.app.goo.gl/HEUBnM22TkDMaWc87", "_blank");
  };
  return (
    <section
      id="map"
      className="py-16 bg-secondary dark:bg-background transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 transition-colors duration-300">
            Lokasi Warung Kami
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto transition-colors duration-300">
            Temukan kami di jantung kota Jember. Mudah dijangkau dan strategis
            untuk dine-in maupun take away.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="pt-0 overflow-hidden">
            <div className="h-96 w-full">
              <MapContainer
                center={position}
                zoom={15}
                style={{ height: "100%", width: "100%" }}
                className="z-10"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>
                    <div className="text-center p-2">
                      <h3 className="font-bold text-lg mb-2">
                        Warung Lalapan 99
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        Jl. Hayam Wuruk No. 127, Gerdu, Sempusari, Kec.
                        Kaliwates,
                        <br />
                        Jember, Jawa Timur 68131
                      </p>
                      <p className="text-sm text-green-600 font-medium">
                        📞 +62 812-4653-9967
                      </p>
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h3 className="font-bold text-foreground mb-2 transition-colors duration-300">
                    Alamat Lengkap
                  </h3>
                  <p className="text-muted-foreground transition-colors duration-300">
                    Jl. Hayam Wuruk No. 127, Gerdu, Sempusari, Kec. Kaliwates,
                    Jember, Jawa Timur 68131
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2 transition-colors duration-300">
                    Jam Operasional
                  </h3>
                  <p className="text-muted-foreground transition-colors duration-300">
                    Setiap Hari
                    <br />
                    12.00 - 22.00 WIB
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2 transition-colors duration-300">
                    Kontak Cepat
                  </h3>
                  <button
                    onClick={() => window.open("https://wa.me/6281246539967")}
                    className="text-green-600 dark:text-dark-success hover:text-green-700 dark:hover:text-green-500 font-medium transition-colors duration-200"
                  >
                    📱 WhatsApp: +62 812-4653-9967
                  </button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="w-full flex flex-col items-center">
                <Button
                  onClick={handleOpenGoogleMaps}
                  className="bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-600 text-white font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
                >
                  <ExternalLink size={20} />
                  Buka Maps
                </Button>
                <p className="text-sm text-gray-500 dark:text-dark-muted mt-2 transition-colors duration-300">
                  Buka di Google Maps untuk navigasi
                </p>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
