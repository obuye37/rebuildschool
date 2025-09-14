"use client";

import { Typography } from "@material-tailwind/react";

export function AboutEvent() {
  return (
    <section className="flex flex-col items-center bg-gray-100 sm:px-40 sm:py-[10rem] px-8 py-16 about-pattern">
      <div  className="text-center mb-2 text-gray-800 text-2xl" >
        Our Mission
      </div>
      <div className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-700 text-xl px-[8rem]" >
        Our mission is to bring quality education to kids in Rumuodogo community school by helping to rebuild the school and supporting the students with educational supplies.
      </div>
      {/*<div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
         <div>
          <AboutCard
            title="Networking!"
            subTitle="Community"
            description="Connect with industry leaders, AI experts, and fellow enthusiasts to build valuable professional relationships."
          />
        </div> 
      </div>*/}
    </section>
  );
}

export default AboutEvent;
