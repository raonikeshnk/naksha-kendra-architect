import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/lovable-uploads/766134ae-e9c1-463a-a5f7-4405363f8134.png" alt="Naksha Kendra Logo" className="h-28 w-auto object-contain rounded-lg" />
            </div>
            <p className="text-gray-300 mb-4">
              वास्तु के साथ, सपनों का निर्माण।<br />
              <span className="font-devanagari">नक्शा केंद्र - <span className="text-sm">वास्तुकार</span></span>
            </p>
            <p className="text-sm text-gray-400">
              Experts in 2D plan as per vastu / 3D Elevations & Interior Designs. Professional architectural services in Neemrana, Rajasthan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Opp Rajasthan Gramin Bank, Near Police Station, Shahjahanpur, Neemrana, Rajasthan 301706
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-gray-300">+91 78915 00173</span>
              </li>
              <li className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-gray-300">+91 9549700173</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-gray-300">info@nakshakendra.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Naksha Kendra. All rights reserved.
            </p>
            <div className="text-gray-400 text-sm mt-2 md:mt-0 flex flex-col md:flex-row items-center gap-2">
              
              
              <span>
                Developed by{" "}
                <a href="https://www.raonikeshnk.in" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors">
                  Rao Nikesh NK
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};