import React, { useState, useEffect } from "react";
import Container from "../components/ui/Container";
import Hero from "../components/sections/Hero";

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

function Home() {
  // Track which slide is currently visible (0, 1, 2, ...)
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance the slide every 4 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array = run once on mount

  return (
    <>
      <Container>
        {/* Wrapper for the hero slider */}
        <div className="relative overflow-hidden">
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
        </div>
      </Container>
    </>
  );
}

export default Home;
