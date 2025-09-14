import React from 'react'

const HowItWorks = () => {
  return (
    <div className='flex flex-col items-center gap-4 max-h-screen'>
      <h2 className='text-2xl font-bold'>How it Works</h2>
      <div className='flex flex-col gap-2 w-3/4 justify-center items-center px-4 py-8'>
        <div className='flex h-[15rem] gap-8 justify-center items-center overflow-hidden'>
          <img src="/image/image-4.jpg" alt="How it works" className="mx-auto m-8 object-bottom w-1/2 rounded-lg" />
          <p>With every creators fee, we will use the fees to rebuild the school, and provide the students with educational materials and support.</p>
        </div>
        <div className='flex h-[15rem] gap-8 justify-center items-center overflow-hidden'>

          <p>Everything and all efforts to rebuild the school will be done live on stream. We will be visiting the school everyday to live stream the rebuilding process and also to see how these kids learn daily. Join us on a journey into the lives of kids in Rumuodogo Community School.</p>
          <img src="/image/image-3.jpg" alt="How it works" className="mx-auto m-8 object-bottom w-1/2 rounded-lg" />
        </div>
      </div>      
    </div>
  )
}

export default HowItWorks