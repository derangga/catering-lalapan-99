export type CategoryTab = {
  key: MenuCategory;
  name: string;
};

export type MenuCategory = "ayam" | "ikan" | "minuman" | "add-ons";

export interface MenuItem {
  id: number;
  name: string;
  slug: string;
  category: MenuCategory;
  description: string;
  fullDescription?: string;
  price: number;
  image: string;
  featured?: boolean;
}

export const menuItems: MenuItem[] = [
  // Nasi Ayam Lalapan
  {
    id: 1,
    name: "Ayam Bakar Lalapan",
    slug: "ayam-bakar-lalapan",
    category: "ayam",
    description:
      "Ayam bakar bumbu kecap dengan lalapan segar dan sambal terasi",
    fullDescription:
      "Ayam kampung pilihan yang dibakar dengan bumbu kecap manis tradisional, disajikan dengan nasi putih hangat, lalapan segar (mentimun, tomat, kemangi, kol), dan sambal terasi yang pedas menggugah selera. Dilengkapi dengan tempe dan tahu goreng.",
    price: 25000,
    image:
      "https://images.pexels.com/photos/4669227/pexels-photo-4669227.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
  },
  {
    id: 2,
    name: "Ayam Goreng Lalapan",
    slug: "ayam-goreng-lalapan",
    category: "ayam",
    description: "Ayam goreng kremes dengan bumbu kuning dan lalapan lengkap",
    fullDescription:
      "Ayam goreng dengan bumbu kuning yang meresap sempurna, digoreng hingga kulitnya renyah dan dagingnya tetap juicy. Disajikan dengan nasi, lalapan segar, sambal, serta kerupuk dan rempeyek.",
    price: 23000,
    image:
      "https://images.pexels.com/photos/2313682/pexels-photo-2313682.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
  },
  {
    id: 3,
    name: "Ayam Penyet Lalapan",
    slug: "ayam-penyet-lalapan",
    category: "ayam",
    description: "Ayam goreng yang dipenyet dengan sambal bawang pedas",
    fullDescription:
      "Ayam goreng yang dipenyet dan diberi sambal bawang yang pedas dan aromatik. Tekstur ayam yang empuk berpadu dengan sambal yang menggugah selera, disajikan dengan lalapan segar dan nasi hangat.",
    price: 24000,
    image:
      "https://images.pexels.com/photos/7249181/pexels-photo-7249181.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
  },

  // Nasi Ikan Lalapan
  {
    id: 4,
    name: "Lele Goreng Lalapan",
    slug: "lele-goreng-lalapan",
    category: "ikan",
    description: "Lele goreng renyah dengan sambal terasi dan lalapan segar",
    fullDescription:
      "Ikan lele segar yang digoreng hingga kulitnya renyah dan dagingnya tetap lembut. Disajikan dengan sambal terasi yang pedas, lalapan segar, dan nasi putih. Pilihan favorit para pecinta ikan air tawar.",
    price: 20000,
    image:
      "https://images.pexels.com/photos/5949888/pexels-photo-5949888.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
  },
  {
    id: 5,
    name: "Gurame Bakar Lalapan",
    slug: "gurame-bakar-lalapan",
    category: "ikan",
    description: "Gurame bakar bumbu rica-rica dengan lalapan komplet",
    fullDescription:
      "Ikan gurame segar yang dibakar dengan bumbu rica-rica yang kaya rempah. Dagingnya yang tebal dan lembut berpadu dengan bumbu yang meresap sempurna. Disajikan dengan lalapan lengkap dan sambal mantap.",
    price: 35000,
    image:
      "https://images.pexels.com/photos/6419724/pexels-photo-6419724.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
  },
  {
    id: 6,
    name: "Nila Goreng Lalapan",
    slug: "nila-goreng-lalapan",
    category: "ikan",
    description: "Ikan nila goreng dengan bumbu kuning dan sambal kecap",
    fullDescription:
      "Ikan nila segar yang dibumbui dengan kunyit dan rempah-rempah, digoreng hingga sempurna. Disajikan dengan sambal kecap manis pedas, lalapan segar, dan nasi putih hangat.",
    price: 22000,
    image:
      "https://images.pexels.com/photos/6419728/pexels-photo-6419728.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
  },

  // Minuman
  {
    id: 7,
    name: "Es Jeruk Nipis",
    slug: "es-jeruk-nipis",
    category: "minuman",
    description: "Minuman segar jeruk nipis dengan es batu",
    fullDescription:
      "Minuman segar dari perasan jeruk nipis asli dengan sedikit gula aren dan es batu. Sempurna untuk menemani hidangan pedas dan menyegarkan tenggorokan.",
    price: 5000,
    image:
      "https://images.pexels.com/photos/2842876/pexels-photo-2842876.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 8,
    name: "Es Teh Manis",
    slug: "es-teh-manis",
    category: "minuman",
    description: "Teh manis dingin yang menyegarkan",
    fullDescription:
      "Teh manis tradisional yang diseduh dengan gula pasir dan disajikan dengan es batu. Minuman klasik yang cocok untuk segala cuaca dan menemani berbagai hidangan.",
    price: 4000,
    image:
      "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 9,
    name: "Jus Alpukat",
    slug: "jus-alpukat",
    category: "minuman",
    description: "Jus alpukat segar dengan susu kental manis",
    fullDescription:
      "Jus alpukat segar yang dibuat dari buah alpukat pilihan, dicampur dengan susu kental manis dan es batu. Minuman bergizi yang creamy dan menyegarkan.",
    price: 8000,
    image:
      "https://images.pexels.com/photos/5945856/pexels-photo-5945856.jpeg?auto=compress&cs=tinysrgb&w=800",
  },

  // Add-ons
  {
    id: 10,
    name: "Tempe Goreng",
    slug: "tempe-goreng",
    category: "add-ons",
    description: "Tempe goreng krispi dengan bumbu halus",
    fullDescription:
      "Tempe segar yang digoreng dengan bumbu halus hingga kulitnya krispy dan bagian dalamnya tetap lembut. Sumber protein nabati yang sehat dan lezat.",
    price: 3000,
    image:
      "https://images.pexels.com/photos/7218637/pexels-photo-7218637.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 11,
    name: "Tahu Goreng",
    slug: "tahu-goreng",
    category: "add-ons",
    description: "Tahu goreng dengan tekstur luar renyah dalam lembut",
    fullDescription:
      "Tahu putih berkualitas tinggi yang digoreng hingga bagian luar renyah dan dalam tetap lembut. Cocok sebagai pelengkap hidangan atau camilan sehat.",
    price: 3000,
    image:
      "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 12,
    name: "Kerupuk Udang",
    slug: "kerupuk-udang",
    category: "add-ons",
    description: "Kerupuk udang renyah buatan rumah",
    fullDescription:
      "Kerupuk udang buatan rumah yang digoreng fresh saat pemesanan. Renyah dan gurih dengan aroma udang yang khas, sempurna sebagai pelengkap hidangan.",
    price: 2000,
    image:
      "https://images.pexels.com/photos/7218539/pexels-photo-7218539.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

// Featured items for hero section (top 6 items)
export const featuredItems = menuItems.filter((item) => item.featured);
