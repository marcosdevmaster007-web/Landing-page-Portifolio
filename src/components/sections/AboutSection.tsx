import { Github, Code, Palette, Zap, Database, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const technologies = [
  { name: "React", icon: Code },
  { name: "TypeScript", icon: Code },
  { name: "Node.js", icon: Database },
  { name: "Tailwind CSS", icon: Palette },
  { name: "Next.js", icon: Zap },
  { name: "React Native", icon: Smartphone },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card/50" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Sobre Mim</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sou um desenvolvedor apaixonado por criar experiências digitais 
                incríveis. Com foco em desenvolvimento web e mobile, transformo 
                ideias complexas em soluções elegantes e funcionais.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Minha missão é entregar projetos de alta qualidade, utilizando 
                as tecnologias mais modernas do mercado para garantir 
                performance, escalabilidade e uma excelente experiência do usuário.
              </p>

              <Button 
                variant="outline" 
                className="border-primary/50 text-foreground hover:bg-primary/10"
                asChild
              >
                <a 
                  href="https://github.com/marcosdevmaster007-web" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-5 w-5" />
                  Ver meu GitHub
                </a>
              </Button>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                Tecnologias
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {technologies.map((tech, index) => (
                  <div 
                    key={tech.name}
                    className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 border border-border hover:border-primary/50 transition-colors group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <tech.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-foreground">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
