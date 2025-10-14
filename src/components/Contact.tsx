import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "joaolemes17@hotmail.com",
      link: "mailto:joaolemes17@hotmail.com",
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "+55 65 99979-8208",
      link: "tel:+5565999798208",
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "Cuiabá - MT",
      link: null,
    },
  ];

  return (
    <section id="contato" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Entre em <span className="text-primary">Contato</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vamos conversar sobre seu próximo projeto! Estou sempre aberto a
              novas oportunidades
            </p>
          </div>

          <div className="space-y-6 fade-in">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <info.icon size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">{info.title}</h4>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-muted-foreground">{info.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
