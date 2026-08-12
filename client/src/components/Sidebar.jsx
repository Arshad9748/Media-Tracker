import {Link, useLocation} from 'react-router'
import { useState } from 'react'
import { SiKatana } from 'react-icons/si'
import { BiSolidCameraMovie } from 'react-icons/bi'
import { GiBookCover } from 'react-icons/gi'
import { MdLiveTv } from 'react-icons/md'
import { IoGameController } from 'react-icons/io5'
import { TbHomeFilled } from "react-icons/tb";
import { HiMenuAlt3, HiX } from 'react-icons/hi' 

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    {path: '/dashboard', icon: <TbHomeFilled size='28'/>, label:'Home'},
    {path: '/anime', icon: <SiKatana size='28'/>, label: 'Anime'},
    {path: '/movie', icon: <BiSolidCameraMovie size='28'/>, label: 'Movie'},
    {path:'/book', icon: <GiBookCover size='28'/>, label: 'Book'},
    {path: '/game', icon: <IoGameController size='28'/>, label: 'Game'},
    {path: '/tvshow', icon: <MdLiveTv size='28'/>, label: 'TV Show'}
  ]
  return (
<>
      {/* Mobile Top Bar with Hamburger Trigger */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-14 bg-gray-800 flex items-center justify-between px-4 z-40 shadow-md">
        <span className="font-sniglet text-teal font-bold text-lg">Media Vault</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-neutral-200 hover:text-teal focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
        </button>
      </div>

      {/* Backdrop overlay for mobile menu */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="md:hidden fixed inset-0 bg-black/60 z-40 transition-opacity"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed md:sticky top-0 left-0 h-screen bg-gray-800 font-sniglet shadow-lg z-50 flex flex-col transition-all duration-300 overflow-hidden
          ${isOpen ? 'translate-x-0 w-64 p-6' : '-translate-x-full md:translate-x-0 w-0 md:w-20 md:hover:w-40'}
          justify-center items-center gap-6`}
      >
        {navItems.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <Link
              to={item.path}
              key={item.path}
              onClick={() => setIsOpen(false)} // Close menu when clicking a link
              className={`flex items-center md:flex-col justify-start md:justify-center w-full gap-4 md:gap-1 p-2 rounded-md transition-colors ${
                isActive ? 'text-teal' : 'text-neutral-200 hover:text-teal'
              }`}
            >
              <div className="shrink-0">{item.icon}</div>
              <span className="text-sm md:text-xs text-left md:text-center font-medium">
                {item.label}
              </span>
            </Link>
          )
        })}
      </aside>
    </>
  )
}

export default Sidebar