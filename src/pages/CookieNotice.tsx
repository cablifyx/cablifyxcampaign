import { motion } from "framer-motion";
import { Cookie } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CookieNotice = () => {
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
                <Cookie className="w-10 h-10 text-accent" />
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
                Cookie & Tracking <span className="text-gradient">Notice</span>
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
                  Sathubfix uses cookies and similar technologies to improve website functionality and user experience.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="mb-8"
                >
                  <h2 className="text-2xl font-bold font-display text-foreground mb-6 flex items-center gap-3">
                    <span className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></span>
                    Types of Cookies Used
                  </h2>
                  <div className="space-y-4">
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="glass-card p-6 rounded-xl border-l-4 border-primary"
                    >
                      <h3 className="text-xl font-bold text-foreground mb-2">🔒 Essential Cookies</h3>
                      <p className="text-muted-foreground">
                        Required for core website functionality
                      </p>
                    </motion.div>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="glass-card p-6 rounded-xl border-l-4 border-accent"
                    >
                      <h3 className="text-xl font-bold text-foreground mb-2">📊 Analytics Cookies</h3>
                      <p className="text-muted-foreground">
                        Help us understand how users interact with the site
                      </p>
                    </motion.div>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="glass-card p-6 rounded-xl border-l-4 border-primary"
                    >
                      <h3 className="text-xl font-bold text-foreground mb-2">🎯 Marketing Cookies</h3>
                      <p className="text-muted-foreground">
                        Used to deliver relevant advertising and measure campaign effectiveness
                      </p>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="text-2xl font-bold font-display text-foreground mb-4 flex items-center gap-3">
                    <span className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></span>
                    Managing Cookies
                  </h2>
                  <div className="glass-card p-6 rounded-xl bg-accent/10 border border-accent/30">
                    <p className="text-muted-foreground mb-4">
                      You may control cookies through your browser settings. Disabling certain cookies may limit website functionality.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">Chrome</span>
                      <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">Firefox</span>
                      <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">Safari</span>
                      <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">Edge</span>
                    </div>
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

export default CookieNotice;
