import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="about">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Passionate about technology and continuous learning in the DevOps ecosystem
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="tech-card">
          <h3 className="text-2xl font-semibold mb-4 text-primary">Background</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I completed my Bachelor's in Engineering in 2023 and immediately joined Synnefo Solutions 
            in Ernakulam as a Linux Engineer (L1). During this role, I gained valuable experience 
            managing networking infrastructure and working with various Linux systems.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My curiosity about automation and infrastructure led me to transition into DevOps, 
            where I've been expanding my skills in cloud technologies, containerization, and 
            CI/CD pipelines for the past year.
          </p>
        </Card>
        
        <Card className="tech-card">
          <h3 className="text-2xl font-semibold mb-4 text-primary">Current Focus</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            As a DevOps Engineer at Synnefo Solutions, I work on automating deployment processes, 
            managing cloud infrastructure, and ensuring system reliability and scalability.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I'm passionate about:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Infrastructure as Code (IaC)</li>
            <li>Container orchestration</li>
            <li>Monitoring and observability</li>
            <li>Continuous integration and deployment</li>
          </ul>
        </Card>
      </div>
    </section>
  );
};

export default About;