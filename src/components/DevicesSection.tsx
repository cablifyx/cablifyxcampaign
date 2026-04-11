import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import deviceHub from "@/assets/device-hub.png";
import deviceTv from "@/assets/device-tv.png";
import deviceRemote from "@/assets/device-remote.png";
import deviceRouter from "@/assets/device-router.png";

const devices = [
  {
    name: "Entertainment Hub",
    description: "Advanced set-top box with recording capabilities",
    feature: "HD/4K Compatible",
    image: deviceHub,
  },
  {
    name: "Premium Display",
    description: "High-definition viewing experience",
    feature: "Multiple Inputs",
    image: deviceTv,
  },
  {
    name: "Universal Remote",
    description: "Simple control for all your entertainment devices",
    feature: "Easy Navigation",
    image: deviceRemote,
  },
  {
    name: "WiFi Router",
    description: "High-speed connectivity for your entire home",
    feature: "Extended Range",
    image: deviceRouter,
  },
];

const DevicesSection = () => {
  const navigate = useNavigate();

  return (
    <section id="devices" className="py-24 bg-section/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Equipment <span className="text-gradient">& Hardware</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional-grade equipment included with most provider packages
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {devices.map((device, index) => (
            <motion.div
              key={device.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="device-card group"
            >
              <div className="relative h-48 mb-6 overflow-hidden rounded-xl">
                <motion.img
                  src={device.image}
                  alt={device.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                
                {/* Glow border on hover */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-accent/50 transition-colors duration-500" />
              </div>

              <div className="space-y-3">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
                  {device.feature}
                </span>
                <h3 className="text-xl font-bold font-display text-foreground group-hover:text-gradient transition-all">
                  {device.name}
                </h3>
                <p className="text-muted-foreground text-sm">{device.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevicesSection;
