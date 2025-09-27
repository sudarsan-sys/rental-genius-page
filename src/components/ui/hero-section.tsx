'use client';

import React from 'react';
import techTroveLogo from "@/assets/tech-trove-logo.png";

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
            <img src={techTroveLogo} alt="Tech Trove Systems" className="h-10 w-auto" />
          </a>

          <div
            id="menu"
            ref={menuRef}
            className={[
              'max-md:absolute max-md:top-0 max-md:left-0 max-md:transition-all max-md:duration-300 max-md:overflow-hidden max-md:h-full max-md:bg-white/50 max-md:backdrop-blur',
              'flex items-center gap-8 font-medium',
              'max-md:flex-col max-md:justify-center',
              menuOpen ? 'max-md:w-full' : 'max-md:w-0',
            ].join(' ')}
            aria-hidden={!menuOpen}
          >
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>

            <div className="relative group flex items-center gap-1 cursor-pointer">
              <span>Services</span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="absolute bg-white font-normal flex flex-col gap-2 w-max rounded-lg p-4 top-36 left-0 opacity-0 -translate-y-full group-hover:top-44 group-hover:opacity-100 transition-all duration-300 shadow-lg border">
                <a href="#laptop-rentals" className="hover:translate-x-1 hover:text-primary transition-all">Laptop Rentals</a>
                <a href="#desktop-rentals" className="hover:translate-x-1 hover:text-primary transition-all">Desktop Rentals</a>
                <a href="#workstation-rentals" className="hover:translate-x-1 hover:text-primary transition-all">Workstation Rentals</a>
                <a href="#gaming-rentals" className="hover:translate-x-1 hover:text-primary transition-all">Gaming Laptop Rentals</a>
                <a href="#server-rentals" className="hover:translate-x-1 hover:text-primary transition-all">Server Rentals</a>
                <a href="#projector-rentals" className="hover:translate-x-1 hover:text-primary transition-all">Projector Rentals</a>
              </div>
            </div>

            <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
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

          <button className="hidden md:block bg-primary hover:bg-primary-glow text-primary-foreground px-6 py-3 rounded-full font-medium transition shadow-elegant">
            Get Free Quote
          </button>

          <button
            id="open-menu"
            onClick={() => setMenuOpen(true)}
            className="md:hidden bg-primary hover:bg-primary-glow text-primary-foreground p-2 rounded-md aspect-square font-medium transition"
            aria-label="Open menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M4 12h16" />
              <path d="M4 18h16" />
              <path d="M4 6h16" />
            </svg>
          </button>
        </nav>

        <div className="flex items-center gap-2 border border-primary/30 hover:border-primary/50 bg-white/10 backdrop-blur-sm rounded-full w-max mx-auto px-4 py-2 mt-40 md:mt-32 transition-all">
          <span>25+ Years of Trusted IT Rental Services</span>
          <button className="flex items-center gap-1 font-medium text-primary">
            <span>Learn more</span>
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M3.959 9.5h11.083m0 0L9.501 3.958M15.042 9.5l-5.541 5.54" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <h1 className="text-4xl md:text-7xl font-medium max-w-[850px] text-center mx-auto mt-8">
          Your Trusted Tech Rental Partner in{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">Chennai</span>
        </h1>

        <p className="text-sm md:text-base mx-auto max-w-2xl text-center mt-6 max-md:px-2 text-muted-foreground">
          Professional laptop, desktop, workstation & server rentals with 25+ years of experience. 
          Flexible daily, weekly, and monthly plans for businesses and individuals.
        </p>

        <div className="mx-auto w-full flex items-center justify-center gap-3 mt-8">
          <button className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-4 rounded-full font-medium transition shadow-elegant hover:shadow-glow transform hover:scale-105">
            Get Started Today
          </button>
          <button className="flex items-center gap-2 border border-primary/30 hover:bg-primary/10 rounded-full px-8 py-4 transition-all backdrop-blur-sm">
            <span>View Services</span>
            <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M1.25.5 4.75 4l-3.5 3.5" stroke="currentColor" strokeOpacity=".7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
}