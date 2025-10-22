import React from 'react';
import { Link } from 'react-router-dom';

const DonasiPage = () => {
  const data = [
    {
      id: 1,
      image: '/images/donasi/1.png',
      title: 'Sedekah Subuh Bantu Nutrisi Santri dan Tahfidz',
      organization: 'Baitul Maal Hidayatullah',
      daysLeft: '34 hari lagi',
      collected: 80000000000,
      target: 100000000000,
    },
    {
      id: 2,
      image: '/images/donasi/2.png',
      title: 'Sedekah Subuh Bantu Nutrisi Santri dan Tahfidz',
      organization: 'Baitul Maal Hidayatullah',
      daysLeft: '34 hari lagi',
      collected: 50000000000,
      target: 100000000000,
    },
    {
      id: 3,
      image: '/images/donasi/3.png',
      title: 'Sedekah Subuh Bantu Nutrisi Santri dan Tahfidz',
      organization: 'Baitul Maal Hidayatullah',
      daysLeft: '34 hari lagi',
      collected: 20000000000,
      target: 100000000000,
    },
    {
      id: 3,
      image: '/images/donasi/4.png',
      title: 'Sedekah Subuh Bantu Nutrisi Santri dan Tahfidz',
      organization: 'Baitul Maal Hidayatullah',
      daysLeft: '34 hari lagi',
      collected: 90000000000,
      target: 100000000000,
    },
  ];

  return (
    <section className="container py-20 mx-auto font-poppins bg-slate-100 lg:py-30 max-w-7xl">
      {/* Header */}
      {/* Text Content */}
      <div className="mb-10 text-left lg:text-left">
        <h2 className="mt-1 text-2xl font-bold md:text-3xl md:font-extrabold text-[#095046]">Berbagi Kebaikan, Ringankan Beban, Tebar Kebahagiaan</h2>
        <div className="h-2 w-40 bg-[#10B981] mt-1 mb-4"></div>
        <p className="leading-relaxed text-justify text-gray-700">
          <span className="font-semibold">Lembaga Zakat Baitul Maal Hidayatullah (BMH) </span>hadir untuk memudahkan Anda menyalurkan zakat, infak, dan sedekah secara amanah dan tepat sasaran. Bersama BMH, setiap rupiah yang Anda sisihkan
          akan berubah menjadi senyum santri, makanan untuk dhuafa, dan harapan baru bagi umat.
          <br />
          Tidak ada donasi yang terlalu kecil. Karena dari butiran kebaikan yang Anda berikan, terhimpun keberkahan yang besar.
          <br />
          Mari bersama-sama menjadi bagian dari perubahan.
          <br />
          <br />
        </p>
        <h2 className="mt-1 text-xl font-base md:text-xl md:font-base text-[#095046]">
          👉 Donasikan sekarang. <span className="mt-1 text-xl font-md md:text-xl md:font-extrabold text-[#095046]">Mulai dari Rp10.000</span>, Anda sudah membantu membuka pintu kebaikan tanpa batas.
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {data.map((item) => (
          <div key={item.id} className="hover:scale-[1.02] transition-transform">
            <a
              href="https://berbagi.bmh.or.id/"
              target="_blank"
              rel="noopener noreferrer" // ganti sesuai rute tujuanmu
              className="flex items-start overflow-hidden bg-white shadow-md rounded-2xl hover:cursor-pointer"
            >
              {/* Gambar kiri */}
              <div className="flex-shrink-0 w-40 h-40 m-4 overflow-hidden rounded-xl">
                <img src={item.image} alt={item.title} className="object-cover w-full h-full" />
              </div>

              {/* Konten kanan */}
              <div className="flex flex-col justify-between flex-1 p-4">
                <div>
                  <p className="text-xs text-slate-500">{item.organization}</p>
                  <h3 className="mt-1 text-base font-semibold text-slate-800 line-clamp-2">{item.title}</h3>

                  {/* Waktu */}
                  <p className="mt-2 text-xs text-orange-500">{item.daysLeft}</p>

                  {/* Progress bar */}
                  <div className="w-full h-2 mt-2 rounded-full bg-slate-200">
                    <div
                      className="h-2 bg-yellow-400 rounded-full"
                      style={{
                        width: `${(item.collected / item.target) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                <p className="pt-2 text-xs text-slate-400">Terkumpul</p>

                {/* Total donasi */}
                <p className="mt-2 text-sm font-bold text-emerald-600">
                  Rp{item.collected.toLocaleString('id-ID')} <span className="font-normal text-slate-400">/ Rp{item.target.toLocaleString('id-ID')}</span>
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DonasiPage;
