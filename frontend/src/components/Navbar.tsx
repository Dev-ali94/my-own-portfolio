import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Menu, X } from "lucide-react";

const navLinks = [
  { id: "hero", name: "Home" },
  { id: "about", name: "About" },
  { id: "skills", name: "Skills" },
  { id: "projects", name: "Projects" },
  { id: "services", name: "Services" },
  { id: "contact", name: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  const sidebarRef = useRef(null);
  const mobileLinksRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      sidebarRef.current && (sidebarRef.current.style.transform = "translateX(0%)");
      mobileLinksRef.current.forEach((el, i) => {
        if (el) {
          el.style.opacity = 0;
          el.style.transform = "translateX(20px)";
          setTimeout(() => {
            el.style.transition = "all 0.4s ease-out";
            el.style.opacity = 1;
            el.style.transform = "translateX(0)";
          }, i * 100);
        }
      });
    } else {
      sidebarRef.current && (sidebarRef.current.style.transform = "translateX(100%)");
    }
  }, [isOpen]);

  const handleLinkClick = (id) => {
    setActiveLink(id);
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-4 left-0 right-0 z-50 mx-auto w-fit rounded-full px-6 py-3 transition-all duration-300 ${
          scrolled ? "bg-gray-900/70 backdrop-blur-md shadow-lg shadow-black/40" : "bg-transparent"
        } hidden md:flex`}
      >
        <div className="flex items-center justify-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={`#${link.id}`}
              className="text-sm text-gray-300 hover:text-primary transition-colors relative group"
              whileHover={{ y: -2 }}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>
      </motion.nav>

      {/* Mobile Hamburger Button */}
      <div className="fixed bottom-6 right-6 z-50 lg:hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 flex items-center justify-center rounded-full 
                     bg-primary text-white text-3xl 
                     hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/50"
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className="fixed top-0 right-0 h-screen w-[75vw] max-w-[400px] bg-background backdrop-blur-lg shadow-2xl shadow-black/60 transform translate-x-full z-50 transition-transform duration-500 flex flex-col"
      >
        {/* Topbar */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-gray-700">
          <h2 className="text-white font-bold text-2xl tracking-wide">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-2xl transition-transform hover:rotate-90 duration-300"
          >
            <X />
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 px-6 py-8">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link, index) => (
              <li key={link.id} ref={(el) => (mobileLinksRef.current[index] = el)}>
                <button
                  onClick={() => handleLinkClick(link.id)}
                  className={`flex items-center gap-4 w-full text-left text-lg font-semibold p-4 rounded-xl transition-all duration-300
                    ${
                      activeLink === link.id
                        ? "bg-primary text-gray-100"
                        : "bg-gray-800/40 text-gray-200 hover:bg-primary/80 hover:text-white"
                    }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mb-6">
          {[{ icon: Github, href: "#" }, { icon: Linkedin, href: "#" }, { icon: Instagram, href: "#" }].map(
            (social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="p-3 bg-gray-800/50 rounded-full text-gray-300 hover:text-primary hover:bg-primary/20 transition-all"
                whileHover={{ y: -5, scale: 1.1 }}
              >
                <social.icon size={20} />
              </motion.a>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
