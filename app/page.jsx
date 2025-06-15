"use client"; 
import Image from "next/image";

import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    // Enable dark mode globally
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <main>Homepage</main>
  );
}
