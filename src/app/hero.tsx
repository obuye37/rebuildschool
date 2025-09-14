"use client";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-white flex overflow-hidden justify-center items-center">
      <div className="h-full w-[45%] flex flex-col justify-center items-center m-auto text-center p-8">
        <img src="/logos/logo.jpg" alt="Rebuild School logo" className="h-[6rem] w-[6rem] rounded-full mb-10" />
        <p className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
          Rebuild School
        </p>
        <p className="text-xl md:text-2xl text-gray-800">
          Turning creators fees into hope and a brighter future for kids learning in dilapidated school in Nigeria.
        </p>
          
      </div>

      <div className="h-screen w-[60%] clipped-img">
        <video className="h-screen w-full object-cover" controls autoPlay muted>
          <source src="/video/school-vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    
    {/*  */}
  </div>
  );
}

export default Hero;
