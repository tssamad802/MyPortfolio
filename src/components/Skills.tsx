import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Code2, FileCode, Globe, Database, Blocks, Paintbrush, Zap, Brain, LayoutTemplate } from 'lucide-react';

const skills = [
  { name: 'HTML', icon: Globe, level: 90 },
  { name: 'CSS', icon: Paintbrush, level: 85 },
  { name: 'JavaScript', icon: FileCode, level: 80 },
  { name: 'Core PHP', icon: Code2, level: 85 },
  { name: 'MariaDB', icon: Database, level: 65 },
  { name: 'WordPress', icon: Blocks, level: 75 },
  { name: 'Elementor', icon: LayoutTemplate, level: 80 },
  { name: 'AJAX', icon: Zap, level: 65 },
  { name: 'AI Concepts', icon: Brain, level: 55 },
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/30">
      <div ref={ref} className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="gradient-text">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className={`glass rounded-2xl p-6 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: isVisible ? `${i * 80}ms` : '0ms' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-semibold">{skill.name}</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                    style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                  />
                </div>
                <span className="text-xs text-muted-foreground mt-2 block">{skill.level}%</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
