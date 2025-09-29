import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Database, 
  Zap, 
  BarChart3, 
  Sheet, 
  Award, 
  Globe,
  Code,
  Settings,
  FileSpreadsheet,
  Activity
} from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    { name: 'Power Apps', icon: Code, level: 'Avançado', color: 'primary' },
    { name: 'Power Automate', icon: Zap, level: 'Avançado', color: 'primary' },
    { name: 'Power Query', icon: Settings, level: 'Intermediário', color: 'secondary' },
    { name: 'Excel', icon: FileSpreadsheet, level: 'Avançado', color: 'primary' },
    { name: 'Denodo', icon: Database, level: 'Intermediário', color: 'secondary' },
    { name: 'Power BI', icon: BarChart3, level: 'Intermediário', color: 'secondary' }
  ];

  const certifications = [
    'Python para Análise de Dados',
    'Power BI Básico',
    'International Test of Academic Skill'
  ];

  const languages = [
    { name: 'Português', level: 'Nativo', flag: '🇧🇷' },
    { name: 'Inglês', level: 'Professional Working', flag: '🇺🇸' }
  ];

  return (
    <section id="competencias" className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Competências & Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tecnologias, certificações e idiomas que domino
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-card/80 backdrop-blur-sm border border-border/50 shadow-[var(--shadow-card)] animate-slide-in">
              <div className="flex items-center mb-6">
                <Activity className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Habilidades Técnicas</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="flex items-center p-4 bg-muted/50 rounded-lg border border-border/30 hover:border-primary/30 transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <skill.icon className={`h-8 w-8 mr-4 ${skill.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
                    <div className="flex-1">
                      <p className="font-medium">{skill.name}</p>
                      <Badge 
                        variant={skill.color === 'primary' ? 'default' : 'secondary'} 
                        className="text-xs mt-1"
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Certifications & Languages */}
          <div className="space-y-8">
            {/* Certifications */}
            <Card className="p-6 bg-card/80 backdrop-blur-sm border border-border/50 shadow-[var(--shadow-card)] animate-scale-in">
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-secondary mr-3" />
                <h3 className="text-lg font-semibold">Certificações</h3>
              </div>
              
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div
                    key={cert}
                    className="p-3 bg-muted/50 rounded-lg border border-border/30 hover:border-secondary/30 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <p className="text-sm font-medium">{cert}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Languages */}
            <Card className="p-6 bg-card/80 backdrop-blur-sm border border-border/50 shadow-[var(--shadow-card)] animate-scale-in">
              <div className="flex items-center mb-4">
                <Globe className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-lg font-semibold">Idiomas</h3>
              </div>
              
              <div className="space-y-3">
                {languages.map((lang, index) => (
                  <div
                    key={lang.name}
                    className="flex items-center justify-between p-3 bg-muted/50 rounded-lg border border-border/30 hover:border-primary/30 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{lang.flag}</span>
                      <span className="font-medium">{lang.name}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {lang.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;