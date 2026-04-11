import { motion } from "framer-motion";
import { Scale } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="parallax-bg" />
      <Navigation />

      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 right-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/30 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-20 h-20 mx-auto mb-6 glass-card rounded-full flex items-center justify-center glow-primary"
              >
                <Scale className="w-10 h-10 text-primary" />
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
                <span className="text-gradient">Disclaimer</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Last Updated: January 2026
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-3xl"
            >
              <div className="prose prose-invert max-w-none">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="glass-card p-6 rounded-xl bg-accent/10 border-2 border-accent/30 mb-8"
                >
                  <h2 className="text-2xl font-bold text-center text-gradient mb-4">Important Notice</h2>
                  <p className="text-center text-foreground text-lg">
                    Sathubfix is an independent authorized dealer and is <span className="font-bold text-accent">NOT</span> the service provider.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="mb-8"
                >
                  <h2 className="text-2xl font-bold font-display text-foreground mb-4 flex items-center gap-3">
                    <span className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></span>
                    Service Relationship
                  </h2>
                  <p className="text-muted-foreground">
                    Sathubfix acts solely as a referral and information platform. All services are delivered by third-party providers. Sathubfix does not install, maintain, or operate services.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="mb-8"
                >
                  <h2 className="text-2xl font-bold font-display text-foreground mb-4 flex items-center gap-3">
                    <span className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></span>
                    Pricing & Availability
                  </h2>
                  <div className="glass-card p-6 rounded-xl">
                    <p className="text-muted-foreground mb-4">
                      Pricing, availability, features, and promotions vary by location and provider. Information displayed on this website is subject to change and should be confirmed directly with the service provider.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-lg text-sm">Location Dependent</span>
                      <span className="px-3 py-1 bg-accent/20 text-accent rounded-lg text-sm">Subject to Change</span>
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-lg text-sm">Confirmation Required</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="mb-8"
                >
                  <h2 className="text-2xl font-bold font-display text-foreground mb-4 flex items-center gap-3">
                    <span className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></span>
                    Performance & Speed
                  </h2>
                  <div className="glass-card p-6 rounded-xl bg-accent/5 border border-accent/20">
                    <p className="text-muted-foreground">
                      Advertised speeds represent maximum potential performance. Actual speeds may vary based on equipment, network conditions, and other factors.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="mb-8"
                >
                  <h2 className="text-2xl font-bold font-display text-foreground mb-4 flex items-center gap-3">
                    <span className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></span>
                    Trademarks
                  </h2>
                  <p className="text-muted-foreground">
                    All product names, service names, and trademarks belong to their respective owners. Use of descriptive terms does not imply endorsement or affiliation.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <h2 className="text-2xl font-bold font-display text-foreground mb-4 flex items-center gap-3">
                    <span className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></span>
                    No Guarantees
                  </h2>
                  <div className="glass-card p-6 rounded-xl bg-primary/5 border border-primary/20">
                    <p className="text-foreground font-semibold">
                      Sathubfix makes no warranties or guarantees regarding service quality, availability, or pricing.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Disclaimer;
