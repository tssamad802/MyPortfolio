import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Gexton',
    location: 'Hyderabad, Sindh',
    duration: 'Current',
    role: 'Web Development Intern',
    description: 'Currently working on real-world projects, building and maintaining web applications using modern tools and technologies.',
    current: true,
  },
  {
    company: 'Israin Solutions',
    location: 'Hyderabad, Sindh',
    duration: '3 months',
    role: 'Web Development Intern',
    description: 'Developed responsive websites and collaborated with design teams to implement pixel-perfect UI components.',
    current: false,
  },
  {
    company: 'Rootlet Solutions',
    location: 'Karachi, Sindh',
    duration: '4 months',
    role: 'Web Development Intern',
    description: 'Built WordPress websites, worked with Elementor page builder, and gained hands-on experience with PHP and databases.',
    current: false,
  },
];

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 md:py-32">
      <div ref={ref} className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="gradient-text">Experience</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-12" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className={`relative flex flex-col md:flex-row md:items-center mb-12 last:mb-0 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: isVisible ? `${i * 200}ms` : '0ms' }}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-6 md:mt-0 z-10 ring-4 ring-background" />

              {/* Card */}
              <div className={`ml-10 md:ml-0 md:w-[45%] ${i % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <div className="glass rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="flex items-center gap-2 mb-1">
                    {exp.current && <span className="text-[10px] font-bold uppercase tracking-wider bg-primary text-primary-foreground px-2 py-0.5 rounded-full">Current</span>}
                    <span className="text-sm text-muted-foreground flex items-center gap-1"><Calendar className="h-3 w-3" />{exp.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{exp.company}</h3>
                  <p className="text-sm font-medium text-primary mb-1">{exp.role}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mb-3"><MapPin className="h-3 w-3" />{exp.location}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
