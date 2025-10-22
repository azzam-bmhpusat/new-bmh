import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const JemputZakat = () => {
  const waNumber = '6285697779888';
  const waMessage = "Assalamu'alaikum, saya ingin menunaikan zakat/infak/sedekah. Mohon jemput zakat di alamat saya.";
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

  return (
    <section className="bg-slate-100 font-poppins">
      <div className="grid items-center min-h-screen gap-12 px-4 py-20 mx-auto max-w-7xl md:px-6 lg:px-12 md:grid-cols-2">
        {/* Left Content */}
        <div>
          <h2 className="mb-4 text-3xl font-extrabold text-emerald-800 md:text-4xl">
            <span className="text-yellow-500">Jemput</span> Zakat, Infak & Sedekah Anda
          </h2>
          <p className="max-w-md mb-8 text-sm text-slate-600 md:text-lg">
            Tidak perlu repot keluar rumah, cukup klik tombol di bawah ini dan tim <span className="font-semibold text-emerald-700">Baitul Maal Hidayatullah (BMH)</span> akan menjemput zakat Anda. Donasi sekecil apapun sangat berarti bagi
            saudara kita yang membutuhkan.
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full gap-2 px-6 py-2 text-sm font-medium text-white transition rounded-full shadow-md md:text-lg bg-emerald-600 hover:bg-emerald-700 sm:w-auto"
          >
            <FaWhatsapp className="text-sm md:text-lg" />
            Klik untuk Jemput Zakat
          </a>
        </div>
        {/* Right Content */}
        <div className="flex items-center justify-center w-full overflow-hidden rounded-3xl shadow-lg bg-slate-200 md:h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y291cmllcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Jemput Zakat"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default JemputZakat;
