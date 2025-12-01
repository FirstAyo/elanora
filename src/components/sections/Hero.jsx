import React from "react";
import Container from "../ui/Container";
import Button from "../layout/Button";

function Hero({ title, description, bgColor, image }) {
  return (
    <>
      <Container>
        <div className={`grid grid-cols-2 pl-6 h-[550px] ${bgColor}`}>
          <div className="flex flex-col justify-center gap-3">
            <h2 className="text-3xl">{title}</h2>
            <p className="text-5xl font-semibold">{description}</p>
            <Button title="Explore Now" bgColor="bg-black text-white" />
          </div>
          <div>
            <img src={image} alt="Hero Image" className="h-full w-full object-cover" />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Hero;
