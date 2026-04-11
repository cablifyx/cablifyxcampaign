import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Sathubfix made comparing providers so easy. They found me a better deal than I could find on my own and handled everything.",
    author: "Michael R.",
    location: "San Diego, CA",
    rating: 5,
  },
  {
    quote: "Finally, someone who actually helps you navigate all the confusing cable packages! Saved me time and money.",
    author: "Jennifer L.",
    location: "Austin, TX",
    rating: 5,
  },
  {
    quote: "Their team was knowledgeable, responsive, and took care of coordinating with the provider. Highly recommend their service.",
    author: "David K.",
    location: "Phoenix, AZ",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-section/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real experiences from customers we've helped connect
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-2xl relative group h-full flex flex-col"
            >
              {/* Quote Icon */}
              <div className="absolute top-2 left-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center z-10 shadow-lg">
                <Quote className="w-5 h-5 text-white" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 mt-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>

              <p className="text-foreground text-base mb-6 leading-relaxed flex-grow">
                "{testimonial.quote}"
              </p>

              <div className="border-t border-border/50 pt-4 mt-auto">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl border border-accent/30" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
