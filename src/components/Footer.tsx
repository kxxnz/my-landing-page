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
          
          <div className="flex items-center justify-center text-sm text-muted-foreground">
            <span>Feito com</span>
            <Heart className="h-4 w-4 text-red-500 mx-1 animate-pulse" />
            <span>e muito</span>
            <Code className="h-4 w-4 text-primary mx-1" />
            <span>• {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;