import { motion } from "framer-motion";
import { Wifi, Tv, Package, Phone, Globe, Zap, Check, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import servicesHero from "@/assets/services-hero.jpg";

const internetPlans = [
  {
    name: "Basic",
    speed: "100",
    price: "39",
    features: ["Home browsing", "Light streaming", "Standard router"],
  },
  {
    name: "Standard",
    speed: "300",
    price: "59",
    features: ["Multi-device use", "HD streaming", "Enhanced WiFi", "Reliable speeds"],
    popular: true,
  },
  {
    name: "Premium",
    speed: "500",
    price: "79",
    features: ["Heavy usage", "4K capability", "Advanced router", "Priority support"],
  },
  {
    name: "Ultimate",
    speed: "1000",
    price: "99",
    features: ["Gigabit fiber", "Whole-home coverage", "Business-grade", "VIP technical support"],
  },
];

const tvPlans = [
  {
    name: "Entertainment",
    channels: "100+",
    price: "49",
    features: ["Local channels", "Basic cable", "News networks"],
  },
  {
    name: "Choice",
    channels: "150+",
    price: "69",
    features: ["Expanded lineup", "Movie channels", "Sports & entertainment"],
    popular: true,
  },
  {
    name: "Ultimate",
    channels: "200+",
    price: "89",
    features: ["Premium networks", "Full channel access", "International content"],
  },
];

const bundles = [
  {
    name: "Starter Bundle",
    includes: ["100 Mbps Internet", "100+ Channels"],
    price: "79",
    savings: "Save $9/month",
  },
  {
    name: "Family Bundle",
    includes: ["500 Mbps Internet", "150+ Channels", "Unlimited Calls"],
    price: "129",
    savings: "Save $28/month",
    popular: true,
  },
  {
    name: "Ultimate Bundle",
    includes: ["1 Gbps Internet", "200+ Channels", "Unlimited Calls", "Premium Support"],
    price: "179",
    savings: "Save $47/month",
  },
];

const otherServices = [
  { icon: Phone, name: "Home Phone", description: "Landline service with unlimited calling" },
  { icon: Globe, name: "Business Packages", description: "Commercial-grade internet solutions" },
  { icon: Zap, name: "Installation Service", description: "Professional setup and configuration" },
];

const Services = () => {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="parallax-bg" />
      <Navigation />

      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={servicesHero} alt="Services" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
                Available <span className="text-gradient">Service Plans</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Compare packages from top providers and find the best deal for your needs
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection('internet-plans')}
                  className="btn-gradient"
                >
                  <span className="relative z-10">Internet Plans</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection('tv-plans')}
                  className="glass-card px-8 py-4 rounded-xl font-semibold text-foreground"
                >
                  TV Plans
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection('bundles')}
                  className="glass-card px-8 py-4 rounded-xl font-semibold text-foreground"
                >
                  Bundles
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Internet Plans */}
        <section id="internet-plans" className="py-24 bg-section/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="w-16 h-16 mx-auto mb-6 glass-card rounded-full flex items-center justify-center glow-primary">
                <Wifi className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
                Internet <span className="text-gradient">Plans</span>
              </h2>
              <p className="text-muted-foreground text-lg">High-speed connectivity for seamless streaming</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {internetPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {plan.popular && (
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="px-6 py-2 rounded-full text-black text-xs font-bold shadow-lg whitespace-nowrap" style={{ backgroundColor: '#4DEFE7' }}>
                        Standard plan
                      </div>
                    </div>
                  )}
                  <div className={`plan-card ${plan.popular ? 'featured' : ''} h-full flex flex-col`}>
                  <h3 className="text-xl font-bold font-display mb-2">{plan.name}</h3>
                  <div className="flex items-end gap-1 mb-1">
                    <span className="text-4xl font-bold text-gradient">{plan.speed}</span>
                    <span className="text-muted-foreground mb-1">Mbps</span>
                  </div>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-2xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground">/month (Negotiable)</span>
                  </div>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate('/contact')}
                    className="w-full py-3 rounded-xl font-semibold transition-all btn-gradient mt-auto"
                  >
                    <span className="relative z-10">Get Started</span>
                  </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cable TV Plans */}
        <section id="tv-plans" className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="w-16 h-16 mx-auto mb-6 glass-card rounded-full flex items-center justify-center glow-accent">
                <Tv className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
                Cable TV <span className="text-gradient">Plans</span>
              </h2>
              <p className="text-muted-foreground text-lg">Premium live TV entertainment</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {tvPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {plan.popular && (
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="px-6 py-2 rounded-full text-black text-xs font-bold shadow-lg whitespace-nowrap" style={{ backgroundColor: '#4DEFE7' }}>
                        Choice plan
                      </div>
                    </div>
                  )}
                  <div className={`plan-card ${plan.popular ? 'featured' : ''} h-full flex flex-col`}>
                  <h3 className="text-xl font-bold font-display mb-2">{plan.name}</h3>
                  <div className="flex items-end gap-1 mb-1">
                    <span className="text-3xl font-bold text-gradient">{plan.channels}</span>
                    <span className="text-muted-foreground mb-1">Channels</span>
                  </div>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-2xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground">/month (Negotiable)</span>
                  </div>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.location.href = 'tel:+18332250503'}
                    className="w-full py-3 rounded-xl font-semibold transition-all btn-gradient mt-auto"
                  >
                    <span className="relative z-10">Get Started</span>
                  </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Bundles */}
        <section id="bundles" className="py-24 bg-section/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="w-16 h-16 mx-auto mb-6 glass-card rounded-full flex items-center justify-center glow-primary">
                <Package className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
                Bundle & <span className="text-gradient">Save</span>
              </h2>
              <p className="text-muted-foreground text-lg">Combine services for maximum savings</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {bundles.map((bundle, index) => (
                <motion.div
                  key={bundle.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {bundle.popular && (
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="px-6 py-2 rounded-full text-black text-xs font-bold shadow-lg whitespace-nowrap" style={{ backgroundColor: '#4DEFE7' }}>
                        Family Bundle
                      </div>
                    </div>
                  )}
                  <div className={`plan-card ${bundle.popular ? 'featured' : ''} h-full flex flex-col`}>
                  <h3 className="text-xl font-bold font-display mb-4">{bundle.name}</h3>
                  <div className="space-y-2 mb-4 flex-grow">
                    {bundle.includes.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-accent" />
                        <span className="text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-bold text-gradient">${bundle.price}</span>
                    <span className="text-muted-foreground">/month (Negotiable)</span>
                  </div>
                  <p className="text-accent font-semibold text-sm mb-6">{bundle.savings}</p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.location.href = 'tel:+18332250503'}
                    className="w-full py-3 rounded-xl font-semibold transition-all btn-gradient mt-auto"
                  >
                    <span className="relative z-10">Get Bundle</span>
                  </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Services */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
                Other <span className="text-gradient">Services</span>
              </h2>
              <p className="text-muted-foreground text-lg">Additional connectivity solutions</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {otherServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  onClick={() => navigate('/contact')}
                  className="glass-card p-6 rounded-2xl text-center cursor-pointer"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/20 flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold font-display mb-2">{service.name}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-section/50">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Ready to Get <span className="text-gradient">Connected?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Contact our team to find the perfect plan for your needs
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = 'tel:+18332250503'}
                className="btn-gradient text-lg flex items-center gap-2 mx-auto"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Contact Us Today
                  <ArrowRight className="w-5 h-5" />
                </span>
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
