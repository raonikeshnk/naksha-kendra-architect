
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ImageModal } from "@/components/ui/image-modal";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedProjectTitle, setSelectedProjectTitle] = useState("");
  const projects = [
    {
      id: 1,
      title: "Modern Villa - Front and Floor Views",
      category: "Exterior",
      images: ["/lovable-uploads/p1.png", "/lovable-uploads/p1 a.png", "/lovable-uploads/p1 b.png", "/lovable-uploads/p1 gf.png", "/lovable-uploads/p1 ff.png"],
      description: "Contemporary villa design showcasing front elevation and floor plans.",
      location: "Neemrana, Rajasthan"
    },
    {
      id: 2,
      title: "E-170 Modern Villa - Full View Set",
      category: "Exterior",
      images: ["/lovable-uploads/p2.png", "/lovable-uploads/p2 a.png", "/lovable-uploads/p2 b.png", "/lovable-uploads/p2 c.png", "/lovable-uploads/p2 d.png", "/lovable-uploads/p2 e.png", "/lovable-uploads/p2 gf.jpg"],
      description: "Complete villa design with front, sides, top and ground floor visuals.",
      location: "Neemrana, Rajasthan"
    },
    {
      id: 3,
      title: "Luxury Residential Block - Elevation & Ground",
      category: "Exterior",
      images: ["/lovable-uploads/p3.png", "/lovable-uploads/p3 a.png", "/lovable-uploads/p3 gf.png"],
      description: "Stylish luxury block design with modern elevation and floor concept.",
      location: "Shahjahanpur, Rajasthan"
    },
    {
      id: 4,
      title: "Modern Villa - Exterior Layouts",
      category: "Exterior",
      images: ["/lovable-uploads/p4.png", "/lovable-uploads/p4 a.png", "/lovable-uploads/p4 b.png", "/lovable-uploads/p4 gf.png", "/lovable-uploads/p4 ff.png"],
      description: "Minimalist single-story villa with both floor and facade views.",
      location: "Mundawar, Rajasthan"
    },
    {
      id: 5,
      title: "House Floor Plan - 2D Design",
      category: "Planning",
      images: ["/lovable-uploads/p5.png", "/lovable-uploads/p5 a.png", "/lovable-uploads/p5 ff.png"],
      description: "Detailed 2D planning including first and ground floors based on vastu.",
      location: "Neemrana, Rajasthan"
    },
    {
      id: 6,
      title: "Modern Villa Front Perspective",
      category: "Exterior",
      images: ["/lovable-uploads/p6.png"],
      description: "Contemporary front elevation with clean architectural elements.",
      location: "Benror, Rajasthan"
    },
    {
      id: 7,
      title: "First Floor Layout Plan - Residential",
      category: "Planning",
      images: ["/lovable-uploads/p7.png", "/lovable-uploads/p7 a.png"],
      description: "Complete first floor layout for home planning with vastu guidance.",
      location: "Mandhan, Rajasthan"
    },
    {
      id: 8,
      title: "Ground Floor House Planning",
      category: "Planning",
      images: ["/lovable-uploads/p8.png", "/lovable-uploads/p8 a.png", "/lovable-uploads/p8 b.png"],
      description: "Ground floor interior space planning with room placements.",
      location: "Neemrana, Rajasthan"
    },
    {
      id: 9,
      title: "Luxury Triple Story Villa",
      category: "Exterior",
      images: ["/lovable-uploads/p9.png", "/lovable-uploads/p9 a.png", "/lovable-uploads/p9 b.png", "/lovable-uploads/p9 c.png", "/lovable-uploads/p9 d.png"],
      description: "Elegant three-story villa with expansive modern styling and elevations.",
      location: "Mundawar, Rajasthan"
    }
  ];


  const galleryImages = [
    "/lovable-uploads/p 10 a.jpg",
    "/lovable-uploads/p 10 b.jpg",
    "/lovable-uploads/p 10 c.jpg",
    "/lovable-uploads/p 10.jpg",
    "/lovable-uploads/p 11.jpg",
    "/lovable-uploads/p 12 a.jpg",
    "/lovable-uploads/p 12 b.jpg",
    "/lovable-uploads/p 12 c.jpg",
    "/lovable-uploads/p 12 d.jpg",
    "/lovable-uploads/p 12.jpg",
    "/lovable-uploads/p 14 a.jpg",
    "/lovable-uploads/p 14.jpg",
    "/lovable-uploads/p 15 a.jpg",
    "/lovable-uploads/p 15 b.jpg",
    "/lovable-uploads/p 15 c.jpg",
    "/lovable-uploads/p 15 d.jpg",
    "/lovable-uploads/p 15 e.jpg",
    "/lovable-uploads/p 15.jpg",
    "/lovable-uploads/p 16 a.jpg",
    "/lovable-uploads/p 16 b.jpg",
    "/lovable-uploads/p 16 c.jpg",
    "/lovable-uploads/p 16 d.jpg",
    "/lovable-uploads/p 16.jpg",
    "/lovable-uploads/p 17.jpg",
    "/lovable-uploads/p1 a.png",
    "/lovable-uploads/p1 b.png",
    "/lovable-uploads/p1 ff.png",
    "/lovable-uploads/p1 gf.png",
    "/lovable-uploads/p1.png",
    "/lovable-uploads/p2 a.png",
    "/lovable-uploads/p2 b.png",
    "/lovable-uploads/p2 c.png",
    "/lovable-uploads/p2 d.png",
    "/lovable-uploads/p2 e.png",
    "/lovable-uploads/p2 gf.jpg",
    "/lovable-uploads/p2.png",
    "/lovable-uploads/p3 a.png",
    "/lovable-uploads/p3 gf.png",
    "/lovable-uploads/p3.png",
    "/lovable-uploads/p4 a.png",
    "/lovable-uploads/p4 b.png",
    "/lovable-uploads/p4 ff.png",
    "/lovable-uploads/p4 gf.png",
    "/lovable-uploads/p4.png",
    "/lovable-uploads/p5 a.png",
    "/lovable-uploads/p5 ff.png",
    "/lovable-uploads/p5.png",
    "/lovable-uploads/p6.png",
    "/lovable-uploads/p7 a.png",
    "/lovable-uploads/p7.png",
    "/lovable-uploads/p8 a.png",
    "/lovable-uploads/p8 b.png",
    "/lovable-uploads/p8.png",
    "/lovable-uploads/p9 a.png",
    "/lovable-uploads/p9 b.png",
    "/lovable-uploads/p9 c.png",
    "/lovable-uploads/p9 d.png",
    "/lovable-uploads/p9.png"
  ];


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

  const openModal = (images: string[], index: number, title: string) => {
    setSelectedImages(images);
    setSelectedImageIndex(index);
    setSelectedProjectTitle(title);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
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
                  {project.images.length > 1 ? (
                    <Carousel
                      className="w-full"
                      opts={{
                        align: "start",
                        loop: true,
                      }}
                      plugins={[Autoplay({ delay: 3000 }),]}
                    >
                      <CarouselContent>
                        {project.images.map((image, index) => (
                          <CarouselItem key={index}>
                            <img
                              src={image}
                              alt={`${project.title} - Image ${index + 1}`}
                              className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                              onClick={() => openModal(project.images, index, project.title)}
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                    </Carousel>
                  ) : (
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => openModal(project.images, 0, project.title)}
                    />
                  )}
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

      {/* Gallery Slider Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-10">
            Project Gallery
          </h2>

          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 3000 })]}
            className="w-full"
          >
            <CarouselContent className="flex gap-4">
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4">
                  <img
                    src={image}
                    alt={`Gallery Image ${index + 1}`}
                    className="h-48 w-full object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openModal(galleryImages, index, "Gallery")}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="text-center mt-10">
            <button
              className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              onClick={() => setModalOpen(true)}
            >
              View All Images
            </button>
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

      {/* Image Modal */}
      <ImageModal
        isOpen={modalOpen}
        onClose={closeModal}
        images={selectedImages}
        currentIndex={selectedImageIndex}
        projectTitle={selectedProjectTitle}
      />
    </div>
  );
};

export default Projects;
