import React from "react";
import TrendingCards from "../sections-cards/TrendingCards";
import Container from "../ui/Container";
import products from "../../data/products.json";

function Trending() {
  return (
    <>
      <Container>
        <div>
          <div className="flex justify-center items-center gap-5 lg:gap-10">
            <div className="w-16 bg-black h-0.5"></div>
            <h1 className="text-xl lg:text-3xl font-bold">Trending</h1>
            <div className="w-16 bg-black h-0.5"></div>
          </div>
          <p className="text-center text-gray-500">Top view in this week</p>
        </div>
        <TrendingCards items={products} />
      </Container>
    </>
  );
}

export default Trending;
