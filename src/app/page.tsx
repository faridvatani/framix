import { Features } from "@/components/Features";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { ProductShowcase } from "@/components/ProductShowcase";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowcase />
    </main>
  );
}
