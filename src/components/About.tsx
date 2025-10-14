import { Code, Palette, Zap, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.jpeg";

const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Desenvolvimento",
      description:
        "Experiência em React, Node.js, TypeScript e tecnologias modernas",
    },
    {
      icon: Palette,
      title: "Design",
      description: "UI/UX design com foco na experiência do usuário",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Otimização e boas práticas para aplicações rápidas",
    },
    {
      icon: Users,
      title: "Colaboração",
      description: "Trabalho em equipe e comunicação efetiva",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sobre <span className="text-primary">mim</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça um pouco mais sobre minha trajetória e paixões
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo and Info */}
            <div className="fade-in">
              <div className="relative max-w-md mx-auto lg:mx-0">
                <div className="aspect-square rounded-2xl overflow-hidden card-shadow">
                  <img
                    src={`${profilePhoto}?v=${Date.now()}`}
                    alt="Desenvolvedor Full Stack"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative gradient overlay */}
                <div className="absolute -inset-4 card-gradient rounded-3xl -z-10 opacity-20"></div>
              </div>
            </div>

            {/* Content */}
            <div className="fade-in">
              <h3 className="text-2xl font-semibold mb-6">
                Desenvolvedor focado em criar soluções digitais de impacto
              </h3>

              <div className="space-y-4 text-muted-foreground mb-8">
                <p>
                  Sou um desenvolvedor full stack com experiência em aplicações
                  web e mobile, buscando sempre unir eficiência técnica com
                  interfaces bem pensadas.
                </p>

                <p>
                  Trabalho principalmente com React, React Native TypeScript e
                  Node.js, além de explorar tecnologias cloud. Estou sempre em
                  evolução, aprendendo novas ferramentas e aplicando boas
                  práticas para entregar projetos de alto nível.
                </p>

                <p>
                  Além da programação, me interesso por música, esportes e
                  atividades ao ar livre. Acredito que cultivar diferentes
                  interesses traz novas perspectivas e contribui para soluções
                  mais criativas no dia a dia de desenvolvimento.
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <Card
                    key={index}
                    className="p-4 border-0 bg-background/50 backdrop-blur-sm hover-lift"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <skill.icon size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">{skill.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
