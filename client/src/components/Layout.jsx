import React from 'react'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
  return (
    <div className='flex min-h-screen items-start bg-gray-900'>
      <aside className='sticky  h-fit top-0  w-64 shrink-0 '>
        <Sidebar/>
        </aside>
        <main className='flex-1'>
            {children}
        </main>
    </div>
  )
}

export default Layout