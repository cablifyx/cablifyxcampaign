import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const DoNotSell = () => {
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
                <Eye className="w-10 h-10 text-primary" />
              </motion.div>
              <h1 className="text-3xl md:text-5xl font-bold font-display mb-6 leading-tight">
                Do Not Sell My <span className="text-gradient">Personal Information</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Under applicable privacy laws (including the California Consumer Privacy Act), you have the right to opt out of the sale or sharing of your personal information.
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
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="mb-8"
                >
                  <h2 className="text-2xl font-bold font-display text-foreground mb-4 flex items-center gap-3">
                    <span className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></span>
                    Our Policy
                  </h2>
                  <div className="glass-card p-6 rounded-xl bg-primary/5 border border-primary/20">
                    <p className="text-muted-foreground">
                      Sathubfix does not sell personal information in the traditional sense. However, certain data-sharing practices for analytics or advertising purposes may be considered a "sale" under some laws.
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
                    How to Opt Out
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    You may submit an opt-out request by:
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-8 rounded-2xl text-center bg-accent/10 border-2 border-accent/30"
                  >
                    <div className="text-5xl mb-4">✉️</div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Email Us</h3>
                    <p className="text-muted-foreground mb-4">
                      Send your request to:
                    </p>
                    <a
                      href="mailto:privacy@sathubfix.com?subject=Do%20Not%20Sell%20My%20Personal%20Information"
                      className="text-primary font-bold text-lg hover:text-accent transition-colors"
                    >
                      privacy@sathubfix.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-4">
                      Subject line: "Do Not Sell My Personal Information"
                    </p>
                  </motion.div>
                  <div className="glass-card p-6 rounded-xl mt-6 bg-accent/5 border border-accent/20">
                    <p className="text-foreground text-center">
                      ⏱️ Requests are processed within <span className="font-bold text-accent">15 business days</span>.
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

export default DoNotSell;
