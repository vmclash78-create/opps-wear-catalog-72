import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold tracking-tight text-foreground">
              Opps <span className="text-gradient">Wear</span>
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Premium menswear & accessories. Estilo que fala por si.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Navegação
            </h4>
            <nav className="flex flex-col gap-2">
              <Link to="/catalogo" className="text-sm text-foreground/70 transition-colors hover:text-primary">Catálogo</Link>
              <Link to="/sobre" className="text-sm text-foreground/70 transition-colors hover:text-primary">Sobre</Link>
              <Link to="/contato" className="text-sm text-foreground/70 transition-colors hover:text-primary">Contato</Link>
            </nav>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Contato
            </h4>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground/70 transition-colors hover:text-primary"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-border/50 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Opps Wear. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
