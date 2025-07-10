
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, Clock, ThumbsUp, Target, Eye, Heart, Cog } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "300+", label: "Happy Clients" },
    { icon: Award, value: "250+", label: "Projects Completed" },
    { icon: Cog, value: "70+", label: "Running Projects" },
    { icon: Clock, value: "7+", label: "Years Experience" },
    { icon: ThumbsUp, value: "99%", label: "Client Satisfaction" }
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To transform architectural dreams into reality through innovative design solutions that enhance the quality of life for our clients."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the leading architectural consultancy in Rajasthan and Haryana, known for excellence in design, sustainability, and client satisfaction."
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Integrity, creativity, and commitment to delivering exceptional architectural solutions that exceed client expectations."
    }
  ];

  const whyChooseUs = [
    "Professional architectural expertise with years of experience",
    "Custom design solutions tailored to your specific needs",
    "Timely project delivery with transparent communication",
    "Turnkey projects",
    "Competitive pricing without compromising on quality",
    "Local expertise with deep understanding of regional requirements",
    "Comprehensive services from planning to execution"
  ];

  return (
    <div className="min-h-screen bg-accent">
      {/* Header */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Naksha Kendra</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            <span className="font-devanagari text-2xl">नक्शा केंद्र - <span className="text-3xl">वास्तुकार</span></span>
            <br />
            Your trusted partner in architectural excellence
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Established in 2019 in the heart of Neemrana, Rajasthan, Naksha Kendra has been 
                  transforming architectural visions into reality for over seven years. 
                  What started as a passion for creating beautiful, functional spaces has 
                  evolved into a comprehensive architectural consultancy.
                </p>
                <p>
                  Our name "Naksha Kendra" translates to "Design Center" in Hindi, 
                  reflecting our commitment to being a central hub for all architectural 
                  and design needs. We pride ourselves on understanding the unique 
                  cultural and climatic requirements of our region while incorporating 
                  modern design principles.
                </p>
                <p>
                  From humble beginnings, we have grown to serve clients across Rajasthan and Haryana, 
                  delivering projects that range from residential homes to commercial complexes, 
                  each designed with meticulous attention to detail and client satisfaction.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern Architecture"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-secondary/10 rounded-full w-fit">
                    <value.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-xl text-primary">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Naksha Kendra?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine local expertise with modern design principles to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm">
                <div className="flex-shrink-0 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">{index + 1}</span>
                </div>
                <p className="text-gray-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Commitment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in Shahjahanpur, Neemrana, we are deeply rooted in our community 
              and committed to serving the architectural needs of Rajasthan and Haryana.
            </p>
          </div>
          
          <div className="bg-accent p-8 rounded-xl">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-primary mb-4">Our Location</h3>
              <p className="text-lg text-gray-700 mb-2">
                Opp Rajasthan Gramin Bank, Near Police Station, Shahjahanpur, Neemrana, Rajasthan 301706
              </p>
              <p className="text-gray-600">
                Strategically located to serve clients across the National Capital Region, 
                Rajasthan and Haryana, we bring architectural excellence closer to home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Ready to transform your space? Contact us today and let's discuss how we can bring your architectural vision to life.
          </p>
          <a 
            href="/contact" 
            className="bg-secondary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/90 transition-colors inline-block"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
