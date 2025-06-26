import React from 'react'

const loading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-white mb-12 text-center drop-shadow-2xl tracking-widest">
          <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            Loading...
          </span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {[...Array(8)].map((_, idx) => (
            <div
              key={idx}
              className="relative bg-white/10 border border-white/20 p-6 rounded-3xl shadow-2xl flex flex-col items-center animate-pulse"
            >
              <div className="absolute -inset-1 rounded-3xl blur-xl opacity-40 pointer-events-none bg-gradient-to-br from-yellow-400 via-pink-400 to-indigo-400 z-0"></div>
              <div className="w-48 h-64 bg-gray-300/30 rounded-xl mb-5 shadow-lg border-2 border-yellow-400"></div>
              <div className="h-6 w-32 bg-gray-300/30 rounded mb-3"></div>
              <div className="h-4 w-40 bg-gray-300/20 rounded mb-2"></div>
              <div className="h-4 w-24 bg-gray-300/20 rounded mb-4"></div>
              <div className="h-8 w-28 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default loading
