import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto bg-muted/20" id="experience">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Professional <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          My journey in the technology industry and career progression
        </p>
      </div>
      
      <div className="space-y-8">
        {/* Current Role */}
        <Card className="tech-card">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-2">DevOps Engineer</h3>
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Building size={16} />
                <span>Synnefo Solutions</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>Ernakulam, Kerala</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>2024 - Present</span>
                </div>
              </div>
            </div>
            <Badge className="bg-primary text-primary-foreground mt-4 md:mt-0">Current Role</Badge>
          </div>
          
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Transitioned to DevOps role focusing on automation, infrastructure management, and deployment processes. 
            Working with cloud technologies and implementing CI/CD pipelines to improve development workflows.
          </p>
          
          <h4 className="font-semibold mb-3 text-foreground">Key Responsibilities:</h4>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Designing and implementing CI/CD pipelines</li>
            <li>Managing cloud infrastructure and deployments</li>
            <li>Monitoring system performance and reliability</li>
            <li>Automating manual processes and workflows</li>
            <li>Collaborating with development teams for seamless integration</li>
          </ul>
        </Card>
        
        {/* Previous Role */}
        <Card className="tech-card">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-2">Linux Engineer (L1)</h3>
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Building size={16} />
                <span>Synnefo Solutions</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>Ernakulam, Kerala</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>2023 - 2024</span>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Started my professional journey as a Linux Engineer right after completing my Bachelor's degree. 
            Gained hands-on experience with Linux systems, networking, and system administration.
          </p>
          
          <h4 className="font-semibold mb-3 text-foreground">Key Responsibilities:</h4>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Linux system administration and maintenance</li>
            <li>Network configuration and troubleshooting</li>
            <li>System monitoring and performance optimization</li>
            <li>User management and access control</li>
            <li>Documentation and knowledge sharing</li>
          </ul>
        </Card>
      </div>
    </section>
  );
};

export default Experience;