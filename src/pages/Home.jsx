import React, { useState, useEffect } from "react";
import Container from "../components/ui/Container";
import Hero from "../components/sections/Hero";
import CategoryCard from "../components/sections-cards/CategoryCard";
import women from "/images/women-1.jpg";
import watches from "/images/watches.jpg";
import footwear from "/images/footwear.jpg";
import accessories from "/images/accessories.jpg";
import Trending from "../components/sections/Trending";
import LookBook from "../components/sections/LookBook";
import BestSellers from "../components/sections/BestSellers";
import Blog from "../components/sections/Blog";

// Static slide data for the hero section
// (kept outside the component so it's not recreated on every render)
const heroSlides = [
  {
    title: "New Season",
    description: "Lookbook Collection",
    bgColor: "bg-[#fce800]",
    // If you're using Vite/CRA and the images are in /public/images,
    // you normally reference them as "/images/image-1.jpg" (no /public).
    image: "/images/image-1.jpg",
  },
  {
    title: "Summer 2025",
    description: "New Arrival Collection",
    bgColor: "bg-[#6a6b66]",
    image: "/images/image-2.jpg",
  },
  {
    title: "Summer Sale",
    description: "Save up to 70%",
    bgColor: "bg-[#c99c65]",
    image: "/images/image-3.jpg",
  },
];

// const cardImages = [
//   { name: "women", image: "/images/women.jpg" },
//   { name: "watches", image: "/images/watches.jpg" },
//   { name: "footwear", image: "/images/footwear.jpg" },
//   { name: "accessories", image: "/images/accessories.jpg" },
// ];

function Home() {
  // Track which slide is currently visible (0, 1, 2, ...)
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance the slide every 4 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 10000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array = run once on mount

  return (
    <>
      <Container>
        {/* Wrapper for the hero slider */}
        <div className="relative">
          {/* Key forces React to treat each slide as a distinct element,
              which helps with transitions */}
          <div
            key={currentSlide}
            className="transition-all duration-700 ease-out"
          >
            <Hero
              title={heroSlides[currentSlide].title}
              description={heroSlides[currentSlide].description}
              bgColor={heroSlides[currentSlide].bgColor}
              image={heroSlides[currentSlide].image}
            />
          </div>

          {/* Slider dots / pagination indicators */}
          <div className="mt-4 flex items-center justify-center gap-2 pb-2">
            {heroSlides.map((_, index) => {
              const isActive = index === currentSlide;

              return (
                <button
                  key={index}
                  type="button"
                  // Allow clicking a dot to jump to that slide
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-4 w-4 rounded-full border transform transition-all duration-300
                    ${
                      isActive
                        ? ` border-gray-300 scale-110 opacity-100 ${heroSlides[currentSlide].bgColor}`
                        : "border-black/40 opacity-40 hover:opacity-70"
                    }`}
                />
              );
            })}
          </div>

          <div className="grid grid-cols-2 gap-10 px-14 my-10">
            {/* Left big card */}
            <CategoryCard
              images={women}
              title="Women"
              className="aspect-4/5" // or aspect-[16/9], tweak as you like
            />

            {/* Right side grid */}
            <div className="aspect-4/5">
              <div className="grid grid-cols-2 grid-rows-2 gap-10 h-full">
                {/* Top-left (half height) */}
                <CategoryCard
                  images={accessories}
                  title="Accessories"
                  className="h-full"
                />

                {/* Right column spanning both rows (full height) */}
                <CategoryCard
                  images={watches}
                  title="Watches"
                  className="row-span-2 h-full"
                />

                {/* Bottom-left (half height) */}
                <CategoryCard
                  images={footwear}
                  title="Footwear"
                  className="h-full"
                />
              </div>
            </div>
          </div>

          <div className="px-14 flex flex-col gap-10">
            <Trending />
            <LookBook />
            <BestSellers />
            <Blog />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;
