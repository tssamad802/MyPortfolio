import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient bg */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />
      </div>

      <div
        className={`container mx-auto px-6 transition-all duration-1000 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Two-column layout: text left, image right on md+; stacked on mobile */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16">

          {/* ── LEFT: Text content ── */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm md:text-base font-medium text-primary mb-4 tracking-widest uppercase">
              Welcome to my portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
              Abdul Samad{' '}
              <span className="gradient-text">Ahmed Khan</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
              Aspiring Software Engineer | Junior Web Developer | AI Enthusiast
            </p>
            <Button
              size="lg"
              className="group rounded-full px-8 text-base font-semibold"
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>

          {/* ── RIGHT: Profile image ── */}
          <div className="flex-shrink-0 flex justify-center">
            {/* Outer glow ring */}
            <div className="relative group">
              {/* Decorative animated ring */}
              <div
                className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary via-accent to-primary opacity-70 blur-sm animate-spin"
                style={{ animationDuration: '8s' }}
              />

              {/* Inner white border */}
              <div className="relative rounded-full p-1 bg-background shadow-2xl">
                <img
                  src="/my-img.png"
                  alt="Abdul Samad Ahmed Khan"
                  className="
                    rounded-full object-cover
                    w-48 h-48
                    sm:w-56 sm:h-56
                    md:w-64 md:h-64
                    lg:w-80 lg:h-80
                    xl:w-96 xl:h-96
                    transition-transform duration-500 group-hover:scale-105
                    shadow-xl
                  "
                  style={{ objectPosition: 'center 20%' }}
                  loading="eager"
                />
              </div>

              {/* Floating badge — optional accent detail */}
              <span
                className="
                  absolute bottom-3 right-3
                  bg-primary text-primary-foreground
                  text-xs font-semibold
                  px-3 py-1 rounded-full shadow-lg
                  opacity-0 group-hover:opacity-100
                  translate-y-2 group-hover:translate-y-0
                  transition-all duration-300
                "
              >
                👋 Hi there!
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;