import { motion } from "framer-motion";
import { MapPin, Package, Play } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Tell Us Your Needs",
    description: "Share your location and entertainment preferences with our team",
    icon: MapPin,
  },
  {
    number: "02",
    title: "Compare Options",
    description: "We'll present you with the best provider packages available in your area",
    icon: Package,
  },
  {
    number: "03",
    title: "Get Connected",
    description: "We handle the setup and coordinate with providers for a seamless experience",
    icon: Play,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Simple <span className="text-gradient">Connection Process</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Three easy steps to connect with premium entertainment services
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connection Line - positioned in its own container */}
          <div className="hidden md:block absolute left-0 right-0" style={{ top: '40px' }}>
            {/* Background line */}
            <div className="h-1 bg-gradient-to-r from-primary via-accent to-glow-secondary rounded-full opacity-30" />
            
            {/* Animated Progress Line */}
            <motion.div
              className="absolute top-0 left-0 h-1 bg-gradient-to-r from-primary via-accent to-glow-secondary rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 mx-auto glass-card rounded-2xl flex items-center justify-center glow-hover"
                >
                  <step.icon className="w-8 h-8 text-accent" />
                </motion.div>

                {/* Spacer for line */}
                <div className="h-8 md:h-6" />

                <span className="text-4xl font-bold font-display text-primary/30 block mb-2">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold font-display text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
