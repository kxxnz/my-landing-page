import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { useTextType } from '@/hooks/use-text-type';
import CardSwap, { Card as SwapCard } from '@/components/CardSwap';

const ExperienceSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const { createTextTypeAnimation } = useTextType({ delay: 0.5, duration: 1.5 });

  // Animate section title and subtitle
  createTextTypeAnimation(
    [titleRef, subtitleRef],
    [
      "Experiência Profissional",
      "Minha trajetória profissional e principais projetos desenvolvidos"
    ],
    0.5
  );

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
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
          </h2>
          <p ref={subtitleRef} className="text-muted-foreground max-w-2xl mx-auto">
          </p>
        </div>

        {/* CardSwap centered */}
        <div className="flex justify-center items-center min-h-[600px]">
          <div style={{ height: '600px', position: 'relative', width: '100%', maxWidth: '800px' }}>
            <CardSwap
              cardDistance={80}
              verticalDistance={90}
              delay={4000}
              pauseOnHover={true}
              width={500}
              height={400}
              easing="smooth"
            >
              {experiences.map((exp, index) => (
                <SwapCard key={exp.id} className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <Badge variant={exp.status === 'current' ? 'default' : 'secondary'}>
                      {exp.status === 'current' ? 'Atual' : 'Concluído'}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.period}
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <Briefcase className="h-6 w-6 text-primary mr-3" />
                    <h3 className="text-2xl font-semibold">{exp.title}</h3>
                  </div>

                  <p className="text-xl font-medium text-secondary mb-3">{exp.company}</p>
                  <p className="text-base text-muted-foreground mb-6">{exp.description}</p>

                  <div className="space-y-3">
                    <h4 className="font-medium text-lg text-foreground mb-3">Principais Projetos:</h4>
                    {exp.projects.map((project, i) => (
                      <div key={i} className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-primary mr-3 mt-1 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">{project}</p>
                      </div>
                    ))}
                  </div>
                </SwapCard>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;