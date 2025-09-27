import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Laptop, 
  Monitor, 
  Cpu, 
  Gamepad2, 
  Server, 
  Projector, 
  ArrowRight,
  Clock,
  Shield,
  Wrench
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "laptop-rentals",
      icon: Laptop,
      title: "Laptop Rentals in Chennai",
      description: "Affordable laptops for work, study, or personal needs. Short-term & long-term options available.",
      features: ["High-performance models", "Latest software installed", "24/7 technical support"],
      gradient: "from-primary to-primary-glow",
      route: "/laptop-rental",
    },
    {
      id: "desktop-rentals", 
      icon: Monitor,
      title: "Desktop Rentals in Chennai",
      description: "High-performance desktops for offices, developers, and designers with complete setup support.",
      features: ["Professional workstations", "Custom configurations", "On-site installation"],
      gradient: "from-secondary to-secondary-glow",
      route: "/desktop-rental",
    },
    {
      id: "workstation-rentals",
      icon: Cpu,
      title: "Workstation Rentals",
      description: "Graphics-intensive and CAD-ready workstations for engineers and creative professionals.",
      features: ["High-end graphics cards", "Professional software", "Performance optimization"],
      gradient: "from-primary to-secondary",
      route: "/workstation-rental",
    },
    {
      id: "gaming-rentals",
      icon: Gamepad2,
      title: "Gaming Laptop Rentals",
      description: "High-end gaming laptops for eSports, events, and testing with latest graphics capabilities.",
      features: ["RTX graphics cards", "High refresh displays", "Gaming peripherals"],
      gradient: "from-secondary to-primary",
      route: "/gaming-laptop-rental",
    },
    {
      id: "server-rentals",
      icon: Server,
      title: "Server Rentals",
      description: "Secure, scalable server rentals for startups and enterprises with managed services.",
      features: ["Enterprise-grade hardware", "24/7 monitoring", "Backup solutions"],
      gradient: "from-primary-glow to-secondary-glow",
      route: "/server-rental",
    },
    {
      id: "projector-rentals",
      icon: Projector,
      title: "Projector Rentals",
      description: "Business-grade projectors for meetings, events, and presentations with setup assistance.",
      features: ["4K resolution support", "Wireless connectivity", "Complete setup service"],
      gradient: "from-secondary-glow to-primary",
      route: "/projector-rental",
    },
  ];

  const qualityFeatures = [
    {
      icon: Shield,
      title: "Best Service in Chennai",
      description: "Top-rated tech rental provider with proven reliability and customer satisfaction.",
    },
    {
      icon: Wrench,
      title: "Experienced Team",
      description: "50+ skilled staff ensuring quick setup, configuration, and ongoing support.",
    },
    {
      icon: Clock,
      title: "100% Customer Satisfaction",
      description: "Thousands of happy clients across Chennai trust our professional services.",
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            Our Tech Rental Services in{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Chennai</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Complete IT rental solutions for businesses, professionals, and individuals across Chennai
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              className="group hover:shadow-elegant transition-all duration-300 border-primary/10 overflow-hidden"
            >
              <CardHeader className="relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full group" asChild>
                  <a href={service.route}>
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Quality Features */}
        <div className="bg-gradient-subtle rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Why Choose Tech Trove Systems?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence and customer satisfaction sets us apart as Chennai's leading tech rental provider
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {qualityFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;