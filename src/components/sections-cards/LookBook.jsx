import React from "react";
import Container from "../ui/Container";
import { Link } from "react-router-dom";
import summerImage from "/images/summer.jpg";
import imageList from "/images/image-2.jpg";

function LookBook() {
  return (
    <>
      <Container>
        <div className="grid grid-cols-2 gap-5">
          <Link className="relative group">
            <div className="relative overflow-hidden">
              <img
                src={imageList}
                alt="summer image"
                className="
        w-full h-full object-cover
        transition-transform duration-500 ease-in-out
        group-hover:rotate-12
        group-hover:scale-125
      "
              />

              <div className="uppercase absolute inset-0 flex flex-col justify-center items-center bg-black/50 text-white">
                <h4 className="text-3xl font-semibold">Lookbook 2025</h4>
                <p className="font-semibold">make love this look</p>
              </div>
            </div>
          </Link>

          <Link className=" relative group">
            <div className="relative overflow-hidden">
              <img
                src={summerImage}
                alt="summer image"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:rotate-12 group-hover:scale-125"
              />
              <div className="uppercase absolute inset-0 flex flex-col-reverse justify-center items-center bg-black/50 text-white">
                <h4 className="text-5xl font-semibold">up to 70%</h4>
                <p className="font-semibold">summer sale</p>
              </div>
            </div>
          </Link>
        </div>
      </Container>
    </>
  );
}

export default LookBook;
