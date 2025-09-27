import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Phone, 
  MessageCircle,
  Mail,
  MapPin
} from "lucide-react";
import techTroveLogo from "@/assets/tech-trove-logo.png";

const Footer = () => {
  const quickLinks = [
    { 
      name: "Home", 
      onClick: () => {
        const homeSection = document.getElementById('home');
        if (homeSection) {
          homeSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    { 
      name: "About Us", 
      onClick: () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    { 
      name: "Services", 
      onClick: () => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    { 
      name: "Gallery", 
      onClick: () => {
        window.location.href = '#/gallery';
      }
    },
    { 
      name: "Contact", 
      onClick: () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
  ];

  const services = [
    { name: "Laptop Rental in Chennai", href: "#/laptop-rental" },
    { name: "Desktop Rental in Chennai", href: "#/desktop-rental" },
    { name: "Graphic Workstation Rental", href: "#/workstation-rental" },
    { name: "Gaming Laptop Rental", href: "#/gaming-laptop-rental" },
    { name: "Server Rental", href: "#/server-rental" },
    { name: "Projector Rental", href: "#/projector-rental" },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary to-secondary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-white/20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="mb-6 text-primary-foreground/80">
              Stay updated with the latest offers on laptop and IT rentals in Chennai. Enter your email to subscribe.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/30 text-white placeholder:text-white/60"
              />
              <Button variant="outline-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img src={techTroveLogo} alt="Tech Trove Systems" className="h-10 w-auto brightness-0 invert" />
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Your trusted tech rental partner in Chennai with 25+ years of experience. We provide reliable IT solutions for businesses and individuals.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-secondary-glow" />
                <span className="text-sm">Alandur, Chennai – 600016</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary-glow" />
                <span className="text-sm">+91 8220722044</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary-glow" />
                <span className="text-sm">techtrovesystems@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={link.onClick}
                    className="text-primary-foreground/80 hover:text-secondary-glow transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href} 
                    className="text-primary-foreground/80 hover:text-secondary-glow transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Connect With Us</h4>
            <div className="space-y-4 mb-6">
              <Button 
                variant="outline-white" 
                className="w-full justify-start"
                onClick={() => {
                  window.location.href = 'tel:+918220722044';
                }}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </Button>
              <Button 
                variant="outline-white" 
                className="w-full justify-start"
                onClick={() => {
                  const message = `Hi! I'd like to get more information about your IT rental services.`;
                  const encodedMessage = encodeURIComponent(message);
                  const whatsappUrl = `https://wa.me/918220722044?text=${encodedMessage}`;
                  window.open(whatsappUrl, '_blank');
                }}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
            
            <div>
              <p className="text-sm mb-4 text-primary-foreground/80">Follow us on social media</p>
              <div className="flex space-x-3">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <Youtube className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/80">
          <p>Copyright © 2025 Tech Trove Systems. All rights reserved.</p>
          <p>Developed by Technest Technologies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;