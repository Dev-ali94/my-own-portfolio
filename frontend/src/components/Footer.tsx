import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Heart, MessageCircle, MessageCircleIcon, MessageCircleCodeIcon } from "lucide-react";
import { FaWhatsapp} from "react-icons/fa"
const Footer = () => {
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
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Instagram, href: "#" },
              { icon: FaWhatsapp, href: "#" },
            ].map((social, index) => (
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
