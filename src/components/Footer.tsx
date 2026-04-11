import { Cable } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
    services: [
      { name: "Internet Plans", href: "/services#internet-plans" },
      { name: "Cable TV Plans", href: "/services#tv-plans" },
      { name: "Bundles", href: "/services#bundles" },
    ],
    support: [
      { name: "Contact Us", href: "/contact" },
      { name: "FAQ", href: "/faq" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms & Conditions", href: "/terms-conditions" },
      { name: "Advertising Disclosure", href: "/advertising-disclosure" },
      { name: "Do Not Sell", href: "/do-not-sell" },
      { name: "Cookie Policy", href: "/cookie-notice" },
      { name: "Disclaimer", href: "/disclaimer" },
    ],
  };

  return (
    <footer className="bg-section/50 border-t border-border/30">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Cable className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold font-display text-foreground">
                Sathub<span className="text-gradient">fix</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Your trusted partner for cable and internet connections.
            </p>
          </div>

          {/* Link Columns */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclosure */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <div className="glass-card p-4 rounded-xl mb-8">
            <p className="text-xs text-muted-foreground text-center">
              <strong> Disclamer:</strong> We are an independent authorized dealer and not the service provider.
               All trademarks are the property of their respective owners. 
               Availability, speeds, and pricing are subject to change and may vary by location and plan.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} Sathubfix. All rights reserved by Sathubfix LLC.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
