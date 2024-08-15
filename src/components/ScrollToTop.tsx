"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";
import ArrowUp from "@/assets/icons/arrow-w.svg";
import { useScrollVisibility } from "@/hooks/useScrollVisibility";

const ScrollToTop: FC = () => {
  const isVisible = useScrollVisibility(300);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="flex items-center justify-center size-10 bg-white text-black rounded-full hover:bg-[#5D2CA8] hover:text-white transition-colors duration-100 delay-75"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUp className="transform -rotate-90" />
        </motion.button>
      )}
    </div>
  );
};

export default ScrollToTop;
