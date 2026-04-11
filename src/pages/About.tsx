import { motion } from "framer-motion";
import { Users, Target, Award, Heart, Zap, Globe } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import aboutTeam from "@/assets/about-team.jpg";

const values = [
  {
    icon: Heart,
    title: "Customer Advocacy",
    description: "We work for you, not the providers. Your satisfaction is our only metric of success.",
  },
  {
    icon: Zap,
    title: "Transparent Pricing",
    description: "No hidden fees, no surprises. We help you understand exactly what you're getting.",
  },
  {
    icon: Globe,
    title: "Wide Network",
    description: "Partnerships with multiple providers mean more options and better deals for you.",
  },
  {
    icon: Award,
    title: "Expert Guidance",
    description: "Our experienced team knows the industry inside-out and finds the perfect fit for your needs.",
  },
];

const stats = [
  { number: "50K+", label: "Connections Made" },
  { number: "15+", label: "Provider Partners" },
  { number: "4.8", label: "Average Rating" },
  { number: "24/7", label: "Expert Support" },
];

const useCountUp = (end: string, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const endNum = parseFloat(end.replace(/[^0-9.]/g, ''));
          const suffix = end.replace(/[0-9.]/g, '');
          let startTime: number | null = null;

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            setCount(Math.floor(progress * endNum));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return { count, elementRef };
};

const About = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="parallax-bg" />
      <Navigation />

      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 right-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/30 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
                  About <span className="text-gradient">Sathubfix</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  As an independent authorized dealer, we specialize in connecting customers 
                  with leading cable and internet service providers. We're not a provider—we're 
                  your trusted guide to finding and securing the best entertainment deals.
                </p>
                
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="glass-card p-4 rounded-3xl glow-primary overflow-hidden">
                  <img
                    src={aboutTeam}
                    alt="Sathubfix Customer Service Team"
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-section/50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const StatCounter = () => {
                  const { count, elementRef } = useCountUp(stat.number);
                  const numericPart = stat.number.replace(/[^0-9.]/g, '');
                  const suffix = stat.number.replace(/[0-9.]/g, '');
                  
                  return (
                    <motion.div
                      ref={elementRef}
                      key={stat.label}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-4xl md:text-5xl font-bold font-display text-gradient mb-2">
                        {stat.number === "24/7" ? stat.number : `${count}${suffix}`}
                      </div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  );
                };
                
                return <StatCounter key={stat.label} />;
              })}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="w-16 h-16 mx-auto mb-6 glass-card rounded-full flex items-center justify-center glow-accent">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
                Our <span className="text-gradient">Mission</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                To empower consumers by simplifying the complex world of cable and internet services. 
                We believe everyone deserves access to quality entertainment without the hassle of 
                navigating confusing plans and aggressive sales tactics.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-section/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
                Our <span className="text-gradient">Values</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="glass-card p-6 rounded-2xl text-center"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/20 flex items-center justify-center">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-display mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="w-16 h-16 mx-auto mb-6 glass-card rounded-full flex items-center justify-center glow-primary">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
                Meet Our <span className="text-gradient">Team</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Passionate experts dedicated to delivering the best streaming experience
              </p>
            </motion.div>

            <div className="glass-card p-8 rounded-3xl text-center max-w-2xl mx-auto">
              <p className="text-lg text-muted-foreground">
                Our dedicated team of streaming specialists, customer support professionals, 
                and technology experts work around the clock to ensure you get the best 
                entertainment experience possible. We're here to help you every step of the way.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
