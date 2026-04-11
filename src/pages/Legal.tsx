import { motion } from "framer-motion";
import { Shield, FileText, Cookie, AlertCircle, HelpCircle, Scale, Eye } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const legalSections = [
  { id: "privacy", name: "Privacy Policy", icon: Shield },
  { id: "terms", name: "Terms & Conditions", icon: FileText },
  { id: "advertising", name: "Advertising Disclosure", icon: AlertCircle },
  { id: "dnsmpi", name: "Do Not Sell My Personal Information", icon: Eye },
  { id: "cookies", name: "Cookie / Tracking Notice", icon: Cookie },
  { id: "disclaimer", name: "Disclaimer", icon: Scale },
  { id: "faq", name: "FAQ", icon: HelpCircle },
];

const faqs = [
  {
    question: "What is Sathubfix?",
    answer: "Sathubfix is an independent authorized dealer that helps connect customers with premium streaming and entertainment services. We are not the service provider but work to simplify your path to seamless entertainment."
  },
  {
    question: "How do I sign up for services?",
    answer: "You can sign up by contacting our team through our contact form, calling our customer service line, or selecting a plan from our Services page. Our representatives will guide you through the entire process."
  },
  {
    question: "What internet speeds do I need for streaming?",
    answer: "For HD streaming, we recommend at least 25 Mbps. For 4K streaming, 50 Mbps or higher is recommended. For multiple devices streaming simultaneously, consider 100 Mbps or more."
  },
  {
    question: "Can I bundle my services?",
    answer: "Yes! We offer various bundle options that combine internet, TV, and phone services at discounted rates. Visit our Services page to see available bundles."
  },
  {
    question: "Is there a contract required?",
    answer: "Contract requirements vary by service provider and plan. Our representatives will explain all terms and conditions before you sign up."
  },
  {
    question: "How do I contact customer support?",
    answer: "You can reach our 24/7 customer support team via phone at 1-800-SATHUBFIX, email at support@sathubfix.com, or through our online contact form."
  },
];

const Legal = () => {
  const [activeSection, setActiveSection] = useState("privacy");
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && legalSections.some(s => s.id === hash)) {
      setActiveSection(hash);
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="parallax-bg" />
      <Navigation />

      <main className="pt-32">
        {/* Hero */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
                Legal & <span className="text-gradient">Compliance</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Transparency and trust are at the core of everything we do.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="py-8 bg-section/50 sticky top-20 z-40">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap gap-3 justify-center">
              {legalSections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                    activeSection === section.id
                      ? 'bg-primary text-white'
                      : 'glass-card text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <section.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{section.name}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto space-y-24">
            {/* Privacy Policy */}
            <motion.section
              id="privacy"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-3xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-display">Privacy Policy</h2>
              </div>
              <div className="prose prose-invert max-w-none space-y-4 text-muted-foreground">
                <p><strong>Last Updated:</strong> January 2026</p>
                <p>Sathubfix ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
                <h4 className="text-foreground font-semibold mt-6">Information We Collect</h4>
                <p>We may collect personal information that you voluntarily provide, including: name, email address, phone number, mailing address, and payment information when you request services or contact us.</p>
                <h4 className="text-foreground font-semibold mt-6">How We Use Your Information</h4>
                <p>We use collected information to: process your service requests, communicate with you about services, send promotional materials (with your consent), improve our website and services, and comply with legal obligations.</p>
                <h4 className="text-foreground font-semibold mt-6">Information Sharing</h4>
                <p>We may share your information with service providers who help us deliver services, and with business partners when you request specific services. We do not sell your personal information.</p>
                <h4 className="text-foreground font-semibold mt-6">Your Rights</h4>
                <p>You have the right to access, correct, or delete your personal information. Contact us at privacy@sathubfix.com to exercise these rights.</p>
              </div>
            </motion.section>

            {/* Terms & Conditions */}
            <motion.section
              id="terms"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-3xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-display">Terms & Conditions</h2>
              </div>
              <div className="prose prose-invert max-w-none space-y-4 text-muted-foreground">
                <p><strong>Last Updated:</strong> January 2026</p>
                <p>By accessing or using Sathubfix's website and services, you agree to be bound by these Terms and Conditions.</p>
                <h4 className="text-foreground font-semibold mt-6">Use of Services</h4>
                <p>Our services are intended for personal, non-commercial use. You agree to provide accurate information when using our services and to maintain the security of any account credentials.</p>
                <h4 className="text-foreground font-semibold mt-6">Independent Dealer Status</h4>
                <p>Sathubfix operates as an independent authorized dealer. We are not the service provider. All services are provided by third-party providers, and their terms and conditions apply.</p>
                <h4 className="text-foreground font-semibold mt-6">Pricing and Availability</h4>
                <p>Prices and service availability may vary by location. All pricing shown is subject to change without notice. Final pricing will be confirmed before service activation.</p>
                <h4 className="text-foreground font-semibold mt-6">Limitation of Liability</h4>
                <p>Sathubfix shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services.</p>
              </div>
            </motion.section>

            {/* Advertising Disclosure */}
            <motion.section
              id="advertising"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-3xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-display">Advertising Disclosure</h2>
              </div>
              <div className="prose prose-invert max-w-none space-y-4 text-muted-foreground">
                <p><strong>Last Updated:</strong> January 2026</p>
                <p>Sathubfix is an independent authorized dealer. We receive compensation from service providers when you sign up for services through our website.</p>
                <h4 className="text-foreground font-semibold mt-6">Compensation Disclosure</h4>
                <p>We may receive commissions, referral fees, or other compensation from service providers featured on our website. This compensation helps us maintain our website and provide free information to consumers.</p>
                <h4 className="text-foreground font-semibold mt-6">Editorial Independence</h4>
                <p>While we receive compensation, we strive to provide accurate and helpful information. Our content is created independently and is not influenced by compensation arrangements.</p>
                <h4 className="text-foreground font-semibold mt-6">Trademarks</h4>
                <p>All trademarks, service marks, and trade names referenced on this website belong to their respective owners. Sathubfix is not affiliated with any service providers unless explicitly stated.</p>
              </div>
            </motion.section>

            {/* Do Not Sell My Personal Information */}
            <motion.section
              id="dnsmpi"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-3xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-display">Do Not Sell My Personal Information</h2>
              </div>
              <div className="prose prose-invert max-w-none space-y-4 text-muted-foreground">
                <p><strong>Your Privacy Rights</strong></p>
                <p>Under the California Consumer Privacy Act (CCPA) and similar state laws, you have the right to opt out of the "sale" of your personal information.</p>
                <p>Sathubfix does not sell your personal information in the traditional sense. However, some data sharing with advertising partners may constitute a "sale" under certain privacy laws.</p>
                <h4 className="text-foreground font-semibold mt-6">How to Opt Out</h4>
                <p>To exercise your right to opt out, you can: email us at privacy@sathubfix.com with the subject "Do Not Sell My Information," or call our privacy hotline at 1-800-SATHUBFIX.</p>
                <p>We will process your request within 15 business days and confirm once completed.</p>
              </div>
            </motion.section>

            {/* Cookie Notice */}
            <motion.section
              id="cookies"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-3xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Cookie className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-display">Cookie / Tracking Notice</h2>
              </div>
              <div className="prose prose-invert max-w-none space-y-4 text-muted-foreground">
                <p><strong>Last Updated:</strong> January 2026</p>
                <p>This website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and personalize content.</p>
                <h4 className="text-foreground font-semibold mt-6">Types of Cookies We Use</h4>
                <ul>
                  <li><strong>Essential Cookies:</strong> Required for the website to function properly.</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website.</li>
                  <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track campaign performance.</li>
                </ul>
                <h4 className="text-foreground font-semibold mt-6">Managing Cookies</h4>
                <p>You can control cookies through your browser settings. However, disabling certain cookies may affect your experience on our website.</p>
              </div>
            </motion.section>

            {/* Disclaimer */}
            <motion.section
              id="disclaimer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-3xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Scale className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-display">Disclaimer</h2>
              </div>
              <div className="prose prose-invert max-w-none space-y-4 text-muted-foreground">
                <p><strong>Last Updated:</strong> January 2026</p>
                <h4 className="text-foreground font-semibold">Important Disclosures</h4>
                <div className="bg-secondary/50 p-4 rounded-xl border border-border">
                  <p className="font-medium text-foreground">Sathubfix is an independent authorized dealer and is NOT the service provider.</p>
                </div>
                <h4 className="text-foreground font-semibold mt-6">Detailed Disclaimer</h4>
                <p><strong>Service Provider Relationship:</strong> Sathubfix operates as an independent authorized sales agent. We are not employed by, nor do we represent, any specific service provider. All services advertised are provided by third-party companies.</p>
                <p><strong>Pricing Accuracy:</strong> While we strive to display accurate pricing and availability information, actual prices and service availability may vary by location and are subject to change. Final pricing is determined by the service provider at the time of installation.</p>
                <p><strong>Speed and Performance:</strong> Internet speeds advertised are maximum speeds and may vary based on network conditions, equipment, and other factors. Actual speeds may differ from advertised speeds.</p>
                <p><strong>Trademarks:</strong> All product names, logos, and brands are property of their respective owners. All company, product, and service names used on this website are for identification purposes only.</p>
                <p><strong>No Guarantees:</strong> Sathubfix makes no guarantees regarding service quality, availability, or pricing. All inquiries should be verified directly with the service provider before making purchasing decisions.</p>
              </div>
            </motion.section>

            {/* FAQ */}
            <motion.section
              id="faq"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-3xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-display">Frequently Asked Questions</h2>
              </div>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="border border-border rounded-xl p-4"
                  >
                    <h4 className="font-semibold text-foreground mb-2">{faq.question}</h4>
                    <p className="text-muted-foreground text-sm">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Legal;
