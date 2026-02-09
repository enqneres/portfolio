import { Calendar, MapPin, Building } from "lucide-react";
import { Card } from "@/components/ui/card";

type ExperienceItem = {
  id: number;
  position: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  academic?: boolean; // <- novo campo
  description: string;
  achievements: string[];
};

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      position: "Analista Desenvolvedor II",
      company: "Hitss Brasil",
      location: "Rio de Janeiro, RJ",
      period: "Nov 2025 - Presente",
      current: true,
      description:
        "Atuo como Analista Desenvolvedor II no desenvolvimento, manutenção e evolução de sistemas corporativos utilizando Java e Angular. Participo de todo o ciclo de vida da aplicação, desde a análise de requisitos até a entrega e sustentação, atuando também na integração entre sistemas via APIs REST, correção de bugs e melhorias contínuas. Realizo análise de incidentes em produção, utilizando consultas SQL no Oracle DB para identificação de falhas, validação de dados e apoio à tomada de decisão técnica.",
      achievements: [
        "Desenvolvimento e manutenção de funcionalidades backend em Java e frontend em Angular",
        "Implementação e consumo de APIs REST para integração entre sistemas internos e externos",
        "Análise e resolução de incidentes em produção por meio de consultas SQL no Oracle DB",
        "Correção de bugs e implementação de melhorias evolutivas, reduzindo falhas recorrentes",
        "Otimização de consultas e validação de dados em banco Oracle",
        "Uso de versionamento com Git e aplicação de boas práticas de desenvolvimento",
        "Atuação colaborativa com times de negócio, QA e infraestrutura para entrega de soluções"
      ],
    },
    {
      id: 2,
      position: "SysOps / SRE",
      company: "EXA",
      location: "Parnaíba, PI",
      period: "Jan 2024 - Nov 2025",
      current: false,
      academic: false, // <- badge PJ
      description:
        "Atuei como SysOps com foco em observabilidade, confiabilidade e operação de ambientes produtivos em cloud. Responsável pelo monitoramento ativo, análise de incidentes, automação de rotinas operacionais e otimização de custos, garantindo alta disponibilidade e estabilidade dos serviços.",
      achievements: [
        "Monitoramento e observabilidade de ambientes produtivos utilizando Zabbix, Grafana e análise de logs",
        "Administração de infraestrutura em cloud (AWS, Google Cloud e Huawei Cloud), incluindo provisionamento e otimização de recursos",
        "Implementação de rotinas automatizadas via cronjobs para tarefas operacionais e manutenção",
        "Gerenciamento e troubleshooting de mensageria RabbitMQ, garantindo estabilidade no fluxo de mensagens",
        "Elaboração de relatórios FinOps com foco em otimização de custos e downsizing de recursos em cloud",
        "Execução e validação de rotinas de backup e restore, assegurando recuperação de dados",
        "Atuação em gerenciamento de incidentes, elaboração de post-mortems e documentação técnica",
        "Desenvolvimento de infraestrutura como código (IaC) utilizando Terraform para padronização e automação de ambientes"
      ],
    },
    {
      id: 3,
      position: "Desenvolvedor Java",
      company: "G4F",
      location: "Recife, PE",
      period: "Mar 2024 - Out 2025",
      current: false,
      academic: true, // <- badge PJ
      description:
        "Atuei como Desenvolvedor Java no cliente SEFAZ-PE, com foco no desenvolvimento e evolução de sistemas corporativos utilizando Java 17 (Spring Boot) no backend e Angular 16 com PrimeNG no frontend. Participei ativamente da definição e implementação de arquitetura orientada a microsserviços, integração entre camadas e automação de deploys, seguindo práticas modernas de desenvolvimento e metodologias ágeis.",
      achievements: [
        "Desenvolvimento e manutenção de aplicações backend em Java 17 utilizando Spring Boot",
        "Implementação de interfaces frontend com Angular 16 e PrimeNG",
        "Participação na definição e implementação de arquitetura baseada em microsserviços",
        "Desenvolvimento e consumo de APIs REST utilizando JPA/Hibernate",
        "Integração com sistemas de mensageria utilizando Kafka",
        "Manipulação e consultas em bancos de dados PostgreSQL, MongoDB e SQL Server",
        "Containerização de aplicações com Docker Compose",
        "Automação de deploys utilizando ArgoCD e versionamento com GitLab",
        "Atuação em ambientes ágeis (Scrum/Kanban) com acompanhamento via Channel JExperts",
        "Implementação de testes unitários com JUnit e Mockito",
        "Aplicação de padrões de projeto e boas práticas do ecossistema Java EE"
      ],
    },
    {
      id: 4,
      position: "Desenvolvedor Java",
      company: "GSantos Tech",
      location: "Parnaíba, PI",
      period: "Jun 2021 - Dez 2023",
      current: false,
      academic: true, // <- badge PJ
      description:
        "Atuei como Desenvolvedor Java autônomo na criação de um SaaS voltado para o ramo de pizzarias, com foco em atender pequenos empreendimentos locais. Fui responsável pelo desenho da arquitetura, desenvolvimento das APIs, regras de negócio, persistência de dados e integração com o frontend, acompanhando todo o ciclo de vida do produto.",
      achievements: [
        "Desenvolvimento de backend em Java com arquitetura baseada em APIs REST",
        "Criação e implementação de regras de negócio para sistema SaaS",
        "Integração entre frontend e backend utilizando serviços REST",
        "Modelagem e persistência de dados em bancos relacionais",
        "Implementação de autenticação e controle de acesso ao sistema",
        "Atuação end-to-end: levantamento de requisitos, desenvolvimento, testes e manutenção",
        "Entrega de solução funcional voltada para pequenos negócios da região"
      ],
    },
    {
      id: 5,
      position: "Analista de Sistemas",
      company: "TICBOX SISTEMAS",
      location: "Parnaíba, PI",
      period: "Jul 2018 - Mar 2021",
      current: false,
      description:
        "Atuei como Analista de Sistemas participando de todo o ciclo de desenvolvimento de soluções corporativas, desde a análise e levantamento de requisitos até a implantação e suporte. Trabalhei com integração entre sistemas, desenvolvimento de APIs REST e aplicações web, aplicando boas práticas de segurança e qualidade de software.",
      achievements: [
        "Desenvolvimento e integração de APIs REST entre sistemas web e ERP",
        "Implementação de práticas de segurança, incluindo criptografia de dados e autenticação em dois fatores (2FA)",
        "Participação completa no ciclo de desenvolvimento: análise, projeto, desenvolvimento, testes e implantação",
        "Desenvolvimento backend com Java 8+, Spring Boot, JPA/Hibernate e Maven/Gradle",
        "Criação de interfaces web utilizando Angular, PrimeFaces, JavaScript, HTML e CSS",
        "Manipulação de múltiplos bancos de dados: PostgreSQL, MySQL, SQL Server e FirebirdSQL",
        "Containerização e gerenciamento de aplicações com Docker",
        "Versionamento de código com Git e GitLab",
        "Execução de testes unitários com JUnit e Mockito",
        "Deploy e gerenciamento de aplicações em servidores JBOSS"
      ],
    },
  ];

  return (
    <section id="experiencia" className="py-20 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Minha <span className="text-primary">Experiência</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trajetória profissional e principais conquistas ao longo da
              carreira
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background z-10">
                    {exp.current && (
                      <div className="absolute inset-0 bg-primary rounded-full animate-ping"></div>
                    )}
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                      }`}
                  >
                    <Card className="p-6 border-0 card-shadow hover-lift">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Calendar size={16} className="text-primary" />
                          <span className="text-sm font-medium text-primary">
                            {exp.period}
                          </span>
                          {exp.current && (
                            <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                              Atual
                            </span>
                          )}
                          {exp.academic && (
                            <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">
                              Contrato PJ
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl font-semibold mb-2">
                          {exp.position}
                        </h3>

                        <div className="flex items-center space-x-4 text-muted-foreground text-sm">
                          <div className="flex items-center space-x-1">
                            <Building size={14} />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin size={14} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-medium mb-2">
                          Principais conquistas:
                        </h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="text-sm text-muted-foreground flex items-start"
                            >
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
