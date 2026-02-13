export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category_id: string;
  category_name: string;
  images: string[];
  featured: boolean;
  active: boolean;
  display_order: number;
  created_at: string;
}

export interface Banner {
  id: string;
  image_url: string;
  link?: string;
  active: boolean;
}

export const categories: Category[] = [
  { id: "1", name: "Relógios", slug: "relogios", icon: "Watch" },
  { id: "2", name: "Perfumes", slug: "perfumes", icon: "Sparkles" },
  { id: "3", name: "Bonés", slug: "bones", icon: "Crown" },
  { id: "4", name: "Camisas", slug: "camisas", icon: "Shirt" },
  { id: "5", name: "Blusas", slug: "blusas", icon: "Layers" },
  { id: "6", name: "Correntes", slug: "correntes", icon: "Link" },
  { id: "7", name: "Pulseiras", slug: "pulseiras", icon: "Circle" },
  { id: "8", name: "Óculos", slug: "oculos", icon: "Glasses" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Relógio Chronograph Black Edition",
    description: "Relógio masculino premium com caixa em aço inoxidável preto, cronógrafo funcional e pulseira de couro legítimo. Design sofisticado para o homem moderno que valoriza cada segundo.",
    price: 899.90,
    category_id: "1",
    category_name: "Relógios",
    images: ["/placeholder.svg"],
    featured: true,
    active: true,
    display_order: 1,
    created_at: "2024-01-15",
  },
  {
    id: "2",
    name: "Perfume Noir Intense 100ml",
    description: "Fragrância masculina intensa com notas de madeira, âmbar e especiarias. Uma assinatura olfativa que marca presença e transmite confiança e sofisticação.",
    price: 349.90,
    category_id: "2",
    category_name: "Perfumes",
    images: ["/placeholder.svg"],
    featured: true,
    active: true,
    display_order: 2,
    created_at: "2024-01-10",
  },
  {
    id: "3",
    name: "Boné Structured Cap Premium",
    description: "Boné premium com estrutura rígida, tecido de alta qualidade e acabamento impecável. Aba curva com ajuste snapback para conforto personalizado.",
    price: 189.90,
    category_id: "3",
    category_name: "Bonés",
    images: ["/placeholder.svg"],
    featured: false,
    active: true,
    display_order: 3,
    created_at: "2024-02-01",
  },
  {
    id: "4",
    name: "Camisa Slim Fit Dark Cotton",
    description: "Camisa social slim fit em algodão egípcio de alta gramatura. Corte preciso que valoriza a silhueta masculina com elegância e conforto.",
    price: 279.90,
    category_id: "4",
    category_name: "Camisas",
    images: ["/placeholder.svg"],
    featured: true,
    active: true,
    display_order: 4,
    created_at: "2024-01-20",
  },
  {
    id: "5",
    name: "Corrente Cuban Link Gold",
    description: "Corrente masculina estilo Cuban Link em aço banhado a ouro 18k. Elos robustos com acabamento polido que reflete luz e atitude.",
    price: 459.90,
    category_id: "6",
    category_name: "Correntes",
    images: ["/placeholder.svg"],
    featured: true,
    active: true,
    display_order: 5,
    created_at: "2024-02-05",
  },
  {
    id: "6",
    name: "Óculos Aviator Titanium",
    description: "Óculos de sol estilo aviador com armação em titânio ultraleve e lentes polarizadas com proteção UV400. Design atemporal com tecnologia moderna.",
    price: 529.90,
    category_id: "8",
    category_name: "Óculos",
    images: ["/placeholder.svg"],
    featured: false,
    active: true,
    display_order: 6,
    created_at: "2024-02-10",
  },
  {
    id: "7",
    name: "Pulseira Leather Magnetic",
    description: "Pulseira masculina em couro trançado premium com fecho magnético em aço inoxidável. Sofisticação discreta para o dia a dia.",
    price: 159.90,
    category_id: "7",
    category_name: "Pulseiras",
    images: ["/placeholder.svg"],
    featured: false,
    active: true,
    display_order: 7,
    created_at: "2024-02-12",
  },
  {
    id: "8",
    name: "Blusa Oversized Premium",
    description: "Blusa oversized em algodão pima com acabamento em silk premium. Corte moderno e confortável para looks urbanos com atitude.",
    price: 219.90,
    category_id: "5",
    category_name: "Blusas",
    images: ["/placeholder.svg"],
    featured: false,
    active: true,
    display_order: 8,
    created_at: "2024-02-15",
  },
];

export function formatPrice(price: number): string {
  return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function getWhatsAppLink(productName: string, productPrice: number): string {
  const message = encodeURIComponent(
    `Olá! Tenho interesse no produto: ${productName} - ${formatPrice(productPrice)}. Gostaria de mais informações.`
  );
  return `https://wa.me/5500000000000?text=${message}`;
}
