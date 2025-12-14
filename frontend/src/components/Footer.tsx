import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { FaWhatsapp, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
const Footer = () => {
  const socailLinks = [
    { icon: FaGithub, href: "https://github.com/Dev-ali94" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/ali-imran-60b089376" },
    { icon: FaInstagram, href: "https://www.instagram.com/ali_imran_2007?igsh=d2pieXJzdDYzeHg3" },
    { icon: FaWhatsapp, href: "https://wa.me/923924704692" },
  ]
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.a
            href="#home"
            className="text-xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            Portfolio
          </motion.a>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart size={14} className="text-primary" /> by Ali Imran Sheikh
          </p>

          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {socailLinks.map((social, index) => (
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
