import { motion } from "framer-motion";
import { Download, MouseIcon } from "lucide-react";
import { FaWhatsapp, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

const HeroSection = () => {
  const socialLink = [
    { icon: FaGithub, href: "https://github.com/Dev-ali94" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/ali-imran-60b089376" },
    { icon: FaInstagram, href: "https://www.instagram.com/ali_imran_2007?igsh=d2pieXJzdDYzeHg3" },
    { icon: FaWhatsapp, href: "https://wa.me/923924704692" },
  ]
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-4 md:px-0"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-primary font-mono text-sm md:text-base mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="gradient-text glow-text">ALI IMRAN SHEIKH</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Full-Stack Developer building scalable web applications with modern technologies, focused on clean code and performance.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            <motion.a
              href="#"
              className="px-8 py-3 glass glass-hover rounded-full font-medium flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} /> Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {socialLink.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="p-3 glass glass-hover rounded-full text-muted-foreground hover:text-primary"
                whileHover={{ y: -5, scale: 1.1 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute -bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, y: { repeat: Infinity, duration: 2 } }}
        >
          <MouseIcon className="text-muted-foreground" size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;