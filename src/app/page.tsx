import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { ProductsCard } from "./components/ProductsCard";
import { Footer } from "./components/Footer";

export default function Home() {
  return (

    <>
      <Navbar />
      <Banner />
      <main>
        
        <ProductsCard />
      </main>
      <Footer />
    </>

  );
}
