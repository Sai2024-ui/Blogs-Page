'use client'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter();

  const handleSubmit = async(e) => {
    e.preventDefault()
    // You can add form validation here if needed
    // For example, check if email and password are not empty
    if (!email || !password) {
      alert('Please fill in both fields')
      return
    }
    // Submit the form
    const userDetails = {email, password};
    const url = '/api/auth/login';
    const options = {
        method: 'POST',
        body: JSON.stringify(userDetails),
    }
    const response = await fetch(url,options);
    const data = await response.json();
    if (response.ok){
        router.push('/')
    }
    else {
        alert(data.error || 'Login failed. Please try again.')
    }
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-black py-10 px-4">
      <div className="bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 max-w-2xl flex flex-col md:flex-row items-center gap-8">
        {/* <div className="w-64 h-80 bg-gray-300/30 rounded-2xl shadow-lg border-2 border-yellow-400 flex items-center justify-center">
          <span className="text-4xl font-bold text-yellow-500">LOGO</span>
        </div> */}
        <div className="flex-1 w-half">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Login</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <label className="text-sm font-medium text-white">Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              className="border border-gray-300/50 bg-white/30 text-white placeholder-gray-200 focus:border-yellow-400 focus:ring-yellow-400 p-2 rounded outline-none transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
            />
            <label className="text-sm font-medium text-white">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="border border-gray-300/50 bg-white/30 text-white placeholder-gray-200 focus:border-yellow-400 focus:ring-yellow-400 p-2 rounded outline-none transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-yellow-400 to-pink-400 text-black font-semibold py-2 rounded-xl mt-4 shadow hover:from-yellow-500 hover:to-pink-500 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
