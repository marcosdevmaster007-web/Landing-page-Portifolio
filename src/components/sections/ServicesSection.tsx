import { Globe, Smartphone, ShoppingCart, Layers, Rocket, Code2 } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites Institucionais",
    description: "Sites modernos e responsivos para apresentar sua empresa ou marca de forma profissional.",
  },
  {
    icon: Layers,
    title: "Landing Pages",
    description: "Páginas de alta conversão otimizadas para capturar leads e aumentar suas vendas.",
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    description: "Apps nativos e híbridos para iOS e Android com design intuitivo e performance otimizada.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Lojas virtuais completas com integração de pagamentos e gestão de produtos.",
  },
  {
    icon: Code2,
    title: "Sistemas Web",
    description: "Aplicações web robustas e escaláveis para automatizar processos do seu negócio.",
  },
  {
    icon: Rocket,
    title: "Otimização & SEO",
    description: "Melhoria de performance e posicionamento nos mecanismos de busca.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Soluções digitais completas para impulsionar seu negócio no mundo digital.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-4" />
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              
              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
