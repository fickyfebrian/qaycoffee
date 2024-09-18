import React from 'react';

export default function Facility() {
  return (
    <div className="">
    <div 
      className="flex h-auto w-auto items-center justify-end px-16 py-16"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1579369917097-49a8444a091d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: '440px'
      }}
    >
      <p className="font-playfair text-5xl text-left text-white">
        WiFi, Everyone needs internet.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 font-playfair">
      <div className="mx-auto py-12 grid grid-cols-1 md:grid-cols-2">
        <div className="px-12 py-12">
          <img src="https://images.unsplash.com/photo-1508766917616-d22f3f1eea14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
               alt="gambar"
               style={{height:400, width: 600, objectFit:"cover"}}
          />
        </div>
        <div className="items-center h-auto flex px-12 py-12">
          <div>
            <h1 className="font-bold text-3xl">
              Qay
            </h1>
            <h2 className="font-poppins text-2xl">
              Bandung, Jakarta, Bali
            </h2>
            <p className="text-xl font-poppins">
              <strong>WiFi:</strong> Qay Coffee
            </p>
            <p className="text-xl font-poppins">
              <strong>Password:</strong> Qayemi2024
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto py-12 grid grid-cols-1 md:grid-cols-2">
        <div className="px-12 py-12">
          <img src="https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
               alt="gambar"
               style={{height:400, width: 600, objectFit:"cover"}}
          />
        </div>
        <div className="items-center h-auto flex px-12 py-12">
          <div>
            <h1 className="font-bold text-3xl">
              Qay
            </h1>
            <h2 className="font-poppins text-2xl">
              Yogyakarta, Surabaya, Semarang
            </h2>
            <p className="text-xl font-poppins">
              <strong>WiFi:</strong> Qay Coffee
            </p>
            <p className="text-xl font-poppins">
              <strong>Password:</strong> apapun2024
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}