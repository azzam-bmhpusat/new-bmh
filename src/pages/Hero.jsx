// src/components/Hero.jsx
import { useEffect, useState } from 'react';

const slides = [
  '/images/banner/1.jpg', // ganti dengan path gambar kamu
  '/images/banner/2.jpg',
  '/images/banner/3.jpg',
  '/images/banner/4.jpg',
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto slide setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-full mx-auto overflow-hidden shadow-lg max-w-7xl rounded-4xl">
        {/* Slide container */}
        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
          {slides.map((src, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <img src={src} alt={`slide-${index}`} className="w-full h-[610px] object-cover" />
            </div>
          ))}
        </div>

        {/* Overlay Text */}
        {/* <div className="absolute inset-0 flex flex-col justify-center px-8 bg-gradient-to-r from-black/60 to-black/20 md:px-16">
          <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            Bahagia <span className="text-green-400">dengan</span> <br /> Berzakat
          </h1>
          <p className="max-w-xl mt-4 text-white">di Baitul Maal Hidayatullah. Seruan kebaikan berbagi untuk semua.</p>
          <button className="px-6 py-3 mt-6 font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600">Ayo Berzakat</button>
        </div> */}

        {/* Dots Navigation */}
        <div className="relative px-6 bg-white">
          <div className="absolute flex justify-center w-full bottom-4">
            <div className="flex gap-2 px-4 py-2 rounded-full bg-white/50">
              {slides.map((_, index) => (
                <button key={index} onClick={() => setCurrent(index)} className={`h-3 w-3 rounded-full transition ${current === index ? 'bg-emerald-500' : 'bg-gray-300'}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
