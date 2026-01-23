import { Github, Linkedin, Mail, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/marcosdevmaster007-web",
      label: "GitHub",
    },
    {
      icon: Mail,
      href: "#contato",
      label: "Email",
    },
  ];

  const quickLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Web Master Logo" 
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="font-display font-bold text-lg text-gradient">
                  Web Master
                </h3>
                <p className="text-sm text-muted-foreground">
                  Desenvolvimento Digital
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Transformando ideias em soluções digitais inovadoras.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Conecte-se
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {currentYear} Web Master Desenvolvimento Digital. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
