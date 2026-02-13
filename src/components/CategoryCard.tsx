import { Link } from "react-router-dom";
import { Category } from "@/lib/mock-data";
import { Watch, Sparkles, Crown, Shirt, Layers, Link as LinkIcon, Circle, Glasses } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Watch: <Watch size={28} />,
  Sparkles: <Sparkles size={28} />,
  Crown: <Crown size={28} />,
  Shirt: <Shirt size={28} />,
  Layers: <Layers size={28} />,
  Link: <LinkIcon size={28} />,
  Circle: <Circle size={28} />,
  Glasses: <Glasses size={28} />,
};

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link
      to={`/catalogo?categoria=${category.slug}`}
      className="group flex flex-col items-center gap-3 rounded-xl border border-border/50 bg-card p-6 text-center transition-all duration-300 glow-border hover:bg-accent/50"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20">
        {iconMap[category.icon]}
      </div>
      <span className="text-sm font-medium text-foreground">{category.name}</span>
    </Link>
  );
};

export default CategoryCard;
