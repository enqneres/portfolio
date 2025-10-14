import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpeg";
import project5 from "@/assets/project5.jpg";
import project6 from "@/assets/project6.png";
import project7 from "@/assets/project7.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Sistema Fasiclin - Gestão de Profissionais - Mobile",
      description:
        "Aplicação Full Stack para gestão de profissionais, integrando cadastro, listagem, edição, inativação/reativação e filtros dinâmicos por especialidade com autenticação JWT.",
      image: project1,
      technologies: [
        "React Native",
        "TypeScript",
        "Node.js",
        "Express",
        "MySQL",
        "Expo",
      ],
      github: "https://github.com/JoaoLemes18/fasiclinapp",
      demo: "https://github.com/JoaoLemes18/fasiclinapp",
    },
    {
      id: 2,
      title: "Sistema Fasiclin - Gestão Hospitalar - Web",
      description:
        "Aplicação Full Stack para otimizar a gestão de pacientes, agendamentos e prontuários eletrônicos na clínica-escola, integrando frontend e backend em um fluxo unificado.",
      image: project2,
      technologies: [
        "React",
        "TypeScript",
        "Redux Toolkit",
        "Node.js",
        "Express",
        "Sequelize",
        "MySQL",
      ],
      github: "https://github.com/JoaoLemes18/SistemaClinica",
    },
    {
      id: 3,
      title: "Plataforma de Cursos - Full Stack",
      description:
        "Plataforma completa para gestão de cursos técnicos com interfaces para alunos, professores e coordenadores. Frontend em React.js + TypeScript e backend em C# (.NET Core) com autenticação JWT e sistema de permissões.",
      image: project3,
      technologies: [
        "React",
        "TypeScript",
        "C#",
        ".NET Core",
        "SQL Server",
        "Entity Framework",
        "JWT",
        "Vite",
      ],
      github: "https://github.com/JoaoLemes18/plataforma-cursos",
      backend: "https://github.com/JoaoLemes18/PlataformaCursosAPI",
      demo: undefined,
    },
    {
      id: 4,
      title: "E-commerce de plantas",
      description:
        "E-commerce desenvolvido na Compass UOL, seguindo os padrões solicitados.",
      image: project4,
      technologies: [
        "React Native",
        "TypeScript",
        "Firebase",
        "Redux",
        "Async Storage",
        "Expo",
      ],
      github: "https://github.com/JoaoLemes18/PlantParadise",
      demo: undefined,
    },
    {
      id: 5,
      title: "EduIa",
      description:
        "Aplicativo educacional desenvolvido para professores e educadores, que integra Inteligência Artificial para auxiliar na criação de conteúdos pedagógicos.",
      image: project5,
      technologies: [
        "React Native",
        "TypeScript",
        "Node.js",
        "MySQL",
        "Axios",
        "JWT",
        "OpenAI",
        "React Query",
        "Async Storage",
        "Expo",
      ],
      github: "https://github.com/JoaoLemes18/EduIA",
      demo: undefined,
    },
    {
      id: 6,
      title:
        "Alavancagem Patrimonial - Dashboard de Investimentos Imobiliários",
      description:
        "Aplicação Full Stack para análise de investimentos imobiliários. O sistema calcula lucro líquido estimado, total investido e exibe gráficos interativos de performance por imóvel e composição de custos, integrando backend com Prisma/Express e frontend em React + Tailwind.",
      image: project6, // adicione a imagem do dashboard na pasta assets e ajuste o caminho
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "TailwindCSS",
        "Recharts",
        "Node.js",
        "Express",
        "Prisma",
        "MySQL",
      ],
      github: "https://github.com/JoaoLemes18/patrimonial-imoveis", // coloque o repositório certo
      demo: undefined,
    },
    {
      id: 7,
      title: "Gerenciador de Dispositivos - MVP",
      description:
        "Aplicativo mobile para gestão de estoque de smartphones. Permite cadastrar, editar, remover, filtrar e exportar relatórios em PDF. Desenvolvido como MVP para validar a ideia, já em uso real no dia a dia.",
      image: project7, // adicione a imagem na pasta assets e importe no topo
      technologies: [
        "React Native",
        "TypeScript",
        "Expo",
        "SQLite",
        "Expo Camera",
        "Context API",
        "PDF Export",
      ],
      github: "https://github.com/JoaoLemes18/GestaoEstoque-Celulares",
      demo: undefined,
    },
  ];

  return (
    <section id="projetos" className="py-20 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meus <span className="text-primary">Projetos</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Alguns dos projetos que desenvolvi e que demonstram minhas
              habilidades
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden border-0 card-shadow hover-lift"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300" />

                  {/* Overlay Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.github && (
                      <Button
                        asChild
                        size="sm"
                        variant="secondary"
                        className="bg-white/90 hover:bg-white"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Abrir código de ${project.title} no GitHub`}
                        >
                          <Github size={16} className="mr-2" />
                          Código
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-2">
                    {project.github && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Abrir repositório de ${project.title} no GitHub`}
                        >
                          <Github size={16} className="mr-2" />
                          GitHub
                        </a>
                      </Button>
                    )}

                    {project.backend && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1"
                      >
                        <a
                          href={project.backend}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Abrir backend de ${project.title} no GitHub`}
                        >
                          <Github size={16} className="mr-2" />
                          Backend
                        </a>
                      </Button>
                    )}

                    {project.demo && (
                      <Button
                        asChild
                        size="sm"
                        className="flex-1 hero-gradient text-white"
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Ver demo/projeto de ${project.title}`}
                        >
                          <ExternalLink size={16} className="mr-2" />
                          Ver projeto
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12 fade-in">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <a
                href="https://github.com/JoaoLemes18?tab=repositories"
                target="_blank"
                rel="noreferrer"
                aria-label="Ver todos os projetos no GitHub"
              >
                Ver todos os projetos
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
