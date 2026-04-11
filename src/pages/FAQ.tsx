import { motion } from "framer-motion";
import { HelpCircle, Phone, Mail, MessageSquare } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What is Sathubfix?",
        answer: "Sathubfix is an independent authorized dealer that helps connect customers with premium streaming and entertainment services. We are not the service provider but work to simplify your path to seamless entertainment."
      },
      {
        question: "How do I sign up for services?",
        answer: "You can sign up by contacting our team through our contact form, calling our customer service line at (833) 225-0503, or selecting a plan from our Services page. Our representatives will guide you through the entire process."
      },
      {
        question: "Is Sathubfix the service provider?",
        answer: "No, Sathubfix operates as an independent authorized dealer. We connect customers with service providers but are not the service provider ourselves. All services are provided by third-party companies."
      },
    ]
  },
  {
    category: "Internet & Streaming",
    questions: [
      {
        question: "What internet speeds do I need for streaming?",
        answer: "For HD streaming, we recommend at least 25 Mbps. For 4K streaming, 50 Mbps or higher is recommended. For multiple devices streaming simultaneously, consider 100 Mbps or more."
      },
      {
        question: "Can I stream on multiple devices?",
        answer: "Yes! Most streaming services allow multiple simultaneous streams. The exact number depends on your service provider and plan. We recommend higher internet speeds for multiple devices."
      },
      {
        question: "Do I need special equipment for streaming?",
        answer: "You'll need a compatible device (Smart TV, streaming device, smartphone, tablet, or computer) and a stable internet connection. Some services may provide additional equipment or apps."
      },
    ]
  },
  {
    category: "Plans & Pricing",
    questions: [
      {
        question: "Can I bundle my services?",
        answer: "Yes! We offer various bundle options that combine internet, TV, and streaming services at discounted rates. Visit our Services page to see available bundles and save more."
      },
      {
        question: "Are prices guaranteed?",
        answer: "Pricing may vary by location and is subject to change. We strive to provide accurate pricing information, but final prices are determined by the service provider at the time of activation."
      },
      {
        question: "Is there a contract required?",
        answer: "Contract requirements vary by service provider and plan. Some plans offer no-contract options, while others may require a commitment. Our representatives will explain all terms and conditions before you sign up."
      },
      {
        question: "What payment methods do you accept?",
        answer: "Payment methods vary by service provider. Most accept major credit cards, debit cards, and bank transfers. Specific payment options will be confirmed during the sign-up process."
      },
    ]
  },
  {
    category: "Support & Technical",
    questions: [
      {
        question: "How do I contact customer support?",
        answer: "You can reach our customer support team via phone at (833) 225-0503, email at support@sathubfix.com, or through our online contact form. We're here to help!"
      },
      {
        question: "What are your support hours?",
        answer: "Our customer support team is available 24/7 to assist you with any questions or technical issues you may encounter."
      },
      {
        question: "What if I experience technical issues?",
        answer: "Contact our support team immediately. We'll help troubleshoot the issue and connect you with the service provider's technical support if needed."
      },
      {
        question: "Can I change my plan after signing up?",
        answer: "Plan changes depend on your service provider's policies. Contact our support team, and we'll help you explore available options and guide you through any changes."
      },
    ]
  },
  {
    category: "Service & Installation",
    questions: [
      {
        question: "How long does installation take?",
        answer: "Installation timeframes vary by service provider and location. Typically, installation can be scheduled within a few days to a week. Our team will coordinate with you to find a convenient time."
      },
      {
        question: "Is professional installation required?",
        answer: "Some services offer self-installation kits, while others require professional installation. This depends on the service type and provider. We'll inform you of requirements during the sign-up process."
      },
      {
        question: "What happens if service is unavailable in my area?",
        answer: "Service availability varies by location. If your preferred service isn't available, our team can recommend alternative options that serve your area."
      },
    ]
  },
];

const FAQ = () => {
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
                className="w-20 h-20 mx-auto mb-6 glass-card rounded-full flex items-center justify-center glow-accent"
              >
                <HelpCircle className="w-10 h-10 text-accent" />
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Find quick answers to common questions about our services, plans, and support.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-12">
              {faqs.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="glass-card p-8 md:p-12 rounded-3xl"
                >
                  <h2 className="text-2xl md:text-3xl font-bold font-display mb-8 flex items-center gap-3">
                    <span className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></span>
                    {category.category}
                  </h2>

                  <div className="space-y-6">
                    {category.questions.map((faq, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="border-l-2 border-primary/30 pl-6 py-2"
                      >
                        <h3 className="text-lg font-semibold text-foreground mb-3 flex items-start gap-2">
                          <HelpCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          {faq.question}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions CTA */}
        <section className="py-20 bg-section/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-3xl text-center"
            >
              <MessageSquare className="w-16 h-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Still Have <span className="text-gradient">Questions?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our support team is here to help!
              </p>

              <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
                <a
                  href="tel:+18332250503"
                  className="glass-card p-6 rounded-xl hover:scale-105 transition-transform"
                >
                  <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="font-semibold text-foreground mb-1">Call Us</p>
                  <p className="text-sm text-muted-foreground">(833) 225-0503</p>
                </a>
                <a
                  href="mailto:support@sathubfix.com"
                  className="glass-card p-6 rounded-xl hover:scale-105 transition-transform"
                >
                  <Mail className="w-8 h-8 text-accent mx-auto mb-3" />
                  <p className="font-semibold text-foreground mb-1">Email Us</p>
                  <p className="text-sm text-muted-foreground">support@sathubfix.com</p>
                </a>
              </div>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="btn-gradient inline-flex items-center gap-2"
              >
                <span className="relative z-10">Contact Support</span>
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
