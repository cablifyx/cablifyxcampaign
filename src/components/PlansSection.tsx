import { motion } from "framer-motion";
import { Check, Zap, Users, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    name: "Essential",
    tagline: "Perfect for everyday browsing",
    speed: "100",
    price: "49",
    features: [
      "High-speed internet connectivity",
      "Basic cable TV package options",
      "Equipment rental included",
      "Professional installation available",
    ],
    icon: Zap,
    featured: false,
  },
  {
    name: "Premium",
    tagline: "Ideal for households",
    speed: "500",
    price: "79",
    features: [
      "Ultra-fast fiber internet",
      "Multi-device connectivity",
      "Expanded channel lineup",
      "Premium network access",
      "White-glove installation",
    ],
    icon: Users,
    featured: true,
  },
  {
    name: "Ultimate",
    tagline: "Enterprise-grade performance",
    speed: "1000",
    price: "99",
    features: [
      "Gigabit fiber connection",
      "Whole-home coverage",
      "Complete entertainment bundle",
      "Premium support access",
      "Advanced networking gear",
      "Dedicated account manager",
    ],
    icon: Home,
    featured: false,
  },
];

const PlansSection = () => {
  const navigate = useNavigate();

  return (
    <section id="plans" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Featured <span className="text-gradient">Service Plans</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Compare packages and find your perfect connection solution
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Popular Badge */}
              {plan.featured && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="px-6 py-2 rounded-full text-black text-xs font-bold shadow-lg whitespace-nowrap" style={{ backgroundColor: '#4DEFE7' }}>
                    MOST POPULAR
                  </div>
                </div>
              )}
              <div className={`plan-card ${plan.featured ? 'featured' : ''} h-full flex flex-col`}>

              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${plan.featured ? 'bg-accent/20' : 'bg-primary/20'}`}>
                  <plan.icon className={`w-6 h-6 ${plan.featured ? 'text-accent' : 'text-primary'}`} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-bold font-display truncate">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground truncate">{plan.tagline}</p>
                </div>
              </div>

              <div className="flex items-end gap-1 mb-2">
                <span className="text-4xl font-bold font-display text-foreground">{plan.speed}</span>
                <span className="text-muted-foreground mb-1">Mbps</span>
              </div>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-2xl font-bold text-foreground">${plan.price}</span>
                <span className="text-muted-foreground">/month (Negotiable)</span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.featured ? 'text-accent' : 'text-primary'}`} />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.location.href = 'tel:+18332250503'}
                    className="w-full py-4 rounded-xl font-semibold transition-all btn-gradient mt-auto"
                  >
                    <span className="relative z-10">Get Started</span>
                  </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          * Speeds may vary based on location. Equipment and installation may be required.
        </p>
      </div>
    </section>
  );
};

export default PlansSection;
