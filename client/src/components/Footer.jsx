import React from 'react'
import { FiGithub } from 'react-icons/fi'

const Footer = () => {
  return (
    <div className='bg-slate-900 text-white font-jakarta py-20'>
      <div className='grid grid-cols-1 md:grid-cols-12 gap-12 max-w-5xl mx-auto px-6'>

        <div className='md:col-span-5'>
          <h2 className='font-medium'>Wilhelm Tracker</h2>
          <p className='text-neutral-400 text-xs mt-2'>
            A personal media tracker for movies, anime, games, and books —
            built with React, Node, and PostgreSQL.
          </p>
        </div>

        <div className='md:col-span-7 flex flex-col sm:flex-row justify-between gap-8'>

          <div className='text-neutral-400 text-xs'>
            <h3 className='uppercase mb-4 tracking-widest text-neutral-500'>Project</h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='https://github.com/Arshad9748/Media-Tracker'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-1.5 hover:text-teal transition-colors duration-300'
                >
                  <FiGithub size={13} />
                  Source Code
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/Arshad9748/Media-Tracker/issues'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-teal transition-colors duration-300'
                >
                  Report an Issue
                </a>
              </li>
            </ul>
          </div>

          <div className='text-neutral-400 text-xs'>
            <h3 className='uppercase mb-4 tracking-widest text-neutral-500'>Built By</h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='https://portfolio-arshad23.vercel.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-teal transition-colors duration-300'
                >
                  Arshad Murtaza Ahmed
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/Arshad9748'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-teal transition-colors duration-300'
                >
                  GitHub Profile
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer