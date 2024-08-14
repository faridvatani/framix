import { Banner } from "./Banner";
import { Navbar } from "./Navbar";

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
