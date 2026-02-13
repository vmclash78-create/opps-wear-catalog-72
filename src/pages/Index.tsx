import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/lib/mock-data";

const featuredProducts = products.filter((p) => p.featured);

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Premium menswear accessories"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-2xl animate-fade-up">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Premium menswear
              <br />
              <span className="text-gradient">&amp; accessories.</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Style that speaks for itself. Curadoria premium de moda e acessórios masculinos.
            </p>
            <Link
              to="/catalogo"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110 hover:shadow-lg hover:shadow-primary/20"
            >
              Ver Catálogo
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 text-center animate-fade-up">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Categorias
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Explore nossa coleção por categoria
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 animate-fade-up animation-delay-100">
            {categories.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="border-t border-border/30 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 flex items-end justify-between animate-fade-up">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Destaques
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Produtos selecionados a dedo
              </p>
            </div>
            <Link
              to="/catalogo"
              className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              Ver todos →
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 animate-fade-up animation-delay-200">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Institutional */}
      <section className="border-t border-border/30 py-20">
        <div className="container mx-auto px-4 text-center md:px-6">
          <div className="mx-auto max-w-xl animate-fade-up">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Built for <span className="text-gradient">Style</span>
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Na Opps Wear, cada peça é selecionada com propósito. Acreditamos que estilo não é sobre seguir tendências — é sobre definir a sua própria identidade com confiança e autenticidade.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
