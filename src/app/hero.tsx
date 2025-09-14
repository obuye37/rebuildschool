"use client";

function Hero() {
  return (
    <div className="relative md:flex md:min-h-screen w-full h-full md:bg-green-500 overflow-hidden justify-center items-center ">
      <div className="md:h-screen w-full md:w-[45%] flex flex-col justify-center items-center m-auto text-center md:p-8 py-4">
        <img src="/logos/logo.jpg" alt="Rebuild School logo" className=" h-14 w-14 md:h-[6rem] md:w-[6rem] rounded-full md:mb-10 mb-4" />
        <p className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 righteous-regular">
          Every Child Deserves Quality Education 
        </p>
        <p className="text-xl md:text-2xl text-gray-800 hidden md:block">
          Rebuild Turns creators fees into hope and a brighter future for kids learning in dilapidated school in Nigeria.
        </p>
          
      </div>

      <div className="h-screen w-full md:w-[60%] clipped-img">
        <video className="md:h-screen w-full h-[20rem] object-cover" controls autoPlay muted>
          <source src="/video/school-vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    
    {/*  */}
  </div>
  );
}

export default Hero;
