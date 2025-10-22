import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-white font-nunito">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 md:text-8xl">404</h1>
        <p className="mt-4 text-xl font-semibold text-gray-600 md:text-2xl">
          Sepertinya kamu tersesat
        </p>
        <p className="mt-2 text-gray-500">
          Halaman yang kamu cari tidak tersedia.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-block px-6 py-3 text-sm font-medium text-white transition bg-green-600 rounded-full hover:bg-green-700"
          >
            Kembali ke Beranda
          </Link>
        </div>
        <div className="mt-10">
          <img
            src="/error.svg"
            alt="404 Illustration"
            className="w-2/3 max-w-sm mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Error404;
