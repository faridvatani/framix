import { Banner } from "./Banner";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header className="sticky top-0">
      <Banner />
      <Navbar />
    </header>
  );
};
