// src/pages/Home.tsx

import CategorySection from "@/components/Categories";
import LatestBooksCarousel from "@/components/LatestBooksCarousel";
import { Button } from "@/components/ui/button";
// import { Link } from "react-router";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero Section */}

      <section
        className="relative w-full min-h-[420px] md:min-h-[500px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center w-full max-w-6xl mx-auto px-6 py-10 md:py-0">
          {/* Book Cover */}
          <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-12"></div>
          {/* Headline & CTA */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="text-base font-semibold text-[#f3d6a5] mb-2 tracking-wide">
              Sunlight Publishing
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-white drop-shadow">
              Introducing “Among the Pines”
            </h1>
            <div className="text-lg text-white/90 mb-6 font-medium drop-shadow">
              A heartfelt journey of courage, friendship, and new beginnings by
              Riley Monroe.
            </div>
            <Button
              asChild
              size="lg"
              className="bg-white/90 hover:bg-[#f3d6a5] text-[#2d2d2d] font-semibold px-8 py-3 rounded shadow transition"
            >
              <a href="/books">Browse All Books</a>
            </Button>
          </div>
        </div>
      </section>

      <CategorySection></CategorySection>
      <LatestBooksCarousel></LatestBooksCarousel>
      <section className="flex flex-col md:flex-row items-center justify-center px-6 py-16 bg-[#f6e9dc]">
        {/* Book Cover */}
        <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-12">
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80"
            alt="Featured Book: The Art of Quiet Mornings"
            className="w-64 h-96 object-cover rounded-lg shadow-lg border"
          />
        </div>
        {/* Book Info */}
        <div className="max-w-xl">
          <div className="text-lg font-semibold text-[#c97c33] mb-2">
            Emma L. Carter
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-[#2d2d2d]">
            The Art of Quiet Mornings
          </h2>
          <div className="italic text-[#6c5c4c] mb-4">
            Embracing Stillness in a Busy World
          </div>
          <p className="text-base text-[#6c5c4c] mb-6 leading-relaxed">
            Discover how peaceful mornings can transform your day. This
            inspiring book offers gentle routines, mindful reflections, and
            practical tips to help you start each morning with clarity and calm.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-[#2d2d2d] hover:bg-[#c97c33] text-white font-semibold px-8 py-3 rounded shadow"
          >
            <a href="/">READ MORE</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
