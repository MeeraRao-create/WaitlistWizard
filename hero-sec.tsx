import { motion } from "framer-motion";
import WaitlistForm from "./waitlist-form";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-8 py-16">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      
      <div className="text-center max-w-4xl z-10">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight bg-gradient-to-br from-white to-indigo-100 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to the Future
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-white/90 mb-12 font-light leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          InnovateLab is revolutionizing how teams collaborate and innovate. Join thousands of forward-thinking professionals already on our waitlist.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <WaitlistForm />
        </motion.div>
      </div>
    </section>
  );
}
