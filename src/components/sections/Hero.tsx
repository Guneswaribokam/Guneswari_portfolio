import { ArrowDown, Github, Linkedin, Code2, Mail,ChefHat} from "lucide-react";
import { Button } from "../ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-slow" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-slide-up">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              Welcome to my portfolio
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="text-gradient">
              Guneswari Bokam
            </span>
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-4 font-light">
            Web Developer
          </p>

          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Passionate about creating elegant, responsive web experiences using modern technologies.
            Specialized in React, JavaScript, and full-stack development.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:shadow-glow"
              onClick={() => scrollToSection("projects")}
            >
              <span className="relative z-10">View My Work</span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glow-effect"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="glow-effect"
              asChild
            >
              <a href="/resume.pdf" download="Guneswari_Bokam_Resume.pdf">
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-16">
          <a
              href="https://www.codechef.com/users/guneswaribokam"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
              <ChefHat className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/guneswaribokam"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/guneswaribokam18/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://leetcode.com/guneswaribokam"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <Code2 className="h-6 w-6" />
            </a>
            <a
              href="mailto:guneswaribokam@gmail.com"
              className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <button
            onClick={() => scrollToSection("skills")}
            className="animate-bounce hover:text-primary transition-colors"
          >
            <ArrowDown className="h-8 w-8 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
