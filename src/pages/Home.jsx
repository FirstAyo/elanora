import React from "react";
import Container from "../components/ui/Container";
import Hero from "../components/sections/Hero";

function Home() {
  return (
    <>
      <Container>
        <Hero
          title="New Season"
          description="Lookbook Collection"
          bgColor="bg-gray-200"
        />
        <Hero
          title="Summer 2025"
          description="New Arrival Collection"
          bgColor="bg-red-100/20"
        />
        <Hero
          title="Summer Sale"
          description="Save up to 70%"
          bgColor="bg-blue-100"
        />
      </Container>
    </>
  );
}

export default Home;
