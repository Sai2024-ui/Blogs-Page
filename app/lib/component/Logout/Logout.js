'use client';
import React from 'react'
import { useRouter } from 'next/navigation';

const Logout = () => {
  const router = useRouter()
    const handleLogout = async () => {
        // Clear local storage or cookies to log out the user
        
        const url = '/api/auth/logout';
        const options = {
           method: 'POST',
        }
    const response = await fetch(url,options);
    const data = await response.json();
    if (response.ok) {
      router.push('/login')
    } else {
      
      console.error('Logout failed:', data.error);
      alert('Logout failed. Please try again.');
    }
}  
  return (
    <div>
      <button className="ml-4 px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-pink-400 transition-colors duration-300" onClick={handleLogout}     >
        Logout
      </button>
    </div>
  )
}

export default Logout
