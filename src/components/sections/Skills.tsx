import { Code2, Database, Wrench, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Concepts & Languages",
      icon: Brain,
      skills: ["Python", "C","C++", "Java", "Data Structures & Algorithms", "Object-Oriented Design"],
    },
    {
      title: "Frontend & Backend",
      icon: Code2,
      skills: ["HTML5 & CSS3", "JavaScript", "ReactJS", "Tailwind CSS", "Node.js","Express.js", "MongoDB", "SQL"],
    },
    {
      title: "Tools & Deployment",
      icon: Wrench,
      skills: ["Git & GitHub", "Linux/Unix CLI", "AWS Basics", "Netlify","Vercel","Lovable"],
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across modern web development technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="card-3d rounded-2xl p-8 animate-slide-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <div
                    key={skill}
                    className="group relative px-4 py-3 rounded-xl bg-gradient-to-br from-card to-card/50 border border-border hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-glow animate-scale-in"
                    style={{ animationDelay: `${(idx * 0.1) + (skillIdx * 0.05)}s` }}
                  >
                    <span className="text-sm font-medium relative z-10">{skill}</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Badges */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-3d rounded-2xl p-6 text-center glow-effect">
            <div className="text-3xl font-bold text-gradient mb-2">800+</div>
            <p className="text-muted-foreground">Coding Problems Solved</p>
            <p className="text-sm text-muted-foreground mt-1">CodeChef (2★) & LeetCode</p>
          </div>
          <div className="card-3d rounded-2xl p-6 text-center glow-effect">
            <div className="text-3xl font-bold text-gradient mb-2">24hr</div>
            <p className="text-muted-foreground">Hackathon Participant</p>
            <p className="text-sm text-muted-foreground mt-1">Multiple Events</p>
          </div>
          <div className="card-3d rounded-2xl p-6 text-center glow-effect">
            <div className="text-3xl font-bold text-gradient mb-2">GPA 9.1</div>
            <p className="text-muted-foreground">Academic Excellence</p>
            <p className="text-sm text-muted-foreground mt-1">B.Tech CSE</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
