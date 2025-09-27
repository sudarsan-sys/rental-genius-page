import React, { useState } from 'react';
import { ArrowLeft, Filter, Search, Star, MapPin, MessageCircle, Phone, X, ZoomIn, Award, Users, Calendar, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import techTroveLogo from '@/assets/tech-trove-logo.png';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // grid, masonry, slideshow

  const categories = [
    { id: 'all', name: 'All Products', count: 32 },
    { id: 'laptops', name: 'Laptops', count: 12 },
    { id: 'desktops', name: 'Desktops', count: 6 },
    { id: 'workstations', name: 'Workstations', count: 6 },
    { id: 'gaming', name: 'Gaming Laptops', count: 4 },
    { id: 'servers', name: 'Servers', count: 2 },
    { id: 'projectors', name: 'Projectors', count: 2 }
  ];

  const locations = ['Chetpet', 'Nungambakkam', 'Anna Nagar', 'Vadapalani', 'Mogappair', 'Alandur'];

  const galleryItems = [
    // Laptops - Product Images
    {
      id: 1,
      category: 'laptops',
      title: 'Dell Latitude 5520 Business Laptop',
      description: 'High-performance business laptop for corporate clients',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Chetpet',
      rating: 4.9,
      testimonial: 'Perfect for our corporate training sessions!',
      model: 'Dell Latitude 5520',
      serviceType: 'Rental/Setup',
      price: '₹800/day',
      features: ['Intel i7', '16GB RAM', '512GB SSD'],
      certification: 'Warranty Included',
      customer: 'TechCorp Solutions'
    },
    {
      id: 2,
      category: 'laptops',
      title: 'HP Pavilion 15 Student Setup',
      description: 'Budget-friendly laptops for educational institutions',
      image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Anna Nagar',
      rating: 4.8,
      testimonial: 'Great value for money!',
      model: 'HP Pavilion 15',
      serviceType: 'Rental',
      price: '₹600/day',
      features: ['Intel i5', '8GB RAM', '256GB SSD'],
      certification: 'Refurbished',
      customer: 'Anna Nagar College'
    },
    {
      id: 3,
      category: 'laptops',
      title: 'MacBook Pro 14" Professional',
      description: 'Premium laptops for business professionals',
      image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Nungambakkam',
      rating: 4.9,
      testimonial: 'Excellent service and quality!',
      model: 'MacBook Pro 14"',
      serviceType: 'Rental/Setup',
      price: '₹1200/day',
      features: ['M1 Pro', '16GB RAM', '512GB SSD'],
      certification: 'Apple Certified',
      customer: 'Design Studio Pro'
    },
    {
      id: 4,
      category: 'laptops',
      title: 'Lenovo ThinkPad X1 Event Setup',
      description: 'Laptops configured for conferences and events',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Vadapalani',
      rating: 4.7,
      testimonial: 'Seamless event setup!',
      model: 'Lenovo ThinkPad X1',
      serviceType: 'Setup',
      price: '₹1000/day',
      features: ['Intel i7', '16GB RAM', '1TB SSD'],
      certification: 'Enterprise Grade',
      customer: 'Event Management Co.'
    },
    // Service Context Photos
    {
      id: 5,
      category: 'laptops',
      title: 'Corporate Training Session',
      description: 'Laptops set up for corporate training at client location',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Mogappair',
      rating: 4.8,
      testimonial: 'Professional setup every time!',
      model: 'Multiple Models',
      serviceType: 'Setup',
      price: '₹5000/session',
      features: ['20+ Laptops', 'Network Setup', 'Technical Support'],
      certification: 'ISO Certified',
      customer: 'Fortune 500 Company',
      contextType: 'service'
    },
    {
      id: 6,
      category: 'laptops',
      title: 'Educational Workshop Setup',
      description: 'Computer training center with our rental laptops',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Alandur',
      rating: 4.9,
      testimonial: 'Reliable and efficient!',
      model: 'Acer Aspire 5',
      serviceType: 'Rental/Setup',
      price: '₹4000/month',
      features: ['30+ Laptops', 'Lab Setup', 'Maintenance'],
      certification: 'Educational Partner',
      customer: 'Tech Institute',
      contextType: 'service'
    },
    // Desktops
    {
      id: 7,
      category: 'desktops',
      title: 'Dell OptiPlex 7090 Office Setup',
      description: 'High-performance desktops for office environments',
      image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Chetpet',
      rating: 4.8,
      testimonial: 'Powerful and reliable!',
      model: 'Dell OptiPlex 7090',
      serviceType: 'Rental/Setup',
      price: '₹1000/day',
      features: ['Intel i7', '16GB RAM', '512GB SSD'],
      certification: 'Business Grade',
      customer: 'Office Solutions Inc.'
    },
    {
      id: 8,
      category: 'desktops',
      title: 'HP Z4 Design Studio',
      description: 'Desktops configured for graphic design work',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Nungambakkam',
      rating: 4.9,
      testimonial: 'Perfect for our design work!',
      model: 'HP Z4 Workstation',
      serviceType: 'Setup',
      price: '₹1500/day',
      features: ['Intel Xeon', '32GB RAM', '1TB SSD'],
      certification: 'Professional Grade',
      customer: 'Creative Design Studio',
      contextType: 'service'
    },
    // Workstations
    {
      id: 9,
      category: 'workstations',
      title: 'HP Z8 G4 3D Workstation',
      description: 'High-end workstations for 3D modeling and rendering',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Anna Nagar',
      rating: 4.9,
      testimonial: 'Amazing for 3D work!',
      model: 'HP Z8 G4 Workstation',
      serviceType: 'Rental/Setup',
      price: '₹2500/day',
      features: ['Intel Xeon', '64GB RAM', 'RTX 4090'],
      certification: 'Professional Certified',
      customer: '3D Animation Studio'
    },
    {
      id: 10,
      category: 'workstations',
      title: 'Architecture CAD Workstation',
      description: 'Professional workstations for architectural design',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Vadapalani',
      rating: 4.8,
      testimonial: 'Perfect for CAD work!',
      model: 'Dell Precision 5820',
      serviceType: 'Setup',
      price: '₹2000/day',
      features: ['Intel i9', '32GB RAM', 'Quadro RTX'],
      certification: 'AutoCAD Certified',
      customer: 'Architecture Firm',
      contextType: 'service'
    },
    // Gaming Laptops
    {
      id: 11,
      category: 'gaming',
      title: 'ASUS ROG Strix G15 Gaming',
      description: 'High-performance gaming laptops for tournaments',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Mogappair',
      rating: 4.9,
      testimonial: 'Epic gaming experience!',
      model: 'ASUS ROG Strix G15',
      serviceType: 'Rental/Setup',
      price: '₹1500/day',
      features: ['Ryzen 7', '16GB RAM', 'RTX 3070'],
      certification: 'Gaming Certified',
      customer: 'Gaming Cafe'
    },
    {
      id: 12,
      category: 'gaming',
      title: 'Esports Tournament Setup',
      description: 'Professional gaming setup for esports events',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Alandur',
      rating: 4.9,
      testimonial: 'Perfect for tournaments!',
      model: 'Alienware m15 R6',
      serviceType: 'Rental',
      price: '₹2000/day',
      features: ['Intel i7', '32GB RAM', 'RTX 3080'],
      certification: 'Esports Ready',
      customer: 'Gaming Tournament Org',
      contextType: 'service'
    },
    // Servers
    {
      id: 13,
      category: 'servers',
      title: 'Dell PowerEdge R750 Server',
      description: 'Reliable servers for web hosting and applications',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Chetpet',
      rating: 4.8,
      testimonial: 'Rock solid performance!',
      model: 'Dell PowerEdge R750',
      serviceType: 'Rental/Setup',
      price: '₹5000/day',
      features: ['Dual Xeon', '64GB RAM', 'RAID Storage'],
      certification: 'Enterprise Grade',
      customer: 'Web Hosting Co.'
    },
    // Projectors
    {
      id: 14,
      category: 'projectors',
      title: 'Epson PowerLite 1781W Projector',
      description: 'High-quality projectors for business presentations',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Nungambakkam',
      rating: 4.8,
      testimonial: 'Crystal clear presentations!',
      model: 'Epson PowerLite 1781W',
      serviceType: 'Rental/Setup',
      price: '₹800/day',
      features: ['HD Resolution', '3000 Lumens', 'Wireless'],
      certification: 'Professional Grade',
      customer: 'Conference Center'
    }
  ];

  const filteredItems = galleryItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.model.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleWhatsApp = (item: any) => {
    const message = `Hi! I'm interested in ${item.title} from Tech Trove Systems.

*Service Required:* ${item.title}
*Model:* ${item.model}
*Location:* ${item.location}
*Service Type:* ${item.serviceType}
*Price:* ${item.price}

Please provide me with more details and availability.

Thank you!`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918220722044?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-semibold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Our Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore our comprehensive range of IT rental equipment and see our services in action across Chennai.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {locations.map((location) => (
                <Badge key={location} variant="outline" className="px-3 py-1">
                  <MapPin className="w-3 h-3 mr-1" />
                  {location}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className="text-sm"
                  >
                    {category.name} ({category.count})
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search products, locations, models..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="flex gap-1">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  Grid
                </Button>
                <Button
                  variant={viewMode === 'masonry' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('masonry')}
                >
                  Masonry
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className={`grid gap-6 ${
            viewMode === 'masonry' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
          }`}>
            {filteredItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                      viewMode === 'masonry' ? 'h-auto' : 'h-48'
                    }`}
                  />
                  <div className="absolute top-2 left-2 flex gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {item.location}
                    </Badge>
                    {item.certification && (
                      <Badge variant="default" className="text-xs bg-green-600">
                        <Award className="w-3 h-3 mr-1" />
                        {item.certification}
                      </Badge>
                    )}
                  </div>
                  <div className="absolute top-2 right-2">
                    <div className="flex items-center gap-1 bg-black/50 text-white px-2 py-1 rounded text-xs">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      {item.rating}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedImage(item)}
                    className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100"
                  >
                    <ZoomIn className="h-8 w-8 text-white" />
                  </button>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <span className="text-sm font-bold text-primary">{item.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                  <p className="text-xs text-primary font-medium mb-2">{item.model}</p>
                  <p className="text-xs text-muted-foreground mb-3">{item.serviceType}</p>
                  
                  {item.features && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {item.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  )}
                  
                  {item.testimonial && (
                    <div className="bg-muted/50 p-3 rounded-lg mb-3">
                      <p className="text-xs text-muted-foreground italic">"{item.testimonial}"</p>
                      {item.customer && (
                        <p className="text-xs font-medium text-primary mt-1">- {item.customer}</p>
                      )}
                    </div>
                  )}
                  
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => handleWhatsApp(item)}
                    >
                      <MessageCircle className="h-4 w-4 mr-1" />
                      Get Quote
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => window.location.href = '/#contact'}
                    >
                      <Phone className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No items found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[70vh] object-contain"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{selectedImage.title}</h3>
              <p className="text-muted-foreground mb-4">{selectedImage.description}</p>
              <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground mb-4">
                <div>
                  <span className="font-medium">Model:</span> {selectedImage.model}
                </div>
                <div>
                  <span className="font-medium">Location:</span> {selectedImage.location}
                </div>
                <div>
                  <span className="font-medium">Service:</span> {selectedImage.serviceType}
                </div>
                <div>
                  <span className="font-medium">Price:</span> {selectedImage.price}
                </div>
              </div>
              {selectedImage.features && (
                <div className="mb-4">
                  <span className="font-medium text-sm">Features:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {selectedImage.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              {selectedImage.testimonial && (
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="italic">"{selectedImage.testimonial}"</p>
                  {selectedImage.customer && (
                    <p className="font-medium text-primary mt-1">- {selectedImage.customer}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Ready to Rent Equipment?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote and consultation. We serve all areas of Chennai with professional IT rental services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-glow"
              onClick={() => window.location.href = '/#contact'}
            >
              Get Free Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => {
                const message = `Hi! I'd like to get more information about your IT rental services.`;
                const encodedMessage = encodeURIComponent(message);
                const whatsappUrl = `https://wa.me/918220722044?text=${encodedMessage}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;