import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Doctor Appointment System',
    description:
      'A comprehensive web-based appointment management system with separate dashboards for admins, doctors, and patients. Features real-time slot availability checking, schedule configuration, and role-based access control.',
    tags: ['PHP', 'OOP', 'MySQL', 'Bootstrap 5', 'jQuery', 'AJAX'],
    github: 'https://github.com/tssamad802/Doctor-Appointment-System',
    demo: null,
  },
  {
    title: 'PHP OOP Role-Based CRUD',
    description:
      'A PHP OOP project demonstrating role-based access control (Admin & Editor) with full CRUD functionality for posts and categories, including dynamic category slugs linked with posts.',
    tags: ['PHP', 'OOP', 'MySQL', 'RBAC', 'HTML/CSS'],
    github: 'https://github.com/tssamad802/PHP-OOP-Role-Based-CRUD',
    demo: null,
  },
  {
    title: 'Student Management System',
    description:
      'A clean student record management system for adding, editing, deleting, and viewing students. Built with PHP OOP and styled with Tailwind CSS, deployed on live hosting.',
    tags: ['PHP', 'OOP', 'MySQL', 'Tailwind CSS', 'Bootstrap'],
    github: 'https://github.com/tssamad802/Student-Management',
    demo: 'https://sm-system.infinityfreeapp.com/index.php',
  },
  {
    title: 'Lab Automation System',
    description:
      'A web-based lab automation application built with PHP and MySQL, featuring an admin panel, form handling, and image management to streamline laboratory workflows.',
    tags: ['PHP', 'MySQL', 'HTML/CSS', 'Bootstrap'],
    github: 'https://github.com/tssamad802/lab-automation',
    demo: null,
  },
  {
    title: 'User Management System',
    description:
      'A PHP-based user management application featuring user listing, registration, and management capabilities with a clean MVC structure and URL rewriting via .htaccess.',
    tags: ['PHP', 'MySQL', 'MVC', 'HTML/CSS'],
    github: 'https://github.com/tssamad802/User-Management',
    demo: null,
  },
  {
    title: 'iron-core',
    description:
      'This is a gym dashboard for admin, members, and trainers.',
    tags: ['PHP', 'MySQL', 'MVC', 'HTML/CSS'],
    github: 'https://github.com/tssamad802/iron-core',
    demo: null,
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary/30">
      <div ref={ref} className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="gradient-text">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`glass rounded-2xl overflow-hidden group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: isVisible ? `${i * 150}ms` : '0ms' }}
            >
              {/* Colored top bar */}
              <div className="h-1 bg-gradient-to-r from-primary to-accent" />
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full text-xs"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="h-3 w-3 mr-1" /> Code
                  </Button>
                  {project.demo ? (
                    <Button
                      size="sm"
                      className="rounded-full text-xs"
                      onClick={() => window.open(project.demo!, '_blank')}
                    >
                      <ExternalLink className="h-3 w-3 mr-1" /> Live Demo
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      className="rounded-full text-xs opacity-50 cursor-not-allowed"
                      disabled
                    >
                      <ExternalLink className="h-3 w-3 mr-1" /> No Demo
                    </Button>
                  )}
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