
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Building, ChefHat, Layers, Palette, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "2D Planning",
      description: "Comprehensive floor plan design and space planning solutions",
      features: [
        "Detailed floor plan layouts",
        "Space optimization planning",
        "Furniture placement suggestions",
        "Electrical and plumbing layouts",
        "Compliance with building codes"
      ],
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Building,
      title: "3D Elevation",
      description: "Stunning 3D visualizations of your building's exterior design",
      features: [
        "Photorealistic 3D renderings",
        "Multiple angle views",
        "Material and texture visualization",
        "Lighting and shadow studies",
        "Walkthrough animations"
      ],
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: ChefHat,
      title: "Modular Kitchen",
      description: "Custom kitchen designs that blend functionality with aesthetics",
      features: [
        "Custom cabinet design",
        "Ergonomic layout planning",
        "Appliance integration",
        "Storage optimization",
        "Premium material selection"
      ],
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Layers,
      title: "Ceiling Design",
      description: "Creative ceiling solutions including false ceiling and decorative designs",
      features: [
        "False ceiling installation",
        "Decorative ceiling patterns",
        "Lighting integration",
        "Acoustic solutions",
        "Maintenance-friendly designs"
      ],
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Palette,
      title: "Interior Designing",
      description: "Complete interior design services to transform your space",
      features: [
        "Complete space planning",
        "Color scheme consultation",
        "Furniture and decor selection",
        "Lighting design",
        "Project management"
      ],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-accent">
      {/* Header */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Professional architectural and interior design services tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Card className="h-full shadow-lg border-0">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 bg-secondary/10 rounded-full">
                          <service.icon className="h-8 w-8 text-secondary" />
                        </div>
                        <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                      </div>
                      <CardDescription className="text-lg text-gray-600">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover rounded-xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple and transparent workflow to bring your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "Initial meeting to understand your requirements and vision" },
              { step: "02", title: "Design", description: "Create detailed plans and 3D visualizations" },
              { step: "03", title: "Approval", description: "Review and refine designs based on your feedback" },
              { step: "04", title: "Execution", description: "Project implementation with regular updates" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary text-white rounded-full text-xl font-bold mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your project requirements and get a personalized quote.
          </p>
          <a 
            href="/contact" 
            className="bg-white text-secondary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
          >
            Get Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
