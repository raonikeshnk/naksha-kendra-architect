import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
const Projects = () => {
  const projects = [{
    id: 1,
    title: "Modern Villa Design - Night Views",
    category: "Exterior",
    images: ["/lovable-uploads/48c0b28a-39e8-43c4-b36e-3239b76f2f90.png", "/lovable-uploads/0d95ddcf-447e-4afe-8ef7-e27a52a4378c.png"],
    description: "Contemporary villa with beautiful night lighting and modern elevation",
    location: "Neemrana, Rajasthan"
  }, {
    id: 2,
    title: "E-170 Modern Villa - Day & Night Views",
    category: "Exterior",
    images: ["/lovable-uploads/2f121e2b-8790-450b-9058-ca15045bf62c.png", "/lovable-uploads/07be4055-801f-4b66-8d4e-0cc698bf32fa.png", "/lovable-uploads/700e9a5e-e2f9-427e-8f0b-077ef4ad258d.png"],
    description: "Modern villa design with stunning day and night view renderings",
    location: "Rajasthan"
  }, {
    id: 3,
    title: "Luxury Residential Complex",
    category: "Exterior",
    images: ["/lovable-uploads/955e1290-869d-4827-915e-6f95039df126.png", "/lovable-uploads/253b0a6a-e424-4300-8d39-f950d031fb39.png"],
    description: "Luxury residential complex with modern architectural design",
    location: "Rajasthan"
  }, {
    id: 4,
    title: "Contemporary Single Story Villa",
    category: "Exterior",
    images: ["/lovable-uploads/1dc7b471-40b3-4610-8a1e-6b423bd74e26.png"],
    description: "Modern single story villa with contemporary design elements",
    location: "Neemrana"
  }, {
    id: 5,
    title: "Residential Floor Plans",
    category: "Planning",
    images: ["/lovable-uploads/dfb9724e-a02c-474a-add7-b6d824be90a6.png", "/lovable-uploads/eaa6324b-9d2c-47e9-b5d8-f47ed4a31e7d.png"],
    description: "Detailed first floor and ground floor plans as per vastu",
    location: "Designed by Yogesh Choudhary"
  }, {
    id: 6,
    title: "Modern Villa Design",
    category: "Exterior",
    images: ["/lovable-uploads/317fe995-036f-425a-915e-32c289a9c9ad.png"],
    description: "Contemporary villa with clean lines and modern elevation",
    location: "Neemrana, Rajasthan"
  }, {
    id: 7,
    title: "Residential Floor Plan - First Floor",
    category: "Planning",
    images: ["/lovable-uploads/2d686869-ebc3-4917-a526-5ebaa50c3944.png"],
    description: "Detailed first floor plan as per vastu with room layouts",
    location: "Shahjahanpur"
  }, {
    id: 8,
    title: "Ground Floor Plan",
    category: "Planning",
    images: ["/lovable-uploads/4cba3794-e167-44b1-9859-0b31d7b8e6dc.png"],
    description: "Ground floor layout with living, kitchen, and bedroom areas",
    location: "Neemrana"
  }, {
    id: 9,
    title: "Luxury Modern Home",
    category: "Exterior",
    images: ["/lovable-uploads/00166b04-ef26-48e8-8667-d8fb4f93c31f.png"],
    description: "Three-story modern home with contemporary design elements",
    location: "Rajasthan"
  }, {
    id: 10,
    title: "Mr. Aman Jaat - First Floor Plan",
    category: "Planning",
    images: ["/lovable-uploads/348dac1b-00bd-4f05-9dc5-13dc0f80f973.png"],
    description: "Custom first floor plan for residential project",
    location: "Fauladpur"
  }, {
    id: 11,
    title: "Residential Layout - Column Plan",
    category: "Planning",
    images: ["/lovable-uploads/2f848f11-1248-4012-818f-cdb09bd60aca.png"],
    description: "Structural column layout for residential construction",
    location: "Fauladpur"
  }, {
    id: 12,
    title: "Ground Floor - Technical Drawing",
    category: "Planning",
    images: ["/lovable-uploads/c1d076ab-852f-405d-a378-dc391104a3a4.png"],
    description: "Detailed technical drawing with measurements and specifications",
    location: "Neemrana"
  }, {
    id: 13,
    title: "First Floor - Technical Plan",
    category: "Planning",
    images: ["/lovable-uploads/1aacf659-d201-4c29-9a3d-f76392d13ba5.png"],
    description: "First floor technical plan with room dimensions",
    location: "Neemrana"
  }, {
    id: 14,
    title: "Night View Villa",
    category: "Exterior",
    images: ["/lovable-uploads/b1ae0a05-5729-4a57-9e27-af3136592d0d.png"],
    description: "Beautiful night view rendering of modern villa design",
    location: "Rajasthan"
  }];
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Exterior":
        return "bg-primary";
      case "Planning":
        return "bg-secondary";
      default:
        return "bg-gray-500";
    }
  };
  return <div className="min-h-screen bg-accent">
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
            {projects.map(project => <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  {project.images.length > 1 ? <Carousel className="w-full">
                      <CarouselContent>
                        {project.images.map((image, index) => <CarouselItem key={index}>
                            <img src={image} alt={`${project.title} - Image ${index + 1}`} className="w-full h-64 object-cover" />
                          </CarouselItem>)}
                      </CarouselContent>
                      
                      
                    </Carousel> : <img src={project.images[0]} alt={project.title} className="w-full h-64 object-cover" />}
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
              </Card>)}
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
            <a href="/contact" className="bg-secondary text-white px-8 py-3 rounded-lg font-medium hover:bg-secondary/90 transition-colors">
              Get Free Quote
            </a>
            <a href="/services" className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors">
              View Services
            </a>
          </div>
        </div>
      </section>
    </div>;
};
export default Projects;