import { Leaf, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">EcoAware</span>
            </div>
            <p className="text-background/70 leading-relaxed">
              Empowering communities to protect our planet through education and action.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#learn-more" className="hover:text-primary transition-colors">Environmental Issues</a></li>
              <li><a href="#take-action" className="hover:text-primary transition-colors">Take Action</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Resources</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Get Involved</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-primary transition-colors">Volunteer</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Donate</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Partner With Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-3 text-background/70">
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>info@ecoaware.org</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>123 Green Street, Earth City, EC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; 2025 EcoAware. All rights reserved. Together for a sustainable future.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
