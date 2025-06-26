import React from 'react'

const loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-black py-10 px-4">
      <div className="bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 max-w-2xl w-full flex flex-col md:flex-row items-center gap-8 animate-pulse">
        <div className="w-64 h-80 bg-gray-300/30 rounded-2xl shadow-lg border-2 border-yellow-400" />
        <div className="flex-1 w-full">
          <div className="h-10 w-3/4 bg-gray-300/30 rounded mb-6"></div>
          <div className="h-4 w-full bg-gray-300/20 rounded mb-3"></div>
          <div className="h-4 w-5/6 bg-gray-300/20 rounded mb-3"></div>
          <div className="h-4 w-2/3 bg-gray-300/20 rounded mb-6"></div>
          <div className="h-8 w-32 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-xl"></div>
        </div>
      </div>
    </div>
  )
}

export default loading
