import React from 'react'

export default function About() {
  return (
    <div className="">
    <div
      className="flex h-auto w-auto items-center justify-end px-24 py-24"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1553292218-4892c2e7e1ae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "110%",
        backgroundPosition: "center",
        scale: 50 ,
        height: "440px",
      }}
    >
      <p className="font-playfair text-5xl text-white">
        Your daily dose of happiness.
      </p>
    </div>
  </div>
  )
}
