import React from 'react';
import { FaTools } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UnderConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-slate-100 font-poppins">
      <div className="max-w-md p-10 text-center bg-white shadow-md rounded-2xl">
        <div className="flex justify-center mb-6">
          <FaTools className="text-6xl text-yellow-500 animate-bounce" />
        </div>
        <h1 className="mb-2 text-2xl font-bold md:text-3xl text-slate-800">Halaman Sedang Dalam Proses</h1>
        <p className="mb-6 text-slate-600">Mohon maaf, halaman ini masih dalam tahap pengembangan. Nantikan pembaruan terbaru dari kami segera! 🚀</p>
        <Link to="/" className="inline-block px-6 py-3 font-semibold text-white transition-all duration-300 rounded-xl bg-emerald-600 hover:bg-emerald-700">
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default UnderConstruction;
