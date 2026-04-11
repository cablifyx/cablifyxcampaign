import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
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
                className="w-20 h-20 mx-auto mb-6 glass-card rounded-full flex items-center justify-center glow-primary"
              >
                <Shield className="w-10 h-10 text-primary" />
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
                Privacy <span className="text-gradient">Policy</span>
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
                  Sathubfix ("we," "our," or "us") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our services.
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
                    Information We Collect
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    We may collect the following types of information:
                  </p>
                  <div className="glass-card p-6 rounded-xl mb-4">
                    <h3 className="text-xl font-bold text-foreground mb-3">Personal Information</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Full name</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Email address</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Phone number</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Mailing address</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Service location details</span>
                      </li>
                    </ul>
                  </div>
                  <div className="glass-card p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-foreground mb-3">Technical & Usage Information</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>IP address</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Browser type and device information</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Pages visited and interaction data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Cookies and tracking technologies</span>
                      </li>
                    </ul>
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
                    How We Use Your Information
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    We use collected information to:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">→</span>
                      <span>Respond to inquiries and service requests</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">→</span>
                      <span>Match users with available connectivity and streaming-related services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">→</span>
                      <span>Communicate service updates and support information</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">→</span>
                      <span>Improve website performance and user experience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">→</span>
                      <span>Comply with legal and regulatory obligations</span>
                    </li>
                  </ul>
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
                    Information Sharing & Disclosure
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    We may share your information with:
                  </p>
                  <ul className="space-y-3 text-muted-foreground mb-4">
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">✓</span>
                      <span>Third-party service providers that help deliver requested services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">✓</span>
                      <span>Analytics and marketing partners to improve performance</span>
                    </li>
                  </ul>
                  <div className="glass-card p-4 rounded-xl bg-accent/10 border border-accent/30">
                    <p className="text-foreground font-semibold">
                      We do not sell personal information in the traditional sense.
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
                    Data Retention
                  </h2>
                  <p className="text-muted-foreground">
                    We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy or as required by law.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="mb-8"
                >
                  <h2 className="text-2xl font-bold font-display text-foreground mb-4 flex items-center gap-3">
                    <span className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></span>
                    Your Privacy Rights
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Depending on your location, you may have the right to:
                  </p>
                  <ul className="space-y-3 text-muted-foreground mb-4">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">⚡</span>
                      <span>Access your personal information</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">⚡</span>
                      <span>Request correction or deletion</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">⚡</span>
                      <span>Opt out of certain data uses</span>
                    </li>
                  </ul>
                  <div className="glass-card p-6 rounded-xl">
                    <p className="text-foreground mb-2">To exercise your rights, contact:</p>
                    <p className="text-primary font-semibold">Email: privacy@sathubfix.com</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  <h2 className="text-2xl font-bold font-display text-foreground mb-4 flex items-center gap-3">
                    <span className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></span>
                    Updates to This Policy
                  </h2>
                  <p className="text-muted-foreground">
                    We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated effective date.
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

export default PrivacyPolicy;
