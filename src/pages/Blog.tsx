import { motion } from "framer-motion";
import { BookOpen, Clock, ArrowRight, Search, Tag } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import blogHero from "@/assets/blog-hero.jpg";
import categoryMovies from "@/assets/category-movies.jpg";
import categorySports from "@/assets/category-sports.jpg";
import categoryNews from "@/assets/category-news.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Ultimate Guide to Streaming in 4K: What You Need to Know",
    excerpt: "Discover everything about 4K streaming, from internet speed requirements to compatible devices and content availability.",
    image: categoryMovies,
    category: "Streaming Guides",
    readTime: "8 min read",
    date: "Jan 5, 2026",
  },
  {
    id: 2,
    title: "How to Choose the Right Internet Speed for Your Home",
    excerpt: "Learn how to determine the perfect internet speed based on your household's streaming, gaming, and work-from-home needs.",
    image: categoryNews,
    category: "Internet Tips",
    readTime: "6 min read",
    date: "Jan 3, 2026",
  },
  {
    id: 3,
    title: "Live Sports Streaming: Never Miss a Game Again",
    excerpt: "A comprehensive guide to streaming live sports, including the best services and tips for avoiding blackouts.",
    image: categorySports,
    category: "Live TV",
    readTime: "7 min read",
    date: "Dec 28, 2025",
  },
  {
    id: 4,
    title: "Setting Up Your Home Network for Optimal Streaming",
    excerpt: "Expert tips on configuring your router, reducing buffering, and ensuring smooth streaming throughout your home.",
    image: blogHero,
    category: "Tech Tips",
    readTime: "10 min read",
    date: "Dec 22, 2025",
  },
  {
    id: 5,
    title: "Bundle vs. Standalone Services: What Saves You More?",
    excerpt: "A detailed comparison of bundled services versus individual subscriptions to help you make the best financial decision.",
    image: categoryMovies,
    category: "Money Saving",
    readTime: "5 min read",
    date: "Dec 18, 2025",
  },
  {
    id: 6,
    title: "Parental Controls: Keeping Your Kids Safe While Streaming",
    excerpt: "Learn how to set up parental controls across different devices and streaming platforms for a family-friendly experience.",
    image: categoryNews,
    category: "Family",
    readTime: "6 min read",
    date: "Dec 15, 2025",
  },
];

const categories = ["All", "Streaming Guides", "Internet Tips", "Live TV", "Tech Tips", "Money Saving", "Family"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="parallax-bg" />
      <Navigation />

      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={blogHero} alt="Blog" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="w-16 h-16 mx-auto mb-6 glass-card rounded-full flex items-center justify-center glow-primary">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
                Blog & <span className="text-gradient">Resources</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Tips, guides, and insights to enhance your streaming experience
              </p>
            </motion.div>
          </div>
        </section>

       

        {/* Blog Posts Grid */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <Link key={post.id} to={`/blog/${post.id}`}>
                  <motion.article
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="glass-card rounded-2xl overflow-hidden group cursor-pointer h-full"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                      <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-primary/90 text-white rounded-full flex items-center gap-1">
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold font-display mb-3 group-hover:text-gradient transition-all line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <motion.span
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-primary font-medium text-sm"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </motion.span>
                    </div>
                  </motion.article>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
