import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ctaBackground from "@/assets/cta-background.jpg";

const FinalCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={ctaBackground} 
          alt="Streaming background" 
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>
      
      {/* Animated Glow Orbs */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/20 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-20 h-20 mx-auto mb-8 glass-card rounded-full flex items-center justify-center glow-accent"
          >
            <Play className="w-8 h-8 text-accent ml-1" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
            Ready to Find
            <br />
            <span className="text-gradient">Your Perfect Plan?</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-10">
            Let our experts help you compare providers and secure the best deal. 
            Free consultation, no obligations—just honest advice.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/services')}
              className="btn-gradient text-lg px-10 py-5 flex items-center justify-center gap-3 animate-glow-pulse"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Play className="w-5 h-5" />
                View Service Options
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.href = 'tel:+18332250503'}
              className="glass-card px-10 py-5 rounded-xl font-semibold text-foreground flex items-center justify-center gap-2"
            >
              Talk to an Expert
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
