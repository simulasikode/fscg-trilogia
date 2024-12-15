"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Header from "./components/Header/Index";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Customize as needed
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Important: Destroy Lenis instance on unmount
    };
  }, []);

  return (
    <main className="min-h-screen max-w-full mx-auto relative">
      <Header />
      {/* Your page content here */}
      <section className="h-[100vh] bg-blue-200 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Section 1</h1>
      </section>
      <section className="h-[100vh] bg-red-200 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Section 2</h1>
      </section>
      <section className="h-[100vh] bg-green-200 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Section 3</h1>
      </section>
      <section className="h-[100vh] bg-yellow-200 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Section 4</h1>
      </section>
    </main>
  );
}
