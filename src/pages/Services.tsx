
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Building, ChefHat, Layers, Palette, Ruler, Video, Sun, Moon } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "2D Planning as per vastu",
      category: "Planning",
      features: [
        "Floor plan design",
        "Site layout planning",
        "Room arrangement as per vastu",
        "Space optimization",
        "Building code compliance"
      ],
      description: "Detailed architectural plans following vastu principles for optimal space utilization and positive energy flow."
    },
    {
      icon: Building,
      title: "Exterier",
      category: "3D Design",
      features: [
        "3D Elevation",
        "Day and night view",
        "Walkthrough exterier videos",
        "ACP Sheet Design",
        "Material selection guidance"
      ],
      description: "Stunning exterior visualizations with day/night views and walkthrough animations for complete design understanding."
    },
    {
      icon: ChefHat,
      title: "Modular Kitchen",
      category: "Interior",
      features: [
        "Custom kitchen layouts",
        "Storage optimization",
        "Appliance integration",
        "Material selection",
        "3D visualization"
      ],
      description: "Functional and stylish modular kitchen designs tailored to your cooking needs and space requirements."
    },
    {
      icon: Layers,
      title: "Ceiling Design",
      category: "Interior",
      features: [
        "False ceiling design",
        "Decorative ceiling panels",
        "Louvers and PVC wall panels",
        "Lighting integration",
        "Easily Maintenance"
      ],
      description: "Creative ceiling solutions that enhance aesthetics while providing functional benefits and easy maintenance."
    },
    {
      icon: Palette,
      title: "Interior Designing",
      category: "Interior",
      features: [
        "Space planning",
        "Color schemes",
        "Furniture selection",
        "Lighting design",
        "Complete makeovers"
      ],
      description: "Comprehensive interior design services to create beautiful, functional spaces that reflect your personality."
    }
  ];

  const getCategoryColor = (category: string) => {
    switch(category) {
      case "Planning":
        return "bg-blue-500";
      case "3D Design":
        return "bg-primary";
      case "Interior":
        return "bg-secondary";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-accent">
      {/* Header */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Professional architectural and interior design services for residential and commercial projects
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-secondary/10 rounded-full">
                        <service.icon className="h-8 w-8 text-secondary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                      </div>
                    </div>
                    <Badge className={`${getCategoryColor(service.category)} text-white`}>
                      {service.category}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-600 mt-4">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-primary mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
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
              From concept to completion, we follow a structured approach to deliver exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "Understanding your needs and vision" },
              { step: "02", title: "Design", description: "Creating detailed plans and 3D visualizations" },
              { step: "03", title: "Review", description: "Refining designs based on your feedback" },
              { step: "04", title: "Delivery", description: "Final plans and project execution support" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
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
            Let's discuss your project requirements and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-secondary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </a>
            <a 
              href="/projects" 
              className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-secondary transition-colors"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
