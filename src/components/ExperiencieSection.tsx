import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, ArrowRight } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: 'Estagiário',
      company: 'Sicredi Vanguarda',
      period: '2025 – Atual',
      description: 'Área de Experiência do Associado',
      projects: [
        'Simulador de Encarteiramento (Power Apps, Denodo, Excel, SharePoint)',
        'App de análise de NPS Relacional'
      ],
      status: 'current'
    },
    {
      id: 2,
      title: 'Jovem Aprendiz',
      company: 'Sicredi Vanguarda',
      period: '2024 – 2025',
      description: 'Desenvolvimento de soluções para agências',
      projects: [
        'App de automação de retirada de cartões e brindes em agências'
      ],
      status: 'completed'
    }
  ];

  return (
    <section id="experiencia" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Experiência Profissional
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Minha trajetória profissional e principais projetos desenvolvidos
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } animate-slide-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform md:-translate-x-1/2 z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card className="p-6 bg-card/80 backdrop-blur-sm border border-border/50 shadow-[var(--shadow-card)] card-hover">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant={exp.status === 'current' ? 'default' : 'secondary'} className="mb-2">
                        {exp.status === 'current' ? 'Atual' : 'Concluído'}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                    </div>

                    <div className="flex items-center mb-3">
                      <Briefcase className="h-5 w-5 text-primary mr-2" />
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                    </div>

                    <p className="text-lg font-medium text-secondary mb-2">{exp.company}</p>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    <div className="space-y-2">
                      <h4 className="font-medium text-foreground mb-2">Principais Projetos:</h4>
                      {exp.projects.map((project, i) => (
                        <div key={i} className="flex items-start">
                          <ArrowRight className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-muted-foreground">{project}</p>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;