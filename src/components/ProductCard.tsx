import { Link } from "react-router-dom";
import { Product, formatPrice } from "@/lib/mock-data";
import { Star } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link
      to={`/produto/${product.id}`}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card transition-all duration-300 glow-border"
    >
      {product.featured && (
        <div className="absolute left-3 top-3 z-10 flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary backdrop-blur-sm">
          <Star size={12} fill="currentColor" />
          Destaque
        </div>
      )}
      <div className="aspect-square overflow-hidden bg-secondary">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {product.category_name}
        </span>
        <h3 className="text-sm font-semibold leading-tight text-foreground line-clamp-2">
          {product.name}
        </h3>
        <p className="mt-auto pt-2 text-base font-bold text-primary">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
