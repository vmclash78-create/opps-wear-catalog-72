import { MessageCircle, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto max-w-xl px-4 md:px-6">
        <div className="animate-fade-up">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Contato
          </h1>
          <p className="mt-3 text-muted-foreground">
            Fale conosco. Estamos prontos para ajudar.
          </p>
        </div>

        <div className="mt-10 space-y-4 animate-fade-up animation-delay-100">
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-xl border border-border/50 bg-card p-5 transition-all duration-300 glow-border"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <MessageCircle size={22} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">WhatsApp</h3>
              <p className="text-sm text-muted-foreground">Fale com a gente agora</p>
            </div>
          </a>

          <div className="flex items-center gap-4 rounded-xl border border-border/50 bg-card p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Mail size={22} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">E-mail</h3>
              <p className="text-sm text-muted-foreground">contato@oppswear.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-xl border border-border/50 bg-card p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <MapPin size={22} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Localização</h3>
              <p className="text-sm text-muted-foreground">Brasil</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
