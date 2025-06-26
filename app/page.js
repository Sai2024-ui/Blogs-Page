import Link from "next/link";
import React from "react";



export default async function Home() {
  const response = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL);
  const data = await response.json();
  // console.log(data);
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-white mb-12 text-center drop-shadow-2xl tracking-widest">
            <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Product Gallery
            </span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {data.map((product) => (
              <div
                key={product.id}
                className="relative bg-white/10 border border-white/20 p-6 rounded-3xl shadow-2xl hover:scale-105 hover:shadow-yellow-400/30 transition-transform duration-300 flex flex-col items-center group"
              >
                {/* Decorative Glow */}
                <div className="absolute -inset-1 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition-all duration-300 pointer-events-none bg-gradient-to-br from-yellow-400 via-pink-400 to-indigo-400 z-0"></div>
                {/* Product Image */}
                <div className="w-full flex justify-center z-10">
                  <img
                    src={
                      product.image ||
                      "https://via.placeholder.com/250x350?text=No+Image"
                    }
                    alt={product.name}
                    className="w-48 h-64 object-contain bg-white rounded-xl mb-5 shadow-lg border-2 border-yellow-400 transition-all duration-300 hover:border-pink-400"
                    style={{ aspectRatio: "3/4" }}
                  />
                </div>
                <h2 className="text-xl font-bold text-white mb-2 text-center z-10 drop-shadow-lg">
                  {product.name}
                </h2>
                <p className="text-gray-200 text-center mb-4 z-10 line-clamp-3">
                  {product.description}
                </p>
                <p className="text-yellow-300 font-extrabold text-lg z-10 mb-2">
                  ${product.price}
                </p>
                <button className="z-10 px-5 py-2 mt-auto bg-gradient-to-r from-yellow-400 to-pink-400 text-white font-semibold rounded-xl shadow-md hover:from-pink-400 hover:to-yellow-400 transition-all duration-300">
                  <Link href={`/products/${product.id}`}>
                    View Details
                  </Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

