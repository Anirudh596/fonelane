import React from "react";
import { Img } from "@material-tailwind/react";

function About() {
  return (
    <div className="custom-w min-h-screen">
      <img
        className="h-96 w-full rounded-lg object-cover object-center mt-5"
        src="./images/aboutban.jpg.jpg"
        alt="nature image"
      />

      <div className=" grid grid-cols-2 mt-12 ">
        <div className=" w-[400px]">
          <h1 className=" text-3xl font-extrabold ">
            The brighter future we envision.{" "}
          </h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img
            className=" h-96 w-96 rounded-lg object-cover object-center mt-5"
            src="./images/about1.png"
            alt="nature image"
          />
        </div>
      </div>

      <div className=" grid grid-cols-2">
        <div className="flex justify-start items-center">
          <img
            className=" h-96 w-96 rounded-lg object-cover object-center mt-5"
            src="./images/about2.png"
            alt="nature image"
          />
        </div>
        <div className=" w-[400px] ">
          <h2 className=" text-3xl font-extrabold "> Refurbeished Tech.</h2>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>
        </div>
      </div>

      <div className=" grid grid-cols-2 mt-10">
        <div className=" w-[400px]">
          <h2 className=" text-3xl font-extrabold ">Affordable and greener. </h2>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img
            className=" h-96 w-96 rounded-lg object-cover object-center mt-5"
            src="./images/about3.png"
            alt="nature image"
          />
        </div>
      </div>

<div>
  
</div>
      <div>

      </div>
    </div>
  );
}

export default About;
