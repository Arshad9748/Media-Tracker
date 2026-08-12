import React from 'react'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
  return (
    <div className='flex min-h-screen  bg-gray-900 text-white'>
        <Sidebar/>
        <main className='flex-1 p-4 pt-18 md:pt-4 overflow-x-hidden'>
            {children}
        </main>
    </div>
  )
}

export default Layout