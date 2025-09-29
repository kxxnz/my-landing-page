import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Linkedin, Send, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Retornarei em breve!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contato" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Vamos Conversar?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Entre em contato para oportunidades, projetos ou apenas para trocar uma ideia sobre tecnologia
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-slide-in">
            <Card className="p-8 bg-card/80 backdrop-blur-sm border border-border/50 shadow-[var(--shadow-card)]">
              <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a 
                      href="mailto:jp.reis2007@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      jp.reis2007@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mr-4 group-hover:bg-secondary/20 transition-colors">
                    <Linkedin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/joão-pedro-reis" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                      linkedin.com/in/joão-pedro-reis
                    </a>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mr-4 group-hover:bg-accent/20 transition-colors">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Localização</p>
                    <p className="text-muted-foreground">São Paulo, Brasil</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-muted/50 rounded-lg border border-border/30">
                <p className="text-sm text-muted-foreground text-center">
                  <strong>Disponível para:</strong> Estágios, Projetos Freelance, Consultoria em Power Platform, 
                  Colaborações em BI e Análise de Dados
                </p>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-scale-in">
            <Card className="p-8 bg-card/80 backdrop-blur-sm border border-border/50 shadow-[var(--shadow-card)]">
              <h3 className="text-2xl font-semibold mb-6">Envie uma Mensagem</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nome *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">Assunto *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    placeholder="Sobre o que gostaria de conversar?"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Mensagem *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-2 min-h-[120px]"
                    placeholder="Descreva sua ideia, projeto ou oportunidade..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;