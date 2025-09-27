import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, CheckCircle, Award, Laptop, Monitor, Gamepad2, Server, Projector, Tablet } from "lucide-react";

const About = () => {
  const products = [
    { name: "Laptop", icon: Laptop },
    { name: "Desktop", icon: Monitor },
    { name: "Graphic Workstation", icon: Monitor },
    { name: "Gaming Laptop", icon: Gamepad2 },
    { name: "Server", icon: Server },
    { name: "Projector", icon: Projector },
    { name: "Android TV", icon: Monitor },
    { name: "MacBook", icon: Laptop },
    { name: "Apple iPad", icon: Tablet },
  ];

  const features = [
    {
      icon: Clock,
      title: "25+ Years Experience",
      description: "Over two decades of trusted IT rental expertise in Chennai",
    },
    {
      icon: Users,
      title: "50+ Trained Professionals",
      description: "Dedicated team ensuring seamless support for all rental needs",
    },
    {
      icon: CheckCircle,
      title: "Flexible Rental Plans",
      description: "Daily, weekly, and monthly rental options to suit your needs",
    },
    {
      icon: Award,
      title: "100% Customer Satisfaction",
      description: "Thousands of happy clients across Chennai trust our services",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            About Us
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            About Tech Trove Systems – 25+ Years of Trusted 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> IT Rentals in Chennai</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Tech Trove Systems, we bring over 25 years of expertise in providing reliable IT rental solutions in Chennai. 
            Whether you're a business professional, student, or freelancer, we deliver the right technology at the right time.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center group hover:shadow-elegant transition-all duration-300 border-primary/10">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Products Section */}
        <div className="bg-card rounded-2xl p-8 shadow-card">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Our Complete Range of Products
            </h3>
            <p className="text-muted-foreground">
              From laptops to servers, we have everything you need for your business or personal projects
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9 gap-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 rounded-lg hover:bg-primary/5 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-2 group-hover:bg-secondary/30 transition-colors duration-300">
                  <product.icon className="w-6 h-6 text-secondary" />
                </div>
                <span className="text-sm font-medium text-center">{product.name}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="font-medium">Flexible rental plans: Daily, weekly, and monthly options available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;