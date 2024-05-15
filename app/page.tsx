import Image from "next/image";
import Navbar from "./components/shared/Navbar";
import { Hero } from "./components/Hero";
import Footer from "./components/shared/Footer";



export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}
