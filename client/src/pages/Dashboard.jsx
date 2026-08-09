import { useState, useEffect } from 'react'
import { getList } from '../services/api.js'
import { Link } from 'react-router'
import { SiKatana } from 'react-icons/si'
import { BiSolidCameraMovie } from 'react-icons/bi'
import { GiBookCover } from 'react-icons/gi'
import { MdLiveTv } from 'react-icons/md'
import { IoGameController } from 'react-icons/io5'

const Dashboard = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchList = async () => {
      const response = await fetch('http://localhost:5000/api/list', {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      })
      const data = await response.json()
      setList(data)
      setLoading(false)
    }
    fetchList()
  }, [])

  const stats = [
    { label: 'Anime', type: 'anime', icon: <SiKatana size={20}/>, path: '/anime' },
    { label: 'Movies', type: 'movie', icon: <BiSolidCameraMovie size={20}/>, path: '/movie' },
    { label: 'TV Shows', type: 'tv-show', icon: <MdLiveTv size={20}/>, path: '/tvshow' },
    { label: 'Games', type: 'game', icon: <IoGameController size={20}/>, path: '/game' },
    { label: 'Books', type: 'book', icon: <GiBookCover size={20}/>, path: '/book' },
  ]

  const recent = list.slice(0, 6)
  const inProgress = list.filter(item => item.status === 'In Progress').slice(0, 6)

  if (loading) return <div className="text-white p-12">Loading...</div>

  return (
    <div className="p-8 md:p-12 text-white font-jakarta max-w-7xl mx-auto">

      {/* Welcome */}
      <h1 className="text-5xl font-sniglet mb-2">Overview</h1>
      <p className="text-slate-400 text-sm mb-10">Welcome back. Here's your media overview.</p>

      {/* Stats Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
        {stats.map(stat => (
          <Link to={stat.path} key={stat.type} className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col gap-3 hover:border-teal transition-colors">
            <div className="text-teal">{stat.icon}</div>
            <p className="text-slate-400 text-xs">{stat.label}</p>
            <p className="text-3xl font-bold">
              {list.filter(i => i.media_type === stat.type).length}
            </p>
          </Link>
        ))}
      </div>

      {/* Recently Added */}
      <div className="mb-12">
        <h2 className="text-xl font-sniglet mb-4">Recently Added</h2>
        {recent.length === 0 ? (
          <p className="text-slate-400 text-sm">Nothing added yet. Start by searching for media.</p>
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {recent.map(item => (
              <div key={item.id} className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900">
                <img src={item.cover_image} alt={item.title} className="w-full h-[180px] object-cover"/>
                <div className="p-2">
                  <p className="text-xs font-bold truncate">{item.title}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{item.status}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* In Progress */}
      <div>
        <h2 className="text-xl font-sniglet mb-4">In Progress</h2>
        {inProgress.length === 0 ? (
          <p className="text-slate-400 text-sm">Nothing in progress yet.</p>
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {inProgress.map(item => (
              <div key={item.id} className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900">
                <img src={item.cover_image} alt={item.title} className="w-full h-[180px] object-cover"/>
                <div className="p-2">
                  <p className="text-xs font-bold truncate">{item.title}</p>
                  <p className="text-[10px] text-teal mt-0.5">{item.media_type}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  )
}

export default Dashboard