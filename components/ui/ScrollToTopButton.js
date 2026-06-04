"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Icons } from "../shared/Icons.js";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.25 }}
          aria-label="Back to top"
          className="
            fixed bottom-6 right-6 z-50

            flex items-center justify-center

            h-12 w-12 md:h-14 md:w-14

            rounded-full

            bg-slate-900/80
            backdrop-blur-xl

            border border-cyan-400/20

            text-cyan-300

            shadow-[0_10px_40px_rgba(34,211,238,0.15)]

            transition-all duration-300

            hover:scale-110
            hover:border-cyan-400/40
            hover:bg-slate-900

            active:scale-95

            focus:outline-none
            focus:ring-2
            focus:ring-cyan-400/40
          "
        >
          <Icons.ArrowUp className="h-5 w-5 md:h-6 md:w-6 text-cyan-300" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
