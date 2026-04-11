 import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Play } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute t op-1/3 right-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center px-6"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="w-24 h-24 mx-auto mb-8 glass-card rounded-full flex items-center justify-center"
        >
          <Play className="w-10 h-10 text-accent" />
        </motion.div>

        <h1 className="text-8xl font-bold font-display text-gradient mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Oops! This content isn't available for streaming.
        </p>

        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="btn-gradient inline-flex items-center gap-2 text-lg"
        >
          <Home className="w-5 h-5" />
          Return to Home
        </motion.a>
      </motion.div>
    </div>
  );
};

export default NotFound;
