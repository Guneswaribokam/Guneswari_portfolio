
import { ExternalLink, Github } from "lucide-react";
import { Button } from "../ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Smart n Fresh Website",
      description:
        "E-commerce platform connecting farmers directly with consumers, eliminating middlemen and improving market access for organic produce.",
      longDescription:
        "Created an e-commerce site that helped over 200 farmers sell organic produce directly, removing middle layers and improving access for consumers. Designed and structured over 15 frontend pages to support browsing, product viewing, and order placement.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      image: "/smartfresh.jpg", 
      github: "https://github.com/Guneswaribokam/smart-n-fresh.git",
      demo: "https://guneswaribokam.github.io/smart-n-fresh/",
      impact: [
        "200+ farmers onboarded",
        "15+ pages",
        "Direct farmer-to-consumer connection",
      ],
    },
    {
      title: "Frontend Quiz Application",
      description:
        "Interactive quiz platform featuring multiple quiz types with responsive design and smooth user experience.",
      longDescription:
        "Developed an interface using HTML, CSS, and JavaScript to display over 10 types of quizzes available for users to attempt. Adjusted layout and navigation flow, helping users access quizzes in under 3 steps across different screen sizes.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      image: "/frontendquiz.jpg",
      github: "https://github.com/Guneswaribokam/frontend-quiz.git",
      demo: "https://guneswaribokam.github.io/frontend-quiz/",
      impact: ["10+ quiz types", "3-step navigation", "Cross-device compatibility"],
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing real-world applications and problem-solving skills
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="group card-3d rounded-2xl overflow-hidden animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* ✅ Project Image using <img> */}
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent z-10" />
              </div>

              {/* Project Content */}
              <div className="p-6 relative z-20">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4">
                  {project.longDescription}
                </p>

                {/* Impact Metrics */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.impact.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-muted text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 glow-effect"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-primary to-accent"
                    onClick={() => window.open(project.demo, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
