import { motion } from "framer-motion";
import { Rocket, Shield, Target } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Lightning Fast",
    description: "Experience unprecedented speed with our optimized algorithms and cutting-edge infrastructure designed for modern teams.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and security protocols ensure your data is always protected with industry-leading standards.",
  },
  {
    icon: Target,
    title: "AI-Powered Insights",
    description: "Leverage artificial intelligence to gain deep insights into your workflow and optimize team productivity automatically.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-32 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why InnovateLab?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            We're building the next generation of collaboration tools that will transform how your team works together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl text-center hover:bg-white/15 transition-all duration-300"
            >
              <div className="glass-dark w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <feature.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-white/80 text-lg leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
