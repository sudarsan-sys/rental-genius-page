import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  Youtube
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            Contact Tech Trove Systems – Chennai's{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Trusted Rental Partner</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to get started? Contact us for immediate assistance and free consultation for your IT rental needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                We're here to help you find the perfect tech rental solution. Reach out to us through any of the channels below.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="hover:shadow-card transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Our Location</h4>
                      <p className="text-muted-foreground">
                        No:2, Dharmaraja Kovil Street, Alandur, Chennai – 600016
                      </p>
                      <p className="text-sm text-primary mt-1">Laptop Rentals near Alandur Chennai</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-card transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Call Us</h4>
                      <p className="text-muted-foreground">+91 8220722044</p>
                      <p className="text-sm text-secondary mt-1">Available 24/7 for emergencies</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-card transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email Us</h4>
                      <p className="text-muted-foreground">techtrovesystems@gmail.com</p>
                      <p className="text-sm text-primary mt-1">We respond within 2 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-card transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">WhatsApp Support</h4>
                      <p className="text-muted-foreground">Quick support available</p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="mt-2"
                        onClick={() => {
                          const message = `Hi! I'd like to get more information about your IT rental services.`;
                          const encodedMessage = encodeURIComponent(message);
                          const whatsappUrl = `https://wa.me/918220722044?text=${encodedMessage}`;
                          window.open(whatsappUrl, '_blank');
                        }}
                      >
                        Start Chat
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Media */}
            <div className="pt-8">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                  <Youtube className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
              <p className="text-muted-foreground">
                Get a free quote for your IT rental requirements. We'll respond within 2 hours.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Full Name</label>
                  <Input placeholder="Your full name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone Number</label>
                  <Input placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Email Address</label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Service Required</label>
                <Input placeholder="e.g., Laptop Rental, Desktop Rental" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Rental Duration</label>
                <Input placeholder="e.g., 1 week, 1 month, 6 months" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Additional Requirements</label>
                <Textarea 
                  placeholder="Tell us about your specific requirements, quantity needed, delivery location, etc."
                  className="min-h-[120px]"
                />
              </div>
              
              <Button variant="cta" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message & Get Free Quote
              </Button>
              
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>We'll respond within 2 hours during business hours</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;