const About = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto max-w-2xl px-4 md:px-6">
        <div className="animate-fade-up">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Sobre a <span className="text-gradient">Opps Wear</span>
          </h1>
          <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              A Opps Wear nasceu da crença de que estilo não precisa ser complicado — ele precisa ser autêntico. Somos uma curadoria premium de moda e acessórios masculinos que seleciona cada peça com um critério: qualidade que você sente.
            </p>
            <p>
              Nosso compromisso é com o homem moderno que entende que a forma como se apresenta ao mundo é uma extensão de quem ele é. Não seguimos tendências efêmeras. Investimos em peças atemporais que constroem uma identidade visual sólida e confiante.
            </p>
            <p>
              De relógios que marcam momentos a correntes que definem atitude, cada item em nosso catálogo foi escolhido para elevar seu estilo pessoal com exclusividade e sofisticação.
            </p>
            <p className="font-medium text-foreground">
              Opps Wear — Style that speaks for itself.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
