import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-laptop-rental.jpg";

const banners = [
  {
    location: "Chetpet",
    title: "Premium Laptop Rentals in Chetpet, Chennai",
    subtitle: "High-performance laptops for businesses and professionals",
    keywords: "Laptop Rentals Chetpet Chennai",
  },
  {
    location: "Nungambakkam", 
    title: "Professional IT Rentals in Nungambakkam",
    subtitle: "Complete tech solutions for your business needs",
    keywords: "Desktop Rentals Nungambakkam Chennai",
  },
  {
    location: "Anna Nagar",
    title: "Trusted Tech Partner in Anna Nagar",
    subtitle: "25+ years of reliable IT rental services",
    keywords: "Workstation Rentals Anna Nagar Chennai",
  },
];

const Hero = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const banner = banners[currentBanner];

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Tech Trove Systems Laptop Rentals"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Location Badge */}
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
              Now Serving {banner.location}
            </span>
          </div>

          {/* Main Tagline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Your Trusted Tech Rental Partner in{" "}
            <span className="bg-gradient-to-r from-secondary-glow to-primary-glow bg-clip-text text-transparent">
              Chennai
            </span>
          </h1>

          {/* Dynamic Banner Content */}
          <div className="mb-8 min-h-[120px] flex flex-col justify-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 transition-all duration-500">
              {banner.title}
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              We provide hassle-free laptop, desktop, workstation, and server rentals—so you can focus on your business.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="outline-white" size="lg" className="group">
              Know More About Us
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero" size="lg" className="group">
              Explore Our Services
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Banner Navigation */}
          <div className="flex items-center justify-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevBanner}
              className="text-white hover:bg-white/20"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex space-x-2">
              {banners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentBanner(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentBanner ? "bg-white scale-125" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={nextBanner}
              className="text-white hover:bg-white/20"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse delay-1000" />
    </section>
  );
};

export default Hero;