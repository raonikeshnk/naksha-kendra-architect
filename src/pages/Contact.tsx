
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await emailjs.send(
        "service_2lzyil9",     // Replace with your actual Service ID
        "template_f8xlwre",    // Replace with your actual Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message
        },
        "jtu480Q-2R306OHou"      // Replace with your actual Public Key
      );

      toast({
        title: "Message Sent!",
        description: "We’ll get back to you shortly.",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: "Opp Rajasthan Gramin Bank, Near Police Station, Shahjahanpur, Neemrana, Rajasthan 301706"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 78915 00173"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "+91 9549700173"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@nakshakendra.com"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Mon - Sat: 9:00 AM - 6:00 PM"
    }
  ];

  return (
    <div className="min-h-screen bg-accent">
      {/* Header */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Ready to start your architectural journey? Get in touch with us today
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Your phone number"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project requirements..."
                      required
                      className="mt-1 min-h-32"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-secondary hover:bg-secondary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-600 mb-8">
                  We're here to help bring your architectural dreams to life.
                  Contact us through any of the following channels:
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 shadow-sm border-l-4 border-l-secondary">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-secondary/10 rounded-full">
                        <info.icon className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">{info.title}</h3>
                        <p className="text-gray-600">{info.details}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Map */}
              <Card className="p-6">
                <h3 className="font-semibold text-primary mb-4">Find Us</h3>
                <div className="bg-gray-200 h-64 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d216.17035106872518!2d76.45191717892884!3d27.995548881668707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3912ab4f362a0c43%3A0x7e65738aac0aebc!2sThe%20ladder%20lads%20buildtech!5e1!3m2!1sen!2sin!4v1752331664773!5m2!1sen!2sin"
                    width="100%"
                    height="256"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Naksha Kendra Location"
                  ></iframe>
                  {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d216.17035106872518!2d76.45191717892884!3d27.995548881668707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3912ab4f362a0c43%3A0x7e65738aac0aebc!2sThe%20ladder%20lads%20buildtech!5e1!3m2!1sen!2sin!4v1752331664773!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Can We Help You With?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive architectural services cover all your design and construction needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Residential Projects", description: "Custom home designs, renovations, and interior solutions" },
              { title: "Commercial Spaces", description: "Office buildings, retail spaces, and commercial complexes" },
              { title: "Consultation Services", description: "Architectural consulting, planning approvals, and project management" }
            ].map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a href="/services">View All Services</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
