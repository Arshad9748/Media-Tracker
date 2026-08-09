import {Link, useLocation} from 'react-router'
import { SiKatana } from 'react-icons/si'
import { BiSolidCameraMovie } from 'react-icons/bi'
import { GiBookCover } from 'react-icons/gi'
import { MdLiveTv } from 'react-icons/md'
import { IoGameController } from 'react-icons/io5'
import { TbHomeFilled } from "react-icons/tb";

const Sidebar = () => {

  const location = useLocation()

  const navItems = [
    {path: '/dashboard', icon: <TbHomeFilled size='40'/>, label:'Home'},
    {path: '/anime', icon: <SiKatana size='40'/>, label: 'Anime'},
    {path: '/movie', icon: <BiSolidCameraMovie size='40'/>, label: 'Movie'},
    {path:'/book', icon: <GiBookCover size='40'/>, label: 'Book'},
    {path: '/game', icon: <IoGameController size='40'/>, label: 'Game'},
    {path: '/tvshow', icon: <MdLiveTv size='40'/>, label: 'TV Show'}
  ]
  return (
    <aside className='flex flex-col  bg-gray-800 h-screen w-20 items-center justify-center hover:w-40 transition-all duration-300 shadow-lg font-sniglet gap-8 '>
      {navItems.map((item)=> {
       return ( 
       <Link to={item.path} key={item.path} className={`flex flex-col items-center justify-center w-full  gap-1 p-3 transition-colors ${location.pathname === item.path ? 'text-teal':' text-neutral-200 hover:text-teal'}`}>
        {item.icon} 
        <span className='text-xs text-center'>{item.label}</span>
        </Link>
       )
      })}
    </aside>
  )
}

export default Sidebar