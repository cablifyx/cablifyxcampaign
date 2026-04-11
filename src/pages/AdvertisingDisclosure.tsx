import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AdvertisingDisclosure = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="parallax-bg" />
      <Navigation />

      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 right-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/30 rounded-full blur-3xl" />
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
                className="w-20 h-20 mx-auto mb-6 glass-card rounded-full flex items-center justify-center glow-accent"
              >
                <AlertCircle className="w-10 h-10 text-accent" />
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
                Advertising <span className="text-gradient">Disclosure</span>
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
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-lg text-muted-foreground mb-8"
                >
                  Sathubfix is an independent authorized dealer that may receive compensation when users sign up for services through our website.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="mb-8"
                >
                  <h2 className="text-2xl font-bold font-display text-foreground mb-4 flex items-center gap-3">
                    <span className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></span>
                    How We Are Compensated
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Compensation may include:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="glass-card p-6 rounded-xl text-center"
                    >
                      <div className="text-3xl mb-3">💰</div>
                      <h3 className="font-bold text-foreground mb-2">Referral Fees</h3>
                      <p className="text-sm text-muted-foreground">Per successful referral</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="glass-card p-6 rounded-xl text-center"
                    >
                      <div className="text-3xl mb-3">📊</div>
                      <h3 className="font-bold text-foreground mb-2">Lead-based Commissions</h3>
                      <p className="text-sm text-muted-foreground">For qualified leads</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="glass-card p-6 rounded-xl text-center"
                    >
                      <div className="text-3xl mb-3">🤝</div>
                      <h3 className="font-bold text-foreground mb-2">Advertising Partnerships</h3>
                      <p className="text-sm text-muted-foreground">Strategic collaborations</p>
                    </motion.div>
                  </div>
                  <div className="glass-card p-6 rounded-xl mt-4 bg-accent/10 border border-accent/30">
                    <p className="text-foreground">
                      This compensation helps support website operations and allows us to provide information at no cost to users.
                    </p>
                  </div>
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
                    Editorial Independence
                  </h2>
                  <div className="glass-card p-6 rounded-xl bg-primary/5 border border-primary/20">
                    <p className="text-muted-foreground">
                      Compensation does not influence how services are presented. Content is created independently with the goal of helping users understand available options.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <h2 className="text-2xl font-bold font-display text-foreground mb-4 flex items-center gap-3">
                    <span className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></span>
                    Provider Relationships
                  </h2>
                  <p className="text-muted-foreground">
                    Sathubfix is not owned by, operated by, or affiliated with any service provider unless explicitly stated.
                  </p>
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

export default AdvertisingDisclosure;
