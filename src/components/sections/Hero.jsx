import React from "react";
import Container from "../ui/Container";
// If you want to keep using your Button component, you can swap it in below.

function Hero({
  eyebrow = "New Drop",
  title = "Spring / Summer ‘25",
  subtitle = "Essential pieces for a modern wardrobe.",
  image,
}) {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Soft accent glow */}
      <div
        className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-amber-300/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[-6rem] bottom-[-4rem] h-80 w-80 rounded-full bg-rose-400/25 blur-3xl"
        aria-hidden="true"
      />

      <Container>
        <div className="relative grid items-center gap-5 py-14 sm:py-16 lg:py-20 px-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          {/* TEXT COLUMN */}
          <div className="space-y-7 text-center lg:text-left">
            {/* Eyebrow / tag */}
            <div className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]">
              {eyebrow}
            </div>

            {/* Main title + subtitle */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
                {title}
              </h1>
              <p className="mx-auto max-w-md text-sm sm:text-base text-slate-200/85 lg:mx-0">
                {subtitle}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              {/* Primary CTA */}
              <button className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-black/30 transition-transform duration-200 hover:-translate-y-0.5">
                Explore Collection
              </button>

              {/* Secondary CTA */}
              <button className="text-sm font-semibold text-slate-100 underline-offset-4 hover:underline">
                View Lookbook
              </button>
            </div>

            {/* Trust / stats row */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs sm:text-sm text-slate-200/80 lg:justify-start">
              <div>
                <p className="font-semibold text-white">Free shipping</p>
                <p>On orders over $99</p>
              </div>
              <div>
                <p className="font-semibold text-white">30-day returns</p>
                <p>Hassle-free process</p>
              </div>
              <div>
                <p className="font-semibold text-white">4.8 / 5</p>
                <p>From 2,300+ reviews</p>
              </div>
            </div>
          </div>

          {/* IMAGE COLUMN */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full">
              {/* Glassy card frame */}
              <div className="absolute inset-0 -z-10 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10" />

              <div className="overflow-hidden rounded-xl">
                <img
                  src={image}
                  alt="Hero"
                  className="h-80 w-full object-cover sm:h-[380px] lg:h-[420px] transition-transform duration-700 ease-out hover:scale-105"
                />
              </div>

              {/* Floating label at bottom of card */}
              <div className="absolute -bottom-4 left-1/2 flex w-[80%] -translate-x-1/2 items-center justify-between rounded-full bg-white px-4 py-2 text-xs sm:text-sm text-slate-900 shadow-xl">
                <span className="font-semibold">Curated Essentials</span>
                <span className="text-slate-500">24 styles</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
