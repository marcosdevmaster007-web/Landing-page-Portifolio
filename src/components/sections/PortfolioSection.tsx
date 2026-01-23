import { ExternalLink, Github, Star, GitFork, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGitHubRepos } from "@/hooks/useGitHubRepos";
import imgcorretora from "../../assets/c.png"
import imgpsicologa from "../../assets/p.png"
import imgadvogado from "../../assets/ad.png"
import imgpizza from "../../assets/pi.png"



// Projetos destacados manuais
const featuredProjects = [
  {
    title: "Portfolio Web Master",
    description: "Landing page moderna com design responsivo e animações suaves para corretora de imóveis.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    image: imgcorretora,
    liveUrl: "https://corretora-imoveis.netlify.app/",
    githubUrl: "https://corretora-imoveis.netlify.app/",
  },

    {
    title: "Portfolio Web Master",
    description: "Landing page moderna com design responsivo e animações suaves para Psicóloga.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    image: imgpsicologa,
    liveUrl: "https://psicologa-ana.netlify.app/",
    githubUrl: "https://psicologa-ana.netlify.app/",
  },

      {
    title: "Portfolio Web Master",
    description: "Landing page moderna com design responsivo e animações suaves para Advogado.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    image: imgadvogado,
    liveUrl: "https://ricardo-silva-advocacia.netlify.app/",
    githubUrl: "https://ricardo-silva-advocacia.netlify.app/",
  },

  {
    title: "App Mobile",
    description: "Aplicativo mobile delivery para pizzaria.",
    tags: ["React Native", "Firebase", "Redux"],
    image: imgpizza,
    liveUrl: "https://pizzaria-app.netlify.app/",
    githubUrl: "https://pizzaria-app.netlify.app/",
  },
];

const PortfolioSection = () => {
  const { repos, loading, error } = useGitHubRepos("marcosdevmaster007-web");

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card/50" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Portfólio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos meus projetos e repositórios públicos.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-4" />
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-8 text-center">
            Projetos Destacados
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className="group rounded-xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="h-full bg-muted flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                        <span className="font-display text-2xl font-bold text-primary-foreground">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                
                {/* Content */}
                <div className="p-6">
                  <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 border-primary/50 text-foreground hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" />
                        Código
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-primary text-primary-foreground hover:opacity-90"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Repositories */}
        <div>
          <h3 className="font-display text-2xl font-semibold text-foreground mb-8 text-center flex items-center justify-center gap-3">
            <Github className="h-6 w-6 text-primary" />
            Repositórios GitHub
          </h3>
          
          {loading && (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 text-primary animate-spin" />
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Não foi possível carregar os repositórios.</p>
              <Button 
                variant="outline" 
                className="mt-4 border-primary/50 text-foreground hover:bg-primary/10"
                asChild
              >
                <a 
                  href="https://github.com/marcosdevmaster007-web" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Ver no GitHub
                </a>
              </Button>
            </div>
          )}

          {!loading && !error && repos.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all"
                >
                  <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {repo.name}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {repo.description || "Sem descrição"}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded-full bg-primary" />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="h-4 w-4" />
                      {repo.forks_count}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}

          {/* View All on GitHub */}
          <div className="text-center mt-8">
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
                Ver todos os repositórios
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
