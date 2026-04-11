import { motion } from "framer-motion";
import { Film, Trophy, Newspaper, Baby, Sparkles, Music } from "lucide-react";
import categoryMovies from "@/assets/category-movies.jpg";
import categorySports from "@/assets/category-sports.jpg";
import categoryNews from "@/assets/category-news.jpg";
import categoryKids from "@/assets/category-kids.jpg";
import categoryPremium from "@/assets/category-premium.jpg";
import categoryMusic from "@/assets/category-music.jpg";

const categories = [
  {
    title: "Movies & Series",
    description: "Access vast libraries",
    icon: Film,
    image: categoryMovies,
  },
  {
    title: "Live Sports",
    description: "Never miss the game",
    icon: Trophy,
    image: categorySports,
  },
  {
    title: "News & Updates",
    description: "24/7 coverage",
    icon: Newspaper,
    image: categoryNews,
  },
  {
    title: "Kids Content",
    description: "Safe & educational",
    icon: Baby,
    image: categoryKids,
  },
  {
    title: "Premium Shows",
    description: "Original programming",
    icon: Sparkles,
    image: categoryPremium,
  },
  {
    title: "Music & Events",
    description: "Live performances",
    icon: Music,
    image: categoryMusic,
  },
];

// Duplicate categories for seamless loop
const duplicatedCategories = [...categories, ...categories, ...categories];

const ContentCategories = () => {
  return (
    <section id="streaming" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Entertainment <span className="text-gradient">Categories</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the variety of content available through our provider partners
          </p>
        </motion.div>

        {/* Infinite scrolling carousel */}
        <div className="relative overflow-x-auto overflow-y-visible pb-8 scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
          {/* Gradient masks for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <motion.div
            className="flex items-center gap-6 py-6"
            animate={{
              x: [0, -220 * categories.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {duplicatedCategories.map((category, index) => (
              <motion.div
                key={`${category.title}-${index}`}
                whileHover={{ scale: 1.05, y: -10 }}
                className="content-card group cursor-pointer flex-shrink-0 w-[250px] h-[300px] relative overflow-hidden rounded-2xl"
              >
                {/* Background Image */}
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl">
                  <div className="absolute inset-0 bg-accent/20 blur-xl rounded-2xl" />
                </div>
                
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  <category.icon className="w-8 h-8 text-white mb-3 drop-shadow-lg" />
                  <h3 className="text-xl font-bold text-white font-display">{category.title}</h3>
                  <p className="text-white/80 text-sm">{category.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll hint dots */}
        <div className="flex justify-center mt-8 md:hidden">
          <div className="flex gap-2">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-muted-foreground/30"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentCategories;
