import Image from "next/image";
import { Navbar, HomeBanner, ProductsGrid, Footer } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HomeBanner />
        <ProductsGrid />
      </main>
      <Footer />
    </>
  );
}
