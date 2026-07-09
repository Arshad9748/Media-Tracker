import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-white font-jakarta py-20'>
      <div className='grid grid-cols-12 gap-12 max-w-5xl mx-auto px-6'>
      <div className='col-span-5'><h2 className='font-medium'>Wilhelm Tracker</h2>
      <p className="text-neutral-400 text-xs mt-2">
          Track anything</p>
      </div>
      <div className='col-span-7  flex justify-between gap-4 '>
      <div className='text-neutral-400 text-xs'>
        <h3 className='uppercase mb-4 tracking-widest'>Community</h3>
        <ul className='space-y-2'>
        <li>Discord</li>
        </ul>
      </div>
      <div className='text-neutral-400 text-xs'>
        <h3 className='uppercase mb-4 tracking-widest '>Privacy</h3>
        <ul className='space-y-2'>
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
        </ul>
      </div>
      <div className='text-neutral-400 text-xs'>
        <h3 className='uppercase mb-4 tracking-widest '>Company</h3>
        <ul className='space-y-2'>
        <li>About</li>
        </ul>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Footer