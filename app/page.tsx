import Image from "next/image";
import Navbar from "./components/shared/Navbar";
import { Hero } from "./components/Hero";
import Footer from "./components/shared/Footer";



export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
        <Footer />
      </div>
    </>
  );
}
