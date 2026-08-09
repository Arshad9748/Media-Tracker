import React from 'react'

const Content = () => {
  return (
<div>
    {/* App Preview Section */}
<div className=" py-20 px-8">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-sniglet text-white text-center mb-4">
      See it in action
    </h2>
    <p className="text-slate-400 text-center mb-12 text-sm">
      Search, track and manage all your media in one private place.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
        <img src="/images/dashboard.png" alt="Dashboard overview" className="w-full object-cover"/>
        <div className="bg-slate-900 p-4">
          <p className="text-white font-bold text-sm">Dashboard</p>
          <p className="text-slate-400 text-xs mt-1">Overview of your entire collection at a glance</p>
        </div>
      </div>

      <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
        <img src="/images/search.png" alt="Search" className="w-full object-cover"/>
        <div className="bg-slate-900 p-4">
          <p className="text-white font-bold text-sm">Search</p>
          <p className="text-slate-400 text-xs mt-1">Find any anime, movie, game, book or TV show instantly</p>
        </div>
      </div>

      <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
        <img src="/images/mylist.png" alt="My List" className="w-full object-cover"/>
        <div className="bg-slate-900 p-4">
          <p className="text-white font-bold text-sm">My List</p>
          <p className="text-slate-400 text-xs mt-1">Track status, rate and manage your personal collection</p>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Features Row */}
<div className="bg-slate-900/50 py-16 px-8">
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
    {[
      { title: 'Search Everything', desc: 'Find any movie, anime, game, book or TV show instantly.' },
      { title: 'Track Your Progress', desc: 'Mark items as watching, completed or dropped.' },
      { title: 'Completely Private', desc: 'Your list is yours only. No social features, no followers.' },
    ].map((feature, index) => (
      <div key={index} className="p-6 rounded-xl border border-slate-800">
        <h3 className="text-white font-sniglet text-lg mb-2">{feature.title}</h3>
        <p className="text-slate-400 text-sm">{feature.desc}</p>
      </div>
    ))}
  </div>
</div>
</div>
  )
}

export default Content