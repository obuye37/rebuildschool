"use client";

import { Typography } from "@material-tailwind/react";

export function AboutEvent() {
  return (
    <section className="flex flex-col items-center bg-gray-100 md:px-40 md:py-[10rem] px-8 py-16 about-pattern">
      <div  className="text-center mb-2 text-gray-800 text-2xl text-green-500 font-bold" >
        Our Mission
      </div>
      <div className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-700 text-xl md:px-[8rem]" >
        Our mission is to bring quality education to kids in Rumuodogo community school by helping to rebuild the school and supporting the students with educational supplies.
      </div>
    </section>
  );
}

export default AboutEvent;
