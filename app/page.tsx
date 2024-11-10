'use client'
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/project";
import TestimonialsSection from "@/components/Testinominals";


export default function Home() {
  return (
    <>
      <div className="bg-black w-screen h-screen text-white font-Inter absolute bg-opacity-90 pb-[200px]">
      <Navbar />
  <video
        src="/effects.mp4"
        autoPlay
        loop
        muted
        playsInline
       
        style={{
          position: 'relative',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          zIndex: -1,
          opacity: 100
          }}
      />
        
      </div>
       <div className="text-white pb-[700px]">

        <Hero />
        <Projects />
        <TestimonialsSection />
      </div>
          <Footer />
      </>
  );
}
