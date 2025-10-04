import { GraduationCap, Award, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science",
      institution: "Vignan's Institute of Information Technology",
      year: "2022 - Present",
      score: "GPA: 9.1",
      description: "Pursuing comprehensive education in computer science with focus on software development and algorithms.",
    },
    {
      degree: "12th Class",
      field: "Intermediate Education",
      institution: "Narayana Junior College",
      year: "2020 - 2022",
      score: "95.8%",
      description: "Completed higher secondary education with excellence in mathematics and science.",
    },
    {
      degree: "10th Class",
      field: "Secondary Education",
      institution: "Chalapathi E.M School",
      year: "2020",
      score: "100%",
      description: "Achieved perfect score demonstrating strong foundation in core subjects.",
    },
  ];

  const certifications = [
    { name: "Python Essentials", provider: "Cisco Networking Academy", image: "/certificate-python.jpg" },
    { name: "HTML5", provider: "Infosys Springboard", image: "/certificate-html.jpg" },
    { name: "CSS3", provider: "Infosys Springboard", image: "/certificate-css.jpg" },
    { name: "JavaScript", provider: "eDX", image: "/certificate-js.jpg" },
    { name: "C", provider: "SoloLearn", image: "/certificate-c.jpg" },
    { name: "C++", provider: "SoloLearn", image: "/certificate-cpp.jpg" },
    { name: " Relational Database", provider: "eDX", image: "/certificate-db.jpg" },
    { name: "Git & Github", provider: "Geekster", image: "/certificate-git.jpg" },
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic journey and continuous learning
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

          <div className="space-y-12">
            {education.map((edu, idx) => (
              <div
                key={edu.degree}
                className={`relative flex items-center ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } animate-slide-up`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-gradient-to-r from-primary to-accent border-4 border-background z-10" />

                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${idx % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="card-3d rounded-2xl p-6 glow-effect">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent flex-shrink-0">
                        <GraduationCap className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                        <p className="text-primary font-medium">{edu.field}</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p className="text-muted-foreground">{edu.institution}</p>
                      <p className="text-muted-foreground">{edu.year}</p>
                      <p className="text-lg font-bold text-gradient">{edu.score}</p>
                      <p className="text-muted-foreground mt-3">{edu.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-gradient">Certifications</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <Dialog key={cert.name}>
                <DialogTrigger asChild>
                  <div
                    className="card-3d rounded-xl p-6 text-center animate-scale-in cursor-pointer group hover:scale-105 transition-transform"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="inline-block p-3 rounded-full bg-gradient-to-br from-primary to-accent mb-4 group-hover:shadow-glow transition-shadow">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">{cert.provider}</p>
                    <div className="mt-3 flex items-center justify-center gap-1 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>View Certificate</span>
                      <ExternalLink className="h-3 w-3" />
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-3xl">
                  <DialogHeader>
                    <DialogTitle>{cert.name}</DialogTitle>
                    <DialogDescription>{cert.provider}</DialogDescription>
                  </DialogHeader>
                  <div className="mt-4">
                    <img
                      src={cert.image}
                      alt={`${cert.name} Certificate`}
                      className="w-full h-auto rounded-lg border border-border"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
