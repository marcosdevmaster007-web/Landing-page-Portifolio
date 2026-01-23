import { ArrowDown, Github, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/Eu-master.png";

const HeroSection = () => {
  return (
    <section 
      id="inicio" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border mb-6">
              <Code2 className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Desenvolvedor Full Stack</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Web Master</span>
              <br />
              <span className="text-gradient">Desenvolvimento Digital</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Transformando suas ideias em soluções digitais modernas, 
              responsivas e de alta performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity font-semibold glow-primary"
                asChild
              >
                <a href="#portfolio">Ver Projetos</a>
              </Button>
              
              <Button 
                size="lg" 
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
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          {/* Logo/Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 scale-110" />
              
              {/* Logo Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-gradient p-1 animate-float">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                  <img 
                    src={logo} 
                    alt="Web Master Logo" 
                    className="w-3/4 h-3/4 object-contain"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center animate-pulse-glow">
                <Code2 className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-sm text-muted-foreground">Role para baixo</span>
          <ArrowDown className="h-5 w-5 text-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
