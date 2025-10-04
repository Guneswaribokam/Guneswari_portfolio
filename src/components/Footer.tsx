import { Github, Linkedin, Code2, Mail,ChefHat } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-6">
          <a
              href="https://www.codechef.com/users/guneswaribokam"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <ChefHat className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/guneswaribokam"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/guneswaribokam18/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://leetcode.com/guneswaribokam"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110"
              aria-label="LeetCode"
            >
              <Code2 className="h-5 w-5" />
            </a>
            <a
              href="mailto:guneswaribokam@gmail.com"
              className="p-2 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              © {currentYear} Guneswari Bokam.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
