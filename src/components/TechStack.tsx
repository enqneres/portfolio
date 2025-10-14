import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Cpu,
  Globe,
  Server,
  Smartphone,
  Database,
  Cog,
  Lock,
} from "lucide-react";

// Ícones das stacks
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiDotnet,
  SiMysql,
  SiSequelize,
  SiAmazon,
  SiExpo,
  SiSwagger,
  SiEslint,
  SiPrisma,
  SiVite,
  SiOpenai,
  SiAxios,
  SiJsonwebtokens,
  SiSqlite,
  SiDocker,
} from "react-icons/si";

type TechItem = { name: string; note?: string; icon?: React.ElementType };

const CATEGORIES: {
  title: string;
  icon: React.ElementType;
  items: TechItem[];
}[] = [
  {
    title: "Frontend Web",
    icon: Globe,
    items: [
      { name: "React", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Vite", icon: SiVite },
      { name: "SASS/CSS" },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "shadcn/ui" },
      { name: "React Router DOM" },
    ],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    items: [
      { name: "React Native", icon: FaReact },
      { name: "Expo", icon: SiExpo },
      { name: "Expo Router", icon: SiExpo },
      { name: "React Navigation", note: "Rotas" },
      { name: "React Query", note: "@tanstack/react-query" },
      { name: "AsyncStorage", note: "Sessão/Persistência" },
      { name: "Axios", icon: SiAxios, note: "HTTP" },
    ],
  },
  {
    title: "Backend (Node.js)",
    icon: Server,
    items: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express" },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Prisma ORM", icon: SiPrisma },
      { name: "Sequelize", icon: SiSequelize },
      { name: "JWT", note: "Auth", icon: SiJsonwebtokens },
      { name: "MVC", note: "Arquitetura" },
    ],
  },
  {
    title: ".NET / C#",
    icon: Cog,
    items: [
      { name: "ASP.NET Core", icon: SiDotnet },
      { name: "Entity Framework Core", note: "ORM" },
      { name: "Swashbuckle / Swagger", note: "OpenAPI", icon: SiSwagger },
      { name: "HttpClient", note: "Integrações" },
    ],
  },
  {
    title: "Banco de Dados",
    icon: Database,
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "SQLite", icon: SiSqlite },
      { name: "Prisma ORM", icon: SiPrisma },
      { name: "Sequelize", icon: SiSequelize },
      { name: "EF Core + MySQL", note: "Provider .NET" },
    ],
  },
  {
    title: "Dev & Ops",
    icon: Cpu,
    items: [
      { name: "REST APIs", note: "Padrões e versionamento" },
      { name: "ESLint + Prettier", icon: SiEslint },
      { name: "Git / GitHub", icon: FaGitAlt },
      { name: "OpenAI API", icon: SiOpenai, note: "Integração de IA" },
      { name: "Docker", icon: SiDocker },
      { name: "AWS", icon: SiAmazon, note: "Cloud & Infra" }, // 🔹 adicionado
    ],
  },
];

const Chip = ({
  children,
  Icon,
}: {
  children: React.ReactNode;
  Icon?: React.ElementType;
}) => (
  <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-foreground/80 hover:text-primary transition-colors border">
    {Icon && <Icon size={16} />}
    {children}
  </span>
);

const TechStack = () => {
  return (
    <section id="tecnologias" className="py-20 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Minhas <span className="text-primary">Tecnologias</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stack usada nos meus projetos — web, mobile e backend.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 fade-in">
            {CATEGORIES.map(({ title, icon: Icon, items }) => (
              <Card key={title} className="p-6 card-shadow hover-lift">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <h3 className="font-semibold">{title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((it) =>
                    it.note ? (
                      <Tooltip key={`${title}-${it.name}`}>
                        <TooltipTrigger asChild>
                          <div>
                            <Chip Icon={it.icon}>{it.name}</Chip>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>{it.note}</TooltipContent>
                      </Tooltip>
                    ) : (
                      <Chip key={`${title}-${it.name}`} Icon={it.icon}>
                        {it.name}
                      </Chip>
                    )
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
