'use client'

import Image from "next/image";
import Navbar from "./components/shared/Navbar";
import { Hero } from "./components/Hero";
import Footer from "./components/shared/Footer";
import { useEffect } from "react";
import axios from "axios";



export default function Home() {

  

  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}
