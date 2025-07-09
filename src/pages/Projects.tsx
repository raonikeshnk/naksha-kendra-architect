
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Villa Design",
      category: "Exterior",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Contemporary villa with clean lines and modern elevation",
      location: "Neemrana, Rajasthan"
    },
    {
      id: 2,
      title: "Luxury Kitchen Interior",
      category: "Interior",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Modular kitchen with island design and premium finishes",
      location: "Shahjahanpur"
    },
    {
      id: 3,
      title: "Commercial Complex",
      category: "Exterior",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Multi-story commercial building with glass facade",
      location: "Neemrana"
    },
    {
      id: 4,
      title: "Living Room Design",
      category: "Interior",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Elegant living space with custom ceiling design",
      location: "Rajasthan"
    },
    {
      id: 5,
      title: "Residential Duplex",
      category: "Exterior",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Two-story residential design with traditional elements",
      location: "Neemrana"
    },
    {
      id: 6,
      title: "Master Bedroom Suite",
      category: "Interior",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Luxury bedroom with walk-in closet and en-suite",
      location: "Shahjahanpur"
    }
  ];

  const getCategoryColor = (category: string) => {
    return category === "Exterior" ? "bg-primary" : "bg-secondary";
  };

  return (
    <div className="min-h-screen bg-accent">
      {/* Header */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Explore our portfolio of completed architectural and interior design projects
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${getCategoryColor(project.category)} text-white`}>
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-3">{project.description}</p>
                  <p className="text-sm text-secondary font-medium">{project.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let's bring your architectural vision to life. Contact us today for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-secondary text-white px-8 py-3 rounded-lg font-medium hover:bg-secondary/90 transition-colors"
            >
              Get Free Quote
            </a>
            <a 
              href="/services" 
              className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
