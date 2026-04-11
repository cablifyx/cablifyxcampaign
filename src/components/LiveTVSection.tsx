import { motion } from "framer-motion";
import { Tv, Radio, Globe, Smartphone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import liveTvDemo from "@/assets/live-tv-demo.mp4";

const LiveTVSection = () => {
  const navigate = useNavigate();
  
  const channels = [
    { name: "Sports", color: "from-green-500 to-emerald-600" },
    { name: "News", color: "from-blue-500 to-cyan-500" },
    { name: "Movies", color: "from-purple-500 to-pink-500" },
    { name: "Kids", color: "from-yellow-400 to-orange-500" },
    { name: "Music", color: "from-rose-500 to-red-600" },
    { name: "Lifestyle", color: "from-teal-400 to-cyan-500" },
  ];

  return (
    <section id="livetv" className="py-24 bg-section/50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              Cable & <span className="text-gradient">Internet Bundles</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Discover comprehensive bundles that combine high-speed internet with extensive 
              channel lineups. Our provider partners offer flexible packages tailored to your 
              viewing habits and budget.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: Tv, text: "Extensive Channel Options" },
                { icon: Radio, text: "Flexible Bundle Packages" },
                { icon: Globe, text: "Nationwide Coverage" },
                { icon: Smartphone, text: "Mobile Access Included" },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 glass-card p-4 rounded-xl"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/services#tv-plans')}
              className="btn-gradient text-lg"
            >
              <span className="relative z-10">Explore Live TV Options</span>
            </motion.button>
          </motion.div>

          {/* Right Content - TV Mockup with Video */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* TV Frame */}
            <div className="relative glass-card p-4 rounded-3xl glow-primary">
              <div className="aspect-video rounded-2xl overflow-hidden relative">
                {/* Video Content */}
                <video
                  src={liveTvDemo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                
                {/* Black overlay */}
                <div className="absolute inset-0 bg-black/70 pointer-events-none" />
              </div>
            </div>

            {/* Floating Channel Tiles */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 space-y-3 hidden lg:block">
              {channels.slice(0, 3).map((channel, index) => (
                <motion.div
                  key={channel.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  animate={{ y: [0, -5, 0] }}
                  style={{ animationDelay: `${index * 0.5}s` }}
                  className="glass-card px-4 py-2 rounded-xl"
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${channel.color}`} />
                    <span className="text-sm font-medium text-foreground">{channel.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="absolute -left-4 top-1/3 space-y-3 hidden lg:block">
              {channels.slice(3).map((channel, index) => (
                <motion.div
                  key={channel.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  animate={{ y: [0, 5, 0] }}
                  style={{ animationDelay: `${index * 0.7}s` }}
                  className="glass-card px-4 py-2 rounded-xl"
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${channel.color}`} />
                    <span className="text-sm font-medium text-foreground">{channel.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LiveTVSection;
