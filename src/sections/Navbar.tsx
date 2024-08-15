import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/data/data";
import logo from "@/assets/images/logo.png";
import MenuIcon from "@/assets/icons/menu.svg";

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-4 flex justify-between items-center">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,rgb(252,_214,_255,_0.7),rgb(41,_216,_255,_0.7),rgb(255,_253,_128,_0.7),rgb(248,_154,_191,_0.7),rgb(252,_214,_255,_0.7))] blur-md"></div>
            <Image src={logo} alt="Saas logo" className="relative h-12 w-12" />
          </div>
          <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
            <MenuIcon className="text-white cursor-pointer" />
          </div>
          <nav className="hidden sm:flex gap-6 items-center">
            {navItems.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                {link.title}
              </Link>
            ))}
            <button type="button" className="bg-white py-2 px-4 rounded-lg">
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};
