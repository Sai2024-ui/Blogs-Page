import React from 'react'
import Link from 'next/link';

export const dynamic = 'force-dynamic';

const Productpage = async ({ params }) => {
  const { id } = params;
  const productId = Array.isArray(id) ? id.at(-1) : id;
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${productId}`);
  const product = await response.json();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-black py-10 px-4">
      <div className="bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 max-w-2xl w-full flex flex-col md:flex-row items-center gap-8">
        <img
          src={product.image || "https://via.placeholder.com/300x400?text=No+Image"}
          alt={product.name}
          className="w-64 h-80 object-contain bg-white rounded-2xl shadow-lg border-2 border-yellow-400"
          style={{ aspectRatio: "3/4" }}
        />
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold text-white mb-4 drop-shadow-lg">{product.name}</h1>
          <p className="text-gray-200 mb-6">{product.description}</p>
          <span className="text-2xl font-bold text-yellow-300 mb-4 block">${product.price}</span>
          <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-pink-400 text-white font-semibold rounded-xl shadow-md hover:from-pink-400 hover:to-yellow-400 transition-all duration-300">
            Buy Now
          </button>
          <button className="ml-4 px-6 py-3 bg-gray-700 text-white font-semibold rounded-xl shadow-md hover:bg-gray-600 transition-all duration-300">
            <Link href="/">🏠 Home</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Productpage
