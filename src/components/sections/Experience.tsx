import { Briefcase, Calendar, MapPin, ChevronDown, Award } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "../ui/button";

const Experience = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (idx: number) => {
    setOpenItems(prev => 
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  const experiences = [
    {
      title: "Web Development Intern",
      company: "Uptoskills",
      location: "Remote",
      period: "Oct 2024 - Jan 2025",
      type: "Internship",
      responsibilities: [
        "Developed and deployed over two responsive web interfaces using JavaScript and React, incorporating adaptive layouts across diverse screen dimensions",
        "Structured and maintained modular front-end routing using React Router, facilitating seamless user navigation and state management",
        "Integrated interactive UI components with backend APIs to fetch and display data efficiently in React",
        "Explored and applied front-end patterns from multiple MERN-stack applications to strengthen practical proficiency in modern React development",
      ],
      technologies: ["React", "JavaScript", "React Router", "MERN Stack", "REST APIs"],
      certificate: "/certificate-uptoskills.jpg",
    },
    {
      title: "Web Development Intern",
      company: "Octanet Services Pvt Ltd",
      location: "Remote",
      period: "May 2024 - Jun 2024",
      type: "Internship",
      responsibilities: [
        "Constructed web interfaces across 3+ projects using HTML, CSS, and JavaScript, with emphasis on structure, readability, and user interaction flow",
        "Collaborated with development teams on 3+ projects to examine and refine aspects affecting front-end performance",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Web Performance", "Team Collaboration"],
      certificate: "/certificate-octanet.jpg",
    },
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Work Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional journey in web development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <Collapsible
              key={`${exp.company}-${exp.period}`}
              open={openItems.includes(idx)}
              onOpenChange={() => toggleItem(idx)}
            >
              <div
                className="card-3d rounded-2xl overflow-hidden animate-slide-in-right"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CollapsibleTrigger className="w-full text-left p-8 hover:bg-accent/5 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent flex-shrink-0">
                        <Briefcase className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                        <p className="text-xl text-primary font-semibold">{exp.company}</p>
                        <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    <ChevronDown 
                      className={`h-6 w-6 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
                        openItems.includes(idx) ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <div className="px-8 pb-8 pt-4 border-t border-border/50">
                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-lg">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, respIdx) => (
                          <li key={respIdx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full bg-muted text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Certificate */}
                    {exp.certificate && (
                      <div className="mt-6">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" className="w-full sm:w-auto">
                              <Award className="h-4 w-4 mr-2" />
                              View Certificate
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl">
                            <DialogHeader>
                              <DialogTitle>{exp.company} - Internship Certificate</DialogTitle>
                              <DialogDescription>{exp.period}</DialogDescription>
                            </DialogHeader>
                            <div className="mt-4">
                              <img
                                src={exp.certificate}
                                alt={`${exp.company} Certificate`}
                                className="w-full h-auto rounded-lg border border-border"
                              />
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    )}
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
