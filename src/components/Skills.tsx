import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Server, 
  Cloud, 
  Container, 
  GitBranch, 
  Monitor, 
  Shield,
  Code,
  Database
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Operating Systems",
      icon: <Server className="text-primary" size={24} />,
      skills: ["Linux (RHEL, Ubuntu, CentOS)", "Shell Scripting", "System Administration", "Process Management"]
    },
    {
      title: "Cloud Platforms",
      icon: <Cloud className="text-primary" size={24} />,
      skills: ["AWS", "Azure", "Google Cloud Platform", "Infrastructure as Code"]
    },
    {
      title: "Containerization",
      icon: <Container className="text-primary" size={24} />,
      skills: ["Docker", "Kubernetes", "Container Orchestration", "Microservices"]
    },
    {
      title: "CI/CD & Version Control",
      icon: <GitBranch className="text-primary" size={24} />,
      skills: ["Git", "Jenkins", "GitLab CI", "GitHub Actions", "Pipeline Automation"]
    },
    {
      title: "Monitoring & Observability",
      icon: <Monitor className="text-primary" size={24} />,
      skills: ["Prometheus", "Grafana", "ELK Stack", "Log Management", "Performance Monitoring"]
    },
    {
      title: "Security & Compliance",
      icon: <Shield className="text-primary" size={24} />,
      skills: ["Security Best Practices", "Access Control", "Vulnerability Management", "Compliance"]
    },
    {
      title: "Programming & Scripting",
      icon: <Code className="text-primary" size={24} />,
      skills: ["Python", "Bash", "YAML", "JSON", "Automation Scripts"]
    },
    {
      title: "Databases & Storage",
      icon: <Database className="text-primary" size={24} />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Backup & Recovery", "Data Management"]
    }
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto" id="skills">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Technologies and tools I work with in <span className="pink-accent">DevOps</span> and system administration
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index} className="tech-card">
            <div className="flex items-center gap-3 mb-4">
              {category.icon}
              <h3 className="font-semibold text-lg text-foreground">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <Badge 
                  key={skillIndex} 
                  variant="secondary" 
                  className="bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;