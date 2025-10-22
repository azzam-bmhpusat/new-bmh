import React from 'react';
import YearPagination from './YearPagination.jsx';

const LaporanTahunan = () => {
  return (
    <section className="container px-4 py-20 mx-auto font-poppins bg-slate-100 lg:py-30 max-w-7xl md:px-6 lg:px-12">
      {/* Text Content */}
      <div className="mb-10 text-left lg:text-left">
        <h2 className="mt-1 text-2xl font-bold md:text-3xl md:font-extrabold text-[#095046]">Laporan Tahunan</h2>
        <div className="h-2 w-40 bg-[#10B981] mt-1 mb-4"></div>
      </div>
      {/* Timeline Tahun */}
      <div className="flex flex-wrap items-center justify-center w-full gap-6 mb-10 text-slate-500">
        <YearPagination />
      </div>

      {/* Konten */}
      <div className="grid items-start gap-8 md:grid-cols-2">
        {/* Gambar Laporan */}
        <div className="flex justify-center h-200">
          <img src="https://picsum.photos/400/300?random=2" alt="Laporan Keuangan" className="w-full max-w-md bg-cover border rounded-lg shadow" />
        </div>

        {/* Deskripsi */}
        <div>
          <h2 className="mb-4 text-2xl font-bold text-emerald-800">2017-2018</h2>
          <p className="leading-relaxed text-slate-600">Transparansi adalah komitmen kami. Setiap rupiah amanah yang dititipkan, kami kelola dengan penuh tanggung jawab dan kami laporkan secara terbuka setiap tahun.</p>
          <p className="mt-4 leading-relaxed text-slate-600">Mari bersama membangun kepercayaan, demi terciptanya keberkahan dan manfaat lebih luas bagi umat.</p>
        </div>
      </div>
    </section>
  );
};

export default LaporanTahunan;
