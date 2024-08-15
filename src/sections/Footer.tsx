import InstaIcon from "@/assets/icons/insta.svg";
import XSocialIcon from "@/assets/icons/x-social.svg";
import TikTokIcon from "@/assets/icons/tiktok.svg";
import YouTubeIcon from "@/assets/icons/youtube.svg";

export const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white/60 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
          <div className="text-center">
            © 2024 Your Company, Inc. All rights reserved
          </div>
          <ul className="flex justify-center gap-2.5">
            <li className="hover:text-white/80 cursor-pointer">
              <XSocialIcon />
            </li>
            <li className="hover:text-white/80 cursor-pointer">
              <InstaIcon />
            </li>
            <li className="hover:text-white/80 cursor-pointer">
              <TikTokIcon />
            </li>
            <li className="hover:text-white/80 cursor-pointer">
              <YouTubeIcon />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
