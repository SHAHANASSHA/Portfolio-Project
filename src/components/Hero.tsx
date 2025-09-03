import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/cyberpunk-hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <Avatar className="w-56 h-56 mx-auto mb-8 neon-glow">
            <AvatarImage 
              src="/lovable-uploads/3324d3e3-5e48-4b85-9cc7-3e3458a4bb53.png" 
              alt="Shahanas Sha - DevOps Engineer"
              className="object-cover"
            />
            <AvatarFallback className="bg-primary text-primary-foreground text-4xl font-bold">
              SS
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold">
            I am <span className="gradient-text">Shahanas Sha</span>
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            <span className="gradient-text">DevOps Engineer</span>
          </h2>
          <h3 className="text-2xl md:text-3xl text-muted-foreground mt-2">
            Synnefo Solutions
          </h3>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
          A DevOps enthusiast passionate about automation, infrastructure, and continuous integration. 
          Seeking opportunities to expand my expertise in cloud technologies, containerization, and CI/CD pipelines 
          while contributing to organizational efficiency and scalable system design.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button size="lg" className="cyberpunk-button text-black font-bold">
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="neon-border text-primary hover:bg-primary hover:text-primary-foreground">
            Download Resume
          </Button>
        </div>
        
        <div className="flex gap-6 justify-center">
          <a href="https://github.com/SHAHANASSHA" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={24} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:shashahanas5@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center neon-glow">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse neon-glow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;