import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { label: string; href: string }[];
}

const MobileSidebar = ({ isOpen, onClose, navItems }: MobileSidebarProps) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-72 bg-card border-r border-border z-50 animate-slide-in-left">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Web Master Logo" 
                className="h-10 w-10 object-contain"
              />
              <span className="font-display font-bold text-gradient">
                Web Master
              </span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={item.href} style={{ animationDelay: `${index * 0.1}s` }}>
                  <a
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all font-medium"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-border">
            <Button 
              className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity font-semibold"
              asChild
            >
              <a href="#contato" onClick={onClose}>
                Fale Comigo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
