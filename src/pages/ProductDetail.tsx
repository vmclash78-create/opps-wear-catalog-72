import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { products, formatPrice, getWhatsAppLink } from "@/lib/mock-data";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <p className="text-lg text-muted-foreground">Produto não encontrado.</p>
        <Link to="/catalogo" className="mt-4 text-sm text-primary hover:underline">
          Voltar ao catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="py-10">
      <div className="container mx-auto px-4 md:px-6">
        <Link
          to="/catalogo"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft size={16} />
          Voltar ao catálogo
        </Link>

        <div className="grid gap-10 md:grid-cols-2 animate-fade-up">
          {/* Image */}
          <div className="aspect-square overflow-hidden rounded-2xl border border-border/50 bg-card">
            <img
              src={product.images[0]}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <span className="text-xs font-medium uppercase tracking-wider text-primary">
              {product.category_name}
            </span>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {product.name}
            </h1>
            <p className="mt-4 text-2xl font-bold text-gradient">
              {formatPrice(product.price)}
            </p>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              {product.description}
            </p>
            <a
              href={getWhatsAppLink(product.name, product.price)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110 hover:shadow-lg hover:shadow-primary/20"
            >
              <MessageCircle size={18} />
              Comprar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
