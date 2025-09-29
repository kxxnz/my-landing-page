import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ProfileCard } from '@/components/ui/profile-card';

// Register the TextPlugin
gsap.registerPlugin(TextPlugin);

const HeroSection = () => {
  const firstNameRef = useRef<HTMLSpanElement>(null);
  const lastNameRef = useRef<HTMLSpanElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Animate first name
    tl.to(firstNameRef.current, {
      duration: 1.5,
      text: "João Pedro",
      ease: "none"
    })
    // Animate last name
    .to(lastNameRef.current, {
      duration: 1.5,
      text: "Cavalheiro dos Reis",
      ease: "none"
    }, "-=0.5")
    // Animate description
    .to(descriptionRef.current, {
      duration: 2,
      text: "Estagiário em Ciências da Computação | Power Apps | Power Automate | Dados e BI",
      ease: "none"
    }, "-=0.5");

  }, []);

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
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 animate-fade-in">
          {/* Left side - Name and description */}
          <div className="text-left lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span ref={firstNameRef} className="gradient-text"></span>
              <br />
              <span ref={lastNameRef} className="text-foreground"></span>
            </h1>

            <p ref={descriptionRef} className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
            </p>
          </div>

          {/* Right side - Profile Card */}
          <div className="animate-scale-in">
            <ProfileCard
              name="João Pedro Cavalheiro dos Reis"
              title="Estagiário em Ciências da Computação"
              location="Brasil"
              experience="Power Apps | Power Automate | Dados e BI"
              githubUrl="https://github.com/kxxnz"
              email="joao.pedro@email.com"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;