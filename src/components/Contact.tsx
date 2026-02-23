import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Mail, Linkedin, Github, Youtube, Globe, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const socials = [
  { icon: Mail, label: 'Email', href: 'mailto:abdulsamadahmedkhan@gmail.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Github, label: 'GitHub', href: 'https://github.com' },
  { icon: Youtube, label: 'CodeCrase', href: 'https://youtube.com' },
  { icon: Globe, label: 'Portfolio', href: '#' },
];

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 md:py-32">
      <div ref={ref} className={`container mx-auto px-6 max-w-4xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-12" />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <Input placeholder="Your Name" className="rounded-xl bg-background/50" />
              <Input type="email" placeholder="Your Email" className="rounded-xl bg-background/50" />
              <Textarea placeholder="Your Message" rows={4} className="rounded-xl bg-background/50 resize-none" />
              <Button className="rounded-full w-full group">
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>

          {/* Social Links */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
            <div className="space-y-4">
              {socials.map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 glass rounded-xl p-4 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}
                    style={{ transitionDelay: isVisible ? `${i * 100 + 200}ms` : '0ms' }}
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-medium">{s.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
