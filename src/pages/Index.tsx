
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Home, Building, ChefHat, Layers, Palette, CheckCircle } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: Home,
      title: "2D Planning as per vastu",
      description: "Detailed floor plans as per vastu and layout designs for residential and commercial spaces."
    },
    {
      icon: Building,
      title: "Exterier",
      description: "Stunning 3D visualizations of your building's exterior design and architecture."
    },
    {
      icon: ChefHat,
      title: "Modular Kitchen",
      description: "Custom kitchen designs that blend functionality with modern aesthetics."
    },
    {
      icon: Layers,
      title: "Ceiling Design",
      description: "Creative ceiling solutions including false ceiling, PVC wall panels, Louvers and decorative designs."
    },
    {
      icon: Palette,
      title: "Interior Designing",
      description: "Complete interior design services to transform your space into a dream home."
    }
  ];

  const features = [
    "Professional architectural expertise",
    "Custom design solutions",
    "Timely project delivery",
    "Turnkey projects",
    "Affordable pricing"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                आपके सपनों का घर,{" "}
                <span className="text-yellow-400">हमारी कलाकारी</span>
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-gray-200">
                <span className="font-devanagari">नक्शा केंद्र - <span className="text-xl">वास्तुकार</span></span>
              </p>
              <p className="text-lg mb-8 text-gray-300 max-w-xl">
                Experts in 2D plan as per vastu / 3D Elevations & Interior Designs. 
                Transform your vision into reality with our professional architectural services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white border-0">
                  <Link to="/projects">
                    View Projects <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary bg-transparent">
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src="/lovable-uploads/c6cc0829-bde2-4ad2-bb03-479901437c8c.png"
                alt="Naksha Kendra Logo"
                className="h-64 w-auto animate-fade-in"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive architectural and interior design solutions for your dream spaces
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-secondary/10 rounded-full w-fit">
                    <service.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Choose Naksha Kendra?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With 7 years of experience in architectural design and interior solutions, 
                we bring your vision to life with precision, creativity, and attention to detail.
              </p>
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Link to="/about">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Modern Architecture"
                  className="rounded-2xl shadow-xl w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Let's discuss your project and bring your architectural dreams to life. 
            Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-secondary hover:bg-gray-100 border-0">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-secondary bg-transparent">
              <Link to="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
