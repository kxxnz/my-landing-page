import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Mail, MapPin, Calendar } from "lucide-react";

interface ProfileCardProps {
  name: string;
  title: string;
  location?: string;
  experience?: string;
  githubUrl?: string;
  email?: string;
  className?: string;
}

export const ProfileCard = ({
  name,
  title,
  location = "Brasil",
  experience = "Estagiário",
  githubUrl,
  email,
  className = ""
}: ProfileCardProps) => {
  return (
    <Card className={`w-full max-w-md mx-auto bg-gradient-to-br from-background to-primary/5 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${className}`}>
      <CardContent className="p-6">
        <div className="text-center space-y-4">
          {/* Profile Header */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold gradient-text">{name}</h3>
            <p className="text-muted-foreground text-lg">{title}</p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {location}
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {experience}
            </Badge>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 justify-center pt-2">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                Contato
              </a>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
