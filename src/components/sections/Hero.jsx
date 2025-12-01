import React from "react";
import Container from "../ui/Container";
import Button from "../layout/Button";

function Hero({ title, description, bgColor }) {
  return (
    <>
      <Container>
        <div className={`grid grid-cols-2 py-5 px-6 ${bgColor}`}>
          <div className="flex flex-col justify-center gap-3">
            <h2 className="text-3xl">{title}</h2>
            <p className="text-5xl font-semibold">{description}</p>
            <Button title="Explore Now" bgColor="bg-black text-white" />
          </div>
          <div>
            <img src="/public/images/image-1.png" alt="Hero Image" />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Hero;
