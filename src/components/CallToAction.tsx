import HelicImage from "@/assets/images/helix2.png";
import EmojiStarImage from "@/assets/images/emojistar.png";
import Image from "next/image";

export const CallToAction = () => {
  return (
    <section className="bg-black text-white py-[72px] sm:py-24">
      <div className="container max-w-xl relative">
        <Image
          src={HelicImage}
          alt="vector 1"
          className="absolute top-6 left-[calc(100%+36px)]"
        />
        <Image
          src={EmojiStarImage}
          alt="vector 2"
          className="absolute -top-[120px] right-[calc(100%+24px)]"
        />
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Get instant access
        </h2>
        <p className="text-center mt-5 text-xl text-white/70">
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
