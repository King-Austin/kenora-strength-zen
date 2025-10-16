import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              KENORA <span className="text-gold">FITNESS</span>
            </h3>
            <p className="text-primary-foreground/80 mb-4">
              Strength. Wellness. Lifestyle.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/kenorafitness"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-gold transition-smooth flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/kenorafitness"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-gold transition-smooth flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-gold transition-smooth">
                  About Us
                </a>
              </li>
              <li>
                <a href="#membership" className="text-primary-foreground/80 hover:text-gold transition-smooth">
                  Membership Plans
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-primary-foreground/80 hover:text-gold transition-smooth">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-gold transition-smooth">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <address className="not-italic text-primary-foreground/80 space-y-2">
              <p>Commissioners Quarters Road</p>
              <p>Agu Awka, Anambra State</p>
              <p>Nigeria</p>
              <p className="mt-4">
                <a href="mailto:info@kenorafitness.com" className="hover:text-gold transition-smooth">
                  info@kenorafitness.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>© {currentYear} Kenora Fitness & Spa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
