import React from "react";
import Container from "../components/ui/Container";
import { Link } from "react-router-dom";

function About() {
  // simple data so the layout is easy to tweak later
  const stats = [
    { label: "Happy Customers", value: "15K+" },
    { label: "Products Curated", value: "320+" },
    { label: "Countries Shipped", value: "24" },
    { label: "Return Customers", value: "68%" },
  ];

  const values = [
    {
      title: "Thoughtful Curation",
      text: "We handpick every piece with an eye for timeless silhouettes, quality fabric, and everyday wearability.",
    },
    {
      title: "Better, Not More",
      text: "Fewer impulse buys, more pieces you actually reach for. We champion slow, intentional wardrobes.",
    },
    {
      title: "Human First",
      text: "From our makers to our customers, real people are at the heart of every decision we make.",
    },
  ];

  const milestones = [
    {
      year: "2023",
      title: "The idea of Élanora",
      text: "A small sketchbook of outfit ideas and a frustration with chaotic online shopping experiences.",
    },
    {
      year: "2024",
      title: "First collection drops",
      text: "We launched our first capsule: 21 pieces that could be mixed, matched, and worn on repeat.",
    },
    {
      year: "2025",
      title: "Growing with you",
      text: "From a few early supporters to a global community, Élanora became a daily style ritual.",
    },
  ];

  const team = [
    {
      name: "Ayo",
      role: "Founder & Creative Direction",
      avatar: "/images/women.jpg", // swap with your own
      quote:
        "I wanted a store that feels like a trusted friend with great taste.",
    },
    {
      name: "Mara",
      role: "Head of Styling",
      avatar: "/images/women-1.jpg",
      quote: "Style should be effortless, not overwhelming.",
    },
    {
      name: "Leo",
      role: "Customer Experience",
      avatar: "/images/women.jpg",
      quote: "Good service is a conversation, not a ticket number.",
    },
  ];

  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-gray-100">
        {/* background image strip */}
        <div className="absolute inset-0">
          <img
            src="/images/hoodie.jpg" // add any lifestyle image here
            alt="Élanora studio"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-white/70 " />
        </div>

        <div className="relative px-4 py-14 sm:py-16 lg:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)] items-center">
              {/* Left: text */}
              <div className="space-y-5 sm:space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  About Élanora
                </p>
                <h1 className="text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                  A calmer way to shop the clothes you actually love to wear.
                </h1>
                <p className="max-w-xl text-sm text-gray-600 sm:text-base">
                  Élanora was born from a simple idea: make it easier to build a
                  wardrobe that feels like you. No endless scrolling, no loud
                  trends—just thoughtful pieces, styled in a way that fits your
                  real life.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    to="/shop"
                    className="rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-gray-900"
                  >
                    Explore the collection
                  </Link>
                  <Link
                    to="/contact"
                    className="rounded-full border border-gray-300 px-6 py-2.5 text-sm font-medium text-gray-900 transition hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                  >
                    Talk to us
                  </Link>
                </div>
              </div>

              {/* Right: stats card */}
              <div className="rounded-3xl border border-gray-100 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-7 lg:p-8">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  In numbers
                </p>
                <dl className="grid grid-cols-2 gap-5 sm:grid-cols-2">
                  {stats.map((item) => (
                    <div key={item.label} className="space-y-1">
                      <dt className="text-xs uppercase tracking-wide text-gray-500">
                        {item.label}
                      </dt>
                      <dd className="text-2xl font-semibold text-gray-900">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 text-xs text-gray-500">
                  Numbers change, but our goal stays the same: make getting
                  dressed feel effortless.
                </p>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* BRAND STORY SECTION */}
      <section className="bg-gray-50 py-12 sm:py-14 lg:py-18 px-4">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)] items-start">
            <div className="space-y-4 sm:space-y-5">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                The story behind the studio.
              </h2>
              <p className="text-sm text-gray-600 sm:text-base">
                We&apos;re designers, stylists, and serial outfit-repeaters. We
                were tired of cluttered wardrobes and shops filled with pieces
                you only wear once. So we started Élanora as a curated online
                studio—less like a department store, more like a friend with a
                really good wardrobe.
              </p>
              <p className="text-sm text-gray-600 sm:text-base">
                Every item is styled, photographed, and tested in real life
                scenarios: school runs, office days, messy brunches, surprise
                video calls. If it doesn’t feel good to move in, we don&apos;t
                sell it.
              </p>
            </div>

            {/* small media grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="col-span-2 overflow-hidden rounded-3xl">
                <img
                  src="/images/image-1.jpg"
                  alt="Moodboard in the Élanora studio"
                  className="h-52 w-full object-cover sm:h-60 lg:h-64"
                />
              </div>
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="/images/image-2.jpg"
                  alt="Fabric swatches and accessories"
                  className="h-32 w-full object-cover sm:h-40 lg:h-44"
                />
              </div>
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="/images/image-3.jpg"
                  alt="Packing orders with care"
                  className="h-32 w-full object-cover sm:h-40 lg:h-44"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* VALUES SECTION */}
      <section className="py-12 sm:py-14 lg:py-16 px-4">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                What we care about.
              </h2>
              <p className="mt-2 max-w-xl text-sm text-gray-600 sm:text-base">
                Beautiful clothes are only half the story. The other half is how
                they&apos;re made, how long they last, and how they make you
                feel when you put them on.
              </p>
            </div>
          </div>

          <div className="mt-7 grid gap-6 sm:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex flex-col gap-2 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
              >
                <h3 className="text-sm font-semibold text-gray-900">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600">{value.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* TIMELINE SECTION */}
      <section className="border-y border-gray-100 bg-gray-50 py-12 sm:py-14 lg:py-16 px-4">
        <Container>
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                A quick timeline.
              </h2>
              <p className="mt-2 max-w-xl text-sm text-gray-600 sm:text-base">
                From a single idea to a growing community of people who care
                about what they wear and why they wear it.
              </p>
            </div>
          </div>

          <ol className="relative border-l border-gray-200 pl-5 sm:pl-6">
            {milestones.map((m, index) => (
              <li key={m.year} className="mb-7 last:mb-0">
                {/* dot */}
                <div className="absolute -left-[7px] mt-1 h-3 w-3 rounded-full border border-black bg-white" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  {m.year}
                </p>
                <h3 className="mt-1 text-sm font-semibold text-gray-900 sm:text-base">
                  {m.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600">{m.text}</p>
                {index !== milestones.length - 1 && (
                  <div className="mt-4 h-px w-10 bg-gray-200 sm:w-16" />
                )}
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* TEAM SECTION */}
      <section className="py-12 sm:py-14 lg:py-16 px-4">
        <Container>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                The people behind Élanora.
              </h2>
              <p className="mt-2 max-w-xl text-sm text-gray-600 sm:text-base">
                We&apos;re a small team with a shared obsession: helping you
                open your wardrobe and feel instantly inspired.
              </p>
            </div>
          </div>

          <div className="mt-7 grid gap-6 sm:grid-cols-3">
            {team.map((person) => (
              <article
                key={person.name}
                className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm"
              >
                <div className="mb-4 h-20 w-20 overflow-hidden rounded-full bg-gray-100">
                  <img
                    src={person.avatar}
                    alt={person.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-sm font-semibold text-gray-900">
                  {person.name}
                </h3>
                <p className="text-xs text-gray-500">{person.role}</p>
                <p className="mt-3 text-xs text-gray-600">“{person.quote}”</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA STRIP */}
      <section className="border-t border-gray-100 bg-gray-50 py-10 sm:py-12 px-4">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">
                Ready to build your next favorite outfit?
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                Browse our latest arrivals or reach out for styling suggestions.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/products"
                className="rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-gray-900"
              >
                Shop products
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-gray-300 px-6 py-2.5 text-sm font-medium text-gray-900 transition hover:border-gray-900 hover:bg-gray-900 hover:text-white"
              >
                Get styling help
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default About;
