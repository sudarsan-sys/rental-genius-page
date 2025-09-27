import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Phone, Mail, Facebook, Instagram, Linkedin, Youtube, Menu, ChevronDown } from "lucide-react";
import techTroveLogo from "@/assets/tech-trove-logo.png";
import { cn } from "@/lib/utils";

const services = [
  { name: "Laptop Rentals", href: "#laptop-rentals" },
  { name: "Desktop Rentals", href: "#desktop-rentals" },
  { name: "Workstation Rentals", href: "#workstation-rentals" },
  { name: "Gaming Laptop Rentals", href: "#gaming-rentals" },
  { name: "Server Rentals", href: "#server-rentals" },
  { name: "Projector Rentals", href: "#projector-rentals" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      {/* Top Bar */}
      <div className="bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-sm text-primary-foreground">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 8220722044</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>techtrovesystems@gmail.com</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Facebook className="h-4 w-4 hover:text-primary-glow cursor-pointer transition-colors" />
                <Instagram className="h-4 w-4 hover:text-primary-glow cursor-pointer transition-colors" />
                <Linkedin className="h-4 w-4 hover:text-primary-glow cursor-pointer transition-colors" />
                <Youtube className="h-4 w-4 hover:text-primary-glow cursor-pointer transition-colors" />
              </div>
              <Button variant="cta" size="sm">
                Get a Free Quote Today
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={techTroveLogo} alt="Tech Trove Systems" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
            
            {/* Services Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-foreground hover:text-primary font-medium">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-80 p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {services.map((service) => (
                          <NavigationMenuLink
                            key={service.name}
                            href={service.href}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            )}
                          >
                            <div className="text-sm font-medium leading-none">{service.name}</div>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <a href="#blog" className="text-foreground hover:text-primary transition-colors font-medium">
              Blog
            </a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors font-medium">
              Gallery
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <a href="#home" className="text-lg font-medium hover:text-primary transition-colors">
                  Home
                </a>
                <a href="#about" className="text-lg font-medium hover:text-primary transition-colors">
                  About
                </a>
                <div className="space-y-2">
                  <p className="text-lg font-medium">Services</p>
                  <div className="pl-4 space-y-2">
                    {services.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className="block text-muted-foreground hover:text-primary transition-colors"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                </div>
                <a href="#blog" className="text-lg font-medium hover:text-primary transition-colors">
                  Blog
                </a>
                <a href="#gallery" className="text-lg font-medium hover:text-primary transition-colors">
                  Gallery
                </a>
                <a href="#contact" className="text-lg font-medium hover:text-primary transition-colors">
                  Contact
                </a>
                <Button variant="cta" className="mt-4">
                  Get a Free Quote Today
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;