import React from 'react';
import { ArrowLeft, CheckCircle, Clock, Shield, Truck, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import techTroveLogo from '@/assets/tech-trove-logo.png';

const DesktopRental = () => {
  const handleStartRental = () => {
    const message = `Hi! I'm interested in Desktop Rental services from Tech Trove Systems.

*Service Required:* Desktop Rental
*Location:* Chennai
*Duration:* Please specify

Please provide me with more details and pricing.

Thank you!`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918220722044?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleContactUs = () => {
    window.location.href = '#/';
  };

  const features = [
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "High-Performance Desktops",
      description: "Robust machines designed for demanding office and personal tasks"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Quick Delivery",
      description: "Fast setup and delivery to get your desktop running immediately"
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Business-Ready Configuration",
      description: "Pre-configured for administration, design, and data-intensive tasks"
    },
    {
      icon: <Truck className="h-6 w-6 text-primary" />,
      title: "Flexible Rental Durations",
      description: "Choose from short-term to long-term rental options"
    },
    {
      icon: <Headphones className="h-6 w-6 text-primary" />,
      title: "Technical Support",
      description: "Expert support for setup, maintenance, and troubleshooting"
    }
  ];

  const desktopTypes = [
    { name: "Office Desktops", specs: "Intel i5/i7, 8-16GB RAM, 256GB+ SSD" },
    { name: "Design Workstations", specs: "Intel i7/i9, 16-32GB RAM, Dedicated GPU" },
    { name: "Server Desktops", specs: "High-end CPU, 32GB+ RAM, Multiple Storage" },
    { name: "Budget Desktops", specs: "Intel i3/i5, 8GB RAM, Reliable Performance" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="#/" className="flex items-center space-x-3">
              <img src={techTroveLogo} alt="Tech Trove Systems" className="h-12 w-auto" />
            </a>
            <Button variant="outline" asChild>
              <a href="#/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-primary/10 py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Desktop Rental</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            High-performance desktops for demanding office or personal tasks. 
            Designed for businesses needing robust machines with flexible rental durations and quick delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary-glow" onClick={handleStartRental}>
              Get Quote Now
            </Button>
            <Button size="lg" variant="outline">
              View Configurations
            </Button>
          </div>
        </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Desktop Rentals?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide robust, reliable desktop computers with quick availability and business-ready configurations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Desktop Types Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Available Desktop Types</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of desktop configurations designed for different business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {desktopTypes.map((type, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-3">{type.name}</h3>
                  <p className="text-muted-foreground mb-4">{type.specs}</p>
                  <Button className="w-full">View Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Rent a Desktop?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get started with our desktop rental service today. Quick delivery, reliable performance, and flexible terms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary-glow" onClick={handleStartRental}>
              Start Rental Process
            </Button>
            <Button size="lg" variant="outline" onClick={handleContactUs}>
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesktopRental;
