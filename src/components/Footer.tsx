import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border/50 py-8">
      <div className="container-max px-6">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Code className="h-5 w-5 text-primary mr-2" />
            <span className="gradient-text font-semibold">João Pedro Cavalheiro dos Reis</span>
          </div>
          
          <p className="text-muted-foreground text-sm mb-4">
            Estagiário em Ciências da Computação | Power Platform & BI Specialist
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;