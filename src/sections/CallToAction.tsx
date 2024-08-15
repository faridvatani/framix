"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import EmojiStarImage from "@/assets/images/emojistar.png";
import HelicImage from "@/assets/images/helix2.png";

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // useEffect(() => {
  //   scrollYProgress.on("change", (value) => console.log("value", value));
  // }, []);

  const translateY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={containerRef}
      className="bg-black text-white py-[72px] sm:py-24"
    >
      <div className="container max-w-xl relative">
        <motion.div
          style={{
            translateY,
          }}
        >
          <Image
            src={HelicImage}
            alt="vector 1"
            className="absolute top-6 left-[calc(100%+36px)]"
          />
        </motion.div>
        <motion.div
          style={{
            translateY,
          }}
        >
          <Image
            src={EmojiStarImage}
            alt="vector 2"
            className="absolute -top-[120px] right-[calc(100%+24px)]"
          />
        </motion.div>
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Get instant access
        </h2>
        <p className="text-xl text-center text-white/70 mt-5">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input
            type="email"
            placeholder="your@email.com"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"
          />
          <button
            type="button"
            className="bg-white text-black h-12 px-5 rounded-lg"
          >
            Get access
          </button>
        </form>
      </div>
    </section>
  );
};
