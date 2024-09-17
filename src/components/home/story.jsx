import React from 'react'

export default function Story() {
  return (
    <div className="h-[400px] flex justify-center items-center bg-gradient-to-t from-transparent to-neutral-950">
      <div className="max-w-4xl p-10 text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair text-white leading-relaxed transition duration-300 ease-in-out">
          "The best maxim I know in this life is, to drink your coffee when you can, and when you cannot, to be easy without it."
        </h1>
        <p className="mt-4 text-xl sm:text-2xl font-playfair text-gray-600 italic">
          - Ernest Hemingway
        </p>
      </div>
    </div>
  )
}
