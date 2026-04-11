import { motion } from "framer-motion";
import { Menu, X, Cable, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const targetId = href.replace('#', '');
      if (location.pathname === '/') {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/', { state: { scrollTo: targetId } });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="glass-card mx-4 mt-4 md:mx-8 rounded-2xl border-border/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/Home">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Cable className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold font-display text-foreground">
                  Sathub<span className="text-gradient">fix</span>
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.href}>
                  <motion.span
                    whileHover={{ y: -2 }}
                    className={`text-muted-foreground hover:text-foreground transition-colors font-medium cursor-pointer relative z-10 ${
                      location.pathname === link.href ? 'text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-accent after:rounded-full' : ''
                    }`}
                  >
                    {link.name}
                  </motion.span>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a href="tel:+18332250503">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-gradient px-6 py-2.5 text-sm"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Contact (833) 225-0503
                  </span>
                </motion.button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground z-50 relative"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden pt-6 pb-4 overflow-hidden relative z-40"
            >
              <div className="flex flex-col gap-4 relative z-40">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-muted-foreground hover:text-foreground transition-colors font-medium py-2 cursor-pointer relative z-40 block ${
                      location.pathname === link.href ? 'text-foreground' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <a href="tel:+18332250503" onClick={() => setIsOpen(false)} className="relative z-40 block">
                  <button className="btn-gradient py-3 mt-2 w-full">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      Contact (833) 225-0503
                    </span>
                  </button>
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
