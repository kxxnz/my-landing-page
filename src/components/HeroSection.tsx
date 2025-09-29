import { Download, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '../assets/joao-pedro-profile.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      <div className="absolute inset-0 bg-[var(--gradient-parallax)] animate-parallax-bg"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-parallax-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-parallax-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-parallax-float" style={{animationDelay: '4s'}}></div>
      
      <div className="container-max relative z-10">
        <div className="text-center animate-fade-in">
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <img
                src={profileImage}
                alt="João Pedro Cavalheiro dos Reis"
                className="w-48 h-48 rounded-full object-cover border-4 border-primary/30 shadow-2xl animate-purple-glow transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 animate-pulse"></div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-lg animate-blue-glow"></div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-in">
            <span className="gradient-text">João Pedro</span>
            <br />
            <span className="text-foreground">Cavalheiro dos Reis</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Estagiário em Ciências da Computação | Power Apps | Power Automate | Dados e BI
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button size="lg" className="group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground shadow-lg hover:shadow-[var(--shadow-purple)] transition-all duration-300 hover:scale-105">
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Baixar Currículo
            </Button>
            
            <Button variant="outline" size="lg" className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-[var(--shadow-purple)] transition-all duration-300 hover:scale-105">
              <Linkedin className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              LinkedIn
            </Button>

            <Button variant="outline" size="lg" className="group border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground shadow-lg hover:shadow-[var(--shadow-blue)] transition-all duration-300 hover:scale-105">
              <Mail className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;