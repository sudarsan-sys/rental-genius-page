'use client';

import React from 'react';
import techTroveLogo from "@/assets/tech-trove-logo.png";
import BlurText from "@/components/ui/BlurText";

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement | null>(null);

  // Close on ESC & click outside (mobile overlay)
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenuOpen(false);
    }
    function onClickOutside(e: MouseEvent) {
      if (!menuRef.current) return;
      if (menuRef.current.contains(e.target as Node)) return;
      setMenuOpen(false);
    }

    if (menuOpen) {
      document.addEventListener('keydown', onKey);
      document.addEventListener('click', onClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClickOutside);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>

      <section className="bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] w-full bg-no-repeat bg-cover bg-center text-sm pb-44">
        <nav className="flex items-center justify-between p-4 md:px-16 lg:px-24 xl:px-32 md:py-6 w-full">
          <a href="#home" aria-label="Tech Trove Systems home" className="flex items-center">
            <img src={techTroveLogo} alt="Tech Trove Systems" className="h-14 w-auto" />
          </a>

          <div
            id="menu"
            ref={menuRef}
            className={[
              'max-md:absolute max-md:top-0 max-md:left-0 max-md:transition-all max-md:duration-300 max-md:overflow-hidden max-md:h-full max-md:bg-white/50 max-md:backdrop-blur',
              'flex items-center gap-20 font-medium',
              'max-md:flex-col max-md:justify-center',
              menuOpen ? 'max-md:w-full' : 'max-md:w-0',
            ].join(' ')}
            aria-hidden={!menuOpen}
          >
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>

            <div className="relative group flex items-center gap-1 cursor-pointer z-50">
              <span>Services</span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="absolute bg-white font-normal flex flex-col gap-2 w-max rounded-lg p-4 top-36 left-0 opacity-0 -translate-y-full group-hover:top-44 group-hover:opacity-100 transition-all duration-300 shadow-lg border z-50">
                <a href="#/laptop-rental" className="hover:translate-x-1 hover:text-primary transition-all">Laptop Rentals</a>
                <a href="#/desktop-rental" className="hover:translate-x-1 hover:text-primary transition-all">Desktop Rentals</a>
                <a href="#/workstation-rental" className="hover:translate-x-1 hover:text-primary transition-all">Workstation Rentals</a>
                <a href="#/gaming-laptop-rental" className="hover:translate-x-1 hover:text-primary transition-all">Gaming Laptop Rentals</a>
                <a href="#/server-rental" className="hover:translate-x-1 hover:text-primary transition-all">Server Rentals</a>
                <a href="#/projector-rental" className="hover:translate-x-1 hover:text-primary transition-all">Projector Rentals</a>
              </div>
            </div>

            <a href="#/gallery" className="hover:text-primary transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>

            <button
              onClick={() => setMenuOpen(false)}
              className="md:hidden bg-primary hover:bg-primary-glow text-primary-foreground p-2 rounded-md aspect-square font-medium transition"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="hidden md:block bg-primary hover:bg-primary-glow text-primary-foreground px-6 py-3 rounded-full font-medium transition shadow-elegant"
          >
            Get Free Quote
          </button>

        </nav>

        {/* Trust Badge */}
        <div className="flex items-center gap-2 border border-primary/30 hover:border-primary/50 bg-white/10 backdrop-blur-sm rounded-full w-max mx-auto px-4 py-2 mt-20 md:mt-16 transition-all relative z-10">
          <span>25+ Years of Trusted IT Rental Services</span>
          <button className="flex items-center gap-1 font-medium text-primary">
            <span>Learn more</span>
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M3.959 9.5h11.083m0 0L9.501 3.958M15.042 9.5l-5.541 5.54" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Stats Section */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-12 max-w-4xl mx-auto px-4">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary">5000+</div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Cities Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary">99%</div>
            <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
        </div>

        <div className="max-w-[850px] text-center mx-auto mt-8 px-4">
          <BlurText 
            text="Your Trusted Tech Rental Partner in Chennai"
            className="text-4xl md:text-7xl font-medium leading-tight text-center justify-center"
            delay={150}
            direction="top"
            stepDuration={0.4}
            animationFrom={undefined}
            animationTo={undefined}
            onAnimationComplete={undefined}
            specialWords={{
              "Chennai": {
                className: "bg-gradient-primary bg-clip-text text-transparent"
              }
            }}
          />
        </div>

        <p className="text-sm md:text-base mx-auto max-w-2xl text-center mt-6 max-md:px-2 text-muted-foreground">
          Professional laptop, desktop, workstation & server rentals with 25+ years of experience. 
          Flexible daily, weekly, and monthly plans for businesses and individuals.
        </p>

        <div className="mx-auto w-full flex items-center justify-center gap-3 mt-8">
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-4 rounded-full font-medium transition shadow-elegant hover:shadow-glow transform hover:scale-105 inline-block"
          >
            Get Started Today
          </button>
          <button 
            onClick={() => {
              const servicesSection = document.getElementById('services');
              if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="flex items-center gap-2 border border-primary/30 hover:bg-primary/10 rounded-full px-8 py-4 transition-all backdrop-blur-sm"
          >
            <span>View Services</span>
            <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M1.25.5 4.75 4l-3.5 3.5" stroke="currentColor" strokeOpacity=".7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all hover:bg-white/20">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Premium Equipment</h3>
            <p className="text-sm text-muted-foreground">Latest laptops, desktops, and workstations from top brands</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all hover:bg-white/20">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Flexible Rental Plans</h3>
            <p className="text-sm text-muted-foreground">Daily, weekly, and monthly rental options to suit your needs</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all hover:bg-white/20">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
            <p className="text-sm text-muted-foreground">Round-the-clock technical support and maintenance</p>
          </div>
        </div>
      </section>
    </>
  );
}