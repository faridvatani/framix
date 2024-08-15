import { Banner } from "@/sections/Banner";
import { Navbar } from "@/sections/Navbar";

export const Header = () => {
  return (
    <>
      <Banner />
      <header className="sticky top-0 backdrop-blur-md z-50">
        <Navbar />
      </header>
    </>
  );
};
