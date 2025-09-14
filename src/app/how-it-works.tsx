import React from 'react'

const HowItWorks = () => {
  return (
    <div className='md:flex  items-center gap-4'>
      <div className='md:w-1/2 w-full overflow-hidden'>
        <img src="/image/image-4.jpg" alt="How it works" className="mx-auto object-cover w-full md:h-full h-[15rem]" /> 
      </div>
      <div className='flex-col h-full md:w-1/2 w-full justify-center items-center overflow-hidden p-10'>
        <h2 className='text-2xl md:text-4xl text-center font-bold mb-4'>Transparency & Proof of Work</h2>
        <div className='text-lg text-center'>
          <p>Everything and all efforts to rebuild the school will be done live on stream. We will be visiting the school everyday to live stream the rebuilding process and also to see how these kids learn daily. Join us on a journey into the lives of kids in Rumuodogo Community School.</p>
          <br />
          <mark className='bg-green-300'>With every creators fee, we will use the fees to rebuild the school, and provide the students with educational materials and support.</mark>
        </div>
      </div>      
    </div>
  )
}

export default HowItWorks