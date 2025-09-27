import React from 'react';
import { ArrowLeft, CheckCircle, Clock, Shield, Truck, Headphones, Server, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import techTroveLogo from '@/assets/tech-trove-logo.png';

const ServerRental = () => {
  const handleStartRental = () => {
    const message = `Hi! I'm interested in Server Rental services from Tech Trove Systems.

*Service Required:* Server Rental
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
      icon: <Server className="h-6 w-6 text-primary" />,
      title: "Scalable Server Solutions",
      description: "Scalable and secure server rentals for IT infrastructure support"
    },
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      title: "Business Infrastructure",
      description: "Suitable for businesses needing temporary or additional server capacity"
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Installation & Maintenance",
      description: "Includes professional installation and ongoing maintenance support"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Flexible Rental Terms",
      description: "Short-term to long-term server rental options for various business needs"
    },
    {
      icon: <Truck className="h-6 w-6 text-primary" />,
      title: "24/7 Technical Support",
      description: "Round-the-clock support for server maintenance and troubleshooting"
    }
  ];

  const serverTypes = [
    { name: "Web Servers", specs: "Intel Xeon, 32GB RAM, 1TB SSD, Redundant Power" },
    { name: "Database Servers", specs: "Intel Xeon, 64GB RAM, 2TB SSD, RAID Configuration" },
    { name: "Application Servers", specs: "Intel Xeon, 16GB RAM, 512GB SSD, High Availability" },
    { name: "File Servers", specs: "Intel Xeon, 8GB RAM, 4TB Storage, Network Attached" }
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Server Rental</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Scalable and secure server rentals for IT infrastructure support. 
            Perfect for businesses needing temporary or additional server capacity with installation and maintenance support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary-glow" onClick={handleStartRental}>
              Get Quote Now
            </Button>
            <Button size="lg" variant="outline">
              View Server Configurations
            </Button>
          </div>
        </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Server Rentals?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional server solutions with comprehensive support and maintenance
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

      {/* Server Types Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Available Server Types</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of server configurations designed for different business applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serverTypes.map((type, index) => (
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Rent a Server?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get started with our server rental service today. Professional server solutions with full support.
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

export default ServerRental;
