import { Card } from '@/components/ui/card';
import { User, GraduationCap, Target } from 'lucide-react';
import { useRef } from 'react';
import { useTextType } from '@/hooks/use-text-type';

const AboutSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const profileRef = useRef<HTMLParagraphElement>(null);
  const { createTextTypeAnimation } = useTextType({ delay: 0.5, duration: 2 });

  // Animate section title and subtitle
  createTextTypeAnimation(
    [titleRef, subtitleRef],
    [
      "Sobre Mim",
      "Conheça mais sobre minha jornada acadêmica e profissional"
    ],
    0.5
  );

  // Animate profile description
  createTextTypeAnimation(
    [profileRef],
    [
      "Estudante de Ciência da Computação, atuando como Estagiário na Sicredi Vanguarda SP/PR/RJ na área de Experiência do Associado. Com interesse especial em dados, Power Apps, Power BI e Cibersegurança, busco constantemente evoluir tecnicamente e contribuir para projetos inovadores que impactem positivamente a experiência dos usuários."
    ],
    1.5
  );

  return (
    <section id="sobre" className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-in">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
          </h2>
          <p ref={subtitleRef} className="text-muted-foreground max-w-2xl mx-auto">
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <Card className="p-8 bg-card/80 backdrop-blur-sm border border-border/50 shadow-[var(--shadow-card)] card-hover">
              <div className="flex items-center mb-6">
                <User className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-semibold">Perfil Profissional</h3>
              </div>
              <p ref={profileRef} className="text-muted-foreground leading-relaxed text-lg">
              </p>
            </Card>
          </div>

          <div className="grid gap-6 animate-scale-in">
            <Card className="p-6 bg-card/80 backdrop-blur-sm border border-border/50 shadow-[var(--shadow-card)] card-hover">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 text-secondary mr-3" />
                <h4 className="text-xl font-semibold">Formação</h4>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-primary">UTFPR</p>
                  <p className="text-sm text-muted-foreground">Bacharelado em Ciência da Computação</p>
                  <p className="text-sm text-muted-foreground">2025 – em andamento</p>
                </div>
                <div>
                  <p className="font-medium">Colégio Estadual Tancredo Neves</p>
                  <p className="text-sm text-muted-foreground">Ensino Médio</p>
                  <p className="text-sm text-muted-foreground">2022 – 2024</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm border border-border/50 shadow-[var(--shadow-card)] card-hover">
              <div className="flex items-center mb-4">
                <Target className="h-6 w-6 text-primary mr-3" />
                <h4 className="text-xl font-semibold">Áreas de Interesse</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Dados e BI', 'Power Platform', 'Cibersegurança', 'Experiência do Usuário', 'Automação'].map((area) => (
                  <span key={area} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20">
                    {area}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;