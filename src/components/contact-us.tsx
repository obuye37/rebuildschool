import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <div className='bg-green-950 text-gray-100 flex flex-col justify-center items-center text-center p-8 gap-4'>
      <p className='w-full text-center text-2xl p-5'>Contact Us:</p>
      <p>X:  <Link href="https://x.com/Rebuild_School">https://x.com/Rebuild_School</Link></p>
      <p> <span className='font-bold text-green-500'>REBUILD</span> is live every day  on <span className='font-bold'>PUMPFUN</span> stream.</p>
    </div>
  )
}

export default Contact