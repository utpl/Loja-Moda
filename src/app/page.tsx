import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { ProductsCard } from "./components/ProductsCard";

export default function Home() {
  return (
    
    <>

    <Navbar />
   
    <ProductsCard />
 
    </>
  );
}
