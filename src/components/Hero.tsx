import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 subtle-gradient"></div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Hero Text */}
          <div className="fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              {" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Enoque Neres
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Desenvolvedor full-stack focado em criar soluções digitais
              modernas.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                onClick={() => scrollToSection("projetos")}
                className="hero-gradient text-white hover:opacity-90 transition-opacity glow-effect"
              >
                Ver meus projetos
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contato")}
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Entre em contato
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-12">
              <a
                href="https://github.com/JoaoLemes18"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-background/10 backdrop-blur-sm border border-border hover:bg-primary hover:text-white transition-all duration-300 hover-lift"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/joaolemes18/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-background/10 backdrop-blur-sm border border-border hover:bg-primary hover:text-white transition-all duration-300 hover-lift"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:joaolemes17@hotmail.com"
                className="p-3 rounded-full bg-background/10 backdrop-blur-sm border border-border hover:bg-primary hover:text-white transition-all duration-300 hover-lift"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection("sobre")}
            className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Hero;
