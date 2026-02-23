import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Code, Lightbulb } from 'lucide-react';

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 md:py-32">
      <div ref={ref} className={`container mx-auto px-6 max-w-4xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-12" />

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
            <Code className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Web Developer</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a first-year Computer Science student with a strong passion for web development. I love building responsive, user-friendly websites and constantly explore modern frameworks and tools to sharpen my skills.
            </p>
          </div>
          <div className="glass rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
            <Lightbulb className="h-8 w-8 text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-3">AI Enthusiast</h3>
            <p className="text-muted-foreground leading-relaxed">
              Beyond web development, I'm deeply fascinated by Artificial Intelligence and its potential. I actively study AI concepts and look for ways to integrate intelligent solutions into the projects I build.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
