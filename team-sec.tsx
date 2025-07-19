import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";

const stats = [
  { number: "10K+", label: "Waitlist Members" },
  { number: "50+", label: "Enterprise Partners" },
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "24/7", label: "Expert Support" },
];

export default function TeamSection() {
  const { data: waitlistStats } = useQuery({
    queryKey: ["/api/waitlist/stats"],
  });

  // Update the first stat with real data if available
  const updatedStats = stats.map((stat, index) => {
    if (index === 0 && waitlistStats?.data?.count) {
      return {
        ...stat,
        number: `${waitlistStats.data.count.toLocaleString()}+`,
      };
    }
    return stat;
  });

  return (
    <section className="py-32 bg-black/10 relative">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      
      <div className="max-w-5xl mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass p-16 rounded-3xl text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto mb-16 leading-relaxed">
            Our team of experts from Fortune 500 companies is building something extraordinary for the future of work.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {updatedStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 text-lg uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
