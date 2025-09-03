import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto bg-muted/20" id="contact">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Let's connect and discuss opportunities in DevOps and technology
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="tech-card">
          <h3 className="text-2xl font-semibold mb-6 text-primary">Contact Information</h3>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <p className="font-medium text-foreground">Email</p>
                <p className="text-muted-foreground">shashahanas5@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Phone className="text-primary" size={20} />
              </div>
              <div>
                <p className="font-medium text-foreground">Phone</p>
                <p className="text-muted-foreground">+91 7306076485</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <MapPin className="text-primary" size={20} />
              </div>
              <div>
                <p className="font-medium text-foreground">Location</p>
                <p className="text-muted-foreground">Ernakulam, Kerala, India</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-border">
            <h4 className="font-semibold mb-4 text-foreground">Connect on Social</h4>
            <div className="flex gap-4">
              <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Linkedin size={16} className="mr-2" />
                LinkedIn
              </Button>
              <a href="https://github.com/SHAHANASSHA" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Github size={16} className="mr-2" />
                  GitHub
                </Button>
              </a>
            </div>
          </div>
        </Card>
        
        <Card className="tech-card">
          <h3 className="text-2xl font-semibold mb-6 text-primary">Professional Interests</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-foreground mb-2">Open to discuss:</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>DevOps best practices and methodologies</li>
                <li>Cloud architecture and infrastructure</li>
                <li>Automation and CI/CD strategies</li>
                <li>Career opportunities in DevOps</li>
                <li>Technology trends and innovations</li>
              </ul>
            </div>
            
            <div className="mt-6 pt-4 border-t border-border">
              <h4 className="font-medium text-foreground mb-2">Currently exploring:</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Advanced Kubernetes patterns</li>
                <li>GitOps methodologies</li>
                <li>Site Reliability Engineering (SRE)</li>
                <li>Security in DevOps (DevSecOps)</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8">
            <a href="mailto:shashahanas5@gmail.com">
              <Button className="w-full cyberpunk-button text-black font-bold">
                <Mail size={16} className="mr-2" />
                Send Message
              </Button>
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;