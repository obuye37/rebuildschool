"use client";

import { Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative max-h-screen w-full bg-white flex overflow-hidden">
      <div className="h-full w-[45%] flex flex-col justify-center items-center m-auto text-center p-8">
        <p className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
          Rebuild School
        </p>
        <p className="text-xl md:text-2xl text-gray-800">
          Turning creators fees into hope and a brighter future for kids learning in dilapidated school in Nigeria.
        </p>
          
      </div>

      <div className="h-full w-[60%] clipped-img">
        <img src="/image/image-3.jpg" alt="School" className="h-full w-full object-cover" />
      </div>
    
    {/* <video className="h-full w-full rounded-lg" controls autoPlay muted>
      <source src="/video/school-vid.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video> */}
  </div>
  );
}

export default Hero;
