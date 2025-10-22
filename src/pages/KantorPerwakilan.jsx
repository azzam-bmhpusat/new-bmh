import React, { useState } from 'react';
import { FaCalculator, FaMoneyBillWave } from 'react-icons/fa';

// Fungsi bantu untuk membaca query string
const useQuery = () => {
  return React.useMemo(() => new URLSearchParams(window.location.search), []);
};

function CardManajemen({ item }) {
  // Hapus spasi berlebih di telp untuk WhatsApp URL
  const cleanTelp = item.telp.replace(/\s+/g, '');
  return (
    <div className="flex flex-col overflow-hidden transition border-[#39BA87] shadow border-1 rounded-3xl hover:shadow-md">
      <img src={item.gambar} alt={item.nama} className="object-cover w-full h-55 md:h-48" />
      <div className="flex flex-col justify-between flex-1 p-6">
        <div>
          <h3 className="mb-2 text-xl font-extrabold text-emerald-700">{item.nama}</h3>
          <p className="mb-2 text-xs leading-relaxed text-gray-700">{item.alamat}</p>
          <p className="text-xs text-gray-700">Tlp: {item.telp}</p>
          {item.email && <p className="text-xs text-gray-700">Email: {item.email}</p>}
        </div>
        <a href={`https://wa.me/${cleanTelp}?text=Halo`} target="_blank" rel="noopener noreferrer" className="self-start px-5 py-2 mt-4 text-sm font-semibold text-white transition rounded-full bg-emerald-600 hover:bg-emerald-700">
          Hubungi Perwakilan
        </a>
      </div>
    </div>
  );
}

export default function KantorPerwakilan() {
  let query = useQuery();
  const initialSearch = query.get('q') || '';

  const [searchTerm, setSearchTerm] = useState(initialSearch);

  // Data kantor (sama seperti sebelumnya)
  const kantorPusat = [
    {
      nama: 'BMH Jakarta',
      gambar: '/images/kantor-perwakilan/1.jpg',
      alamat: 'Kalibata Office Park, Jl. KH. Guru Amin No.21, RT.1/RW.8, Kalibata, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12780',
      telp: '18002428478',
      email: 'csjakarta@bmh.or.id',
    },
    {
      nama: 'BMH Depok',
      gambar: '/images/kantor-perwakilan/2.jpg',
      alamat: 'Blk. A, Ruko Verbena Jl. Boulevard Grand Depok City, Tirtajaya, Kec. Sukmajaya, Kota Depok, Jawa Barat 16412',
      telp: '18002428478',
      email: 'csdepok@bmh.or.id',
    },
    {
      nama: 'BMH Citayam',
      gambar: '/images/kantor-perwakilan/3.jpg',
      alamat: 'Jl. Taman Depok Permai Blok CD No.1A, RT.002/RW.023, Depok 2 timur, Kec. Cipayung, Kota Depok, Jawa Barat 16415',
      telp: '18002428478',
      email: 'cscitayam@bmh.or.id',
    },
  ];

  const kantorJabar = [
    {
      nama: 'BMH BANDUNG',
      gambar: '/images/kantor-perwakilan/0.jpg',
      alamat: 'Kalibata Office Park, Jl. KH. Guru Amin No.21, RT.1/RW.8, Kalibata, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12780',
      telp: '18002428478',
      email: 'csjakarta@bmh.or.id',
    },
    {
      nama: 'BMH CIREBON',
      gambar: '/images/kantor-perwakilan/0.jpg',
      alamat: 'Blk. A, Ruko Verbena Jl. Boulevard Grand Depok City, Tirtajaya, Kec. Sukmajaya, Kota Depok, Jawa Barat 16412',
      telp: '18002428478',
      email: 'csdepok@bmh.or.id',
    },
    {
      nama: 'BMH CIMAHI',
      gambar: '/images/kantor-perwakilan/0.jpg',
      alamat: 'Jl. Taman Depok Permai Blok CD No.1A, RT.002/RW.023, Depok 2 timur, Kec. Cipayung, Kota Depok, Jawa Barat 16415',
      telp: '18002428478',
      email: 'csimahi@bmh.or.id',
    },
    {
      nama: 'BMH BOGOR',
      gambar: '/images/kantor-perwakilan/0.jpg',
      alamat: 'Jl. Taman Depok Permai Blok CD No.1A, RT.002/RW.023, Depok 2 timur, Kec. Cipayung, Kota Depok, Jawa Barat 16415',
      telp: '18002428478',
      email: 'csimahi@bmh.or.id',
    },
  ];

  const kantorBanten = [
    {
      nama: 'BMH KOTA SERANG',
      gambar: '/images/kantor-perwakilan/0.jpg',
      alamat: 'Jl. Raya Serang-Pandeglang KM 3 No. 04 RT. 03/RW. 01,Tembong, Cipocok Jaya, Kota Serang, Banten 42121',
      telp: '0254 – 7927961',
      email: 'cs.tangerang@bmh.or.id',
    },
  ];
  const kantorJateng = [
    {
      nama: 'BMH SEMARANG',
      gambar: '/images/kantor-perwakilan/0.jpg',
      alamat: 'Kalibata Office Park, Jl. KH. Guru Amin No.21, RT.1/RW.8, Kalibata, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12780',
      telp: '18002428478',
      email: 'csjakarta@bmh.or.id',
    },
    {
      nama: 'BMH SUKOHARJO',
      gambar: '/images/kantor-perwakilan/0.jpg',
      alamat: 'Blk. A, Ruko Verbena Jl. Boulevard Grand Depok City, Tirtajaya, Kec. Sukmajaya, Kota Depok, Jawa Barat 16412',
      telp: '18002428478',
      email: 'csdepok@bmh.or.id',
    },
    {
      nama: 'BMH SRAGEN',
      gambar: '/images/kantor-perwakilan/0.jpg',
      alamat: 'alamat...',
      telp: '18002428478',
      email: 'csimahi@bmh.or.id',
    },
    {
      nama: 'BMH SOLO',
      gambar: '/images/kantor-perwakilan/0.jpg',
      alamat: 'alamat...',
      telp: '18002428478',
      email: 'csimahi@bmh.or.id',
    },
    {
      nama: 'BMH KEBUMEN',
      gambar: '/images/kantor-perwakilan/0.jpg',
      alamat: 'alamat...',
      telp: '18002428478',
      email: 'csimahi@bmh.or.id',
    },
    {
      nama: 'BMH PEKALONGAN',
      gambar: '/images/kantor-perwakilan/0.jpg',
      alamat: 'alamat...',
      telp: '18002428478',
      email: 'csimahi@bmh.or.id',
    },
    {
      nama: 'BMH KUDUS',
      gambar: '/images/kantor-perwakilan/0.jpg',
      alamat: 'alamat...',
      telp: '18002428478',
      email: 'csimahi@bmh.or.id',
    },
    {
      nama: 'BMH BOYOLALI',
      gambar: '/images/kantor-perwakilan/0.jpg',
      alamat: 'alamat...',
      telp: '18002428478',
      email: 'csimahi@bmh.or.id',
    },
    {
      nama: 'BMH BLORA/CEPU',
      gambar: '/images/kantor-perwakilan/0.jpg',
      alamat: 'alamat...',
      telp: '18002428478',
      email: 'csimahi@bmh.or.id',
    },
    {
      nama: 'BMH GROBOGAN',
      gambar: '/images/kantor-perwakilan/0.jpg',
      alamat: 'alamat...',
      telp: '18002428478',
      email: 'csimahi@bmh.or.id',
    },
    {
      nama: 'BMH KENDAL',
      gambar: '/images/kantor-perwakilan/0.jpg',
      alamat: 'alamat...',
      telp: '18002428478',
      email: 'csimahi@bmh.or.id',
    },
  ];
  const kantorJatim = [
    {
      nama: 'BMH SURABAYA',
      gambar: '/images/kantor-perwakilan/0.jpg',
      alamat: 'Kalibata Office Park, Jl. KH. Guru Amin No.21, RT.1/RW.8, Kalibata, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12780',
      telp: '18002428478',
      email: 'csjakarta@bmh.or.id',
    },
    {
      nama: 'BMH MALANG',
      gambar: '/images/kantor-perwakilan/0.jpg',
      alamat: 'Blk. A, Ruko Verbena Jl. Boulevard Grand Depok City, Tirtajaya, Kec. Sukmajaya, Kota Depok, Jawa Barat 16412',
      telp: '18002428478',
      email: 'csdepok@bmh.or.id',
    },
    {
      nama: 'BMH SIDOARJO',
      gambar: '/images/kantor-perwakilan/0.jpg',
      alamat: 'Jl. Taman Depok Permai Blok CD No.1A, RT.002/RW.023, Depok 2 timur, Kec. Cipayung, Kota Depok, Jawa Barat 16415',
      telp: '18002428478',
      email: 'csimahi@bmh.or.id',
    },
    {
      nama: 'BMH GRESIK',
      gambar: '/images/kantor-perwakilan/0.jpg',
      alamat: 'Jl. Taman Depok Permai Blok CD No.1A, RT.002/RW.023, Depok 2 timur, Kec. Cipayung, Kota Depok, Jawa Barat 16415',
      telp: '18002428478',
      email: 'csimahi@bmh.or.id',
    },
    {
      nama: 'BMH MOJOKERTO',
      gambar: '/images/kantor-perwakilan/0.jpg',
      alamat: 'Jl. Taman Depok Permai Blok CD No.1A, RT.002/RW.023, Depok 2 timur, Kec. Cipayung, Kota Depok, Jawa Barat 16415',
      telp: '18002428478',
      email: 'csimahi@bmh.or.id',
    },
    {
      nama: 'BMH PASURUAN',
      gambar: '/images/kantor-perwakilan/0.jpg',
      alamat: 'Jl. Taman Depok Permai Blok CD No.1A, RT.002/RW.023, Depok 2 timur, Kec. Cipayung, Kota Depok, Jawa Barat 16415',
      telp: '18002428478',
      email: 'csimahi@bmh.or.id',
    },
  ];

  // Fungsi untuk memfilter berdasarkan searchTerm
  const filterKantor = (list) => {
    if (!searchTerm) return list;
    const term = searchTerm.toLowerCase();
    return list.filter((item) => item.nama.toLowerCase().includes(term) || item.alamat.toLowerCase().includes(term) || item.telp.includes(term) || (item.email && item.email.toLowerCase().includes(term)));
  };

  // Filter tiap grup
  const filteredPusat = filterKantor(kantorPusat);
  const filteredJabar = filterKantor(kantorJabar);
  const filteredBanten = filterKantor(kantorBanten);
  const filteredJateng = filterKantor(kantorJateng);
  const filteredJatim = filterKantor(kantorJatim);

  return (
    <section className="container px-4 py-20 mx-auto font-poppins bg-slate-100 lg:py-30 max-w-7xl md:px-6 lg:px-12">
      {/* Text Content */}
      <div className="text-left lg:text-left">
        <h2 className="mt-1 text-2xl font-bold md:text-3xl md:font-extrabold text-[#095046]">Kantor Perwakilan BMH</h2>
        <div className="h-2 w-40 bg-[#10B981] mt-1 mb-4"></div>
        <h4 className="leading-relaxed text-justify text-base font-semibold text-[#095046]">Tunaikan Zakat Anda di Laznas BMH — Amanah, Transparan, dan Profesional Berbasis Dakwah</h4>
        <h4 className="text-base font-semibold leading-relaxed text-justify text-[#e79f22]">Kantor Pusat BMH</h4>
        <p className="text-sm leading-relaxed text-justify text-gray-700">
          Baitul Maal Hidayatullah (BMH) <br /> Jl. Raya Pasar Minggu No. 21 H, Kalibata, Jakarta Selatan 12740
        </p>
        <div className="flex flex-col gap-2 mt-2 w-70">
          <a
            href={`https://wa.me/${kantorPusat[0].telp.replace(/\s+/g, '')}?text=Halo`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-xs font-medium text-gray-700 transition rounded-xl bg-slate-200 hover:bg-slate-300"
          >
            WhatsApp: {kantorPusat[0].telp}
          </a>
          <a href={`mailto:${kantorPusat[0].email}`} className="inline-flex items-center px-4 py-2 text-xs font-medium text-gray-700 transition rounded-xl bg-slate-200 hover:bg-slate-300">
            Email: {kantorPusat[0].email}
          </a>
        </div>
        <h4 className="leading-relaxed text-justify text-base font-semibold text-[#095046] mt-4">Daftar Kantor Perwakilan & Layanan ZIS BMH se-Indonesia</h4>
        <h4 className="mt-1 text-sm font-light leading-relaxed text-justify text-gray-700">Temukan kantor BMH terdekat untuk menunaikan zakat, infak, dan sedekah Anda.</h4>
      </div>

      {/* Search Input di atas (opsional) */}
      <div className="relative flex w-full my-5 overflow-hidden rounded-full sm:w-1/2 md:my-10">
        <input
          type="text"
          placeholder="Cari kantor cabang BMH"
          className="flex-grow px-4 py-2 pr-10 text-sm text-gray-800 bg-white rounded-l-full focus:outline-none" // Ruang untuk tombol X
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button type="button" className="px-3 py-0 text-gray-500 bg-white hover:text-gray-900" onClick={() => setSearchTerm('')}>
            &times;
          </button>
        )}
        <button className="px-4 py-2 md:py-3 text-sm font-semibold text-white rounded-r-full bg-[#39BA87] hover:bg-emerald-600" onClick={() => {}}>
          Search
        </button>
      </div>

      {/* Grid Perwakilan */}
      <section className="mx-auto">
        {filteredPusat.length > 0 && (
          <>
            <h2 className="mb-10 text-3xl font-bold border-yellow-500 border-b-7 text-emerald-900 w-fit">BMH Pusat</h2>
            <div className="grid grid-cols-1 gap-6 mb-15 md:grid-cols-3">
              {filteredPusat.map((item, idx) => (
                <CardManajemen key={`pusat-${idx}`} item={item} />
              ))}
            </div>
          </>
        )}

        {filteredJabar.length > 0 && (
          <>
            <h2 className="mb-10 text-3xl font-bold border-yellow-500 border-b-7 text-emerald-900 w-fit">BMH Jawa Barat</h2>
            <div className="grid grid-cols-1 gap-6 mb-15 md:grid-cols-3">
              {filteredJabar.map((item, idx) => (
                <CardManajemen key={`jabar-${idx}`} item={item} />
              ))}
            </div>
          </>
        )}

        {filteredBanten.length > 0 && (
          <>
            <h2 className="mb-10 text-3xl font-bold border-yellow-500 border-b-7 text-emerald-900 w-fit">BMH Banten</h2>
            <div className="grid grid-cols-1 gap-6 mb-15 md:grid-cols-3">
              {filteredBanten.map((item, idx) => (
                <CardManajemen key={`banten-${idx}`} item={item} />
              ))}
            </div>
          </>
        )}

        {filteredJateng.length > 0 && (
          <>
            <h2 className="mb-10 text-3xl font-bold border-yellow-500 border-b-7 text-emerald-900 w-fit">BMH Jawa Tengah</h2>
            <div className="grid grid-cols-1 gap-6 mb-15 md:grid-cols-3">
              {filteredJateng.map((item, idx) => (
                <CardManajemen key={`jateng-${idx}`} item={item} />
              ))}
            </div>
          </>
        )}

        {filteredJatim.length > 0 && (
          <>
            <h2 className="mb-10 text-3xl font-bold border-yellow-500 border-b-7 text-emerald-900 w-fit">BMH Jawa Timur</h2>
            <div className="grid grid-cols-1 gap-6 mb-15 md:grid-cols-3">
              {filteredJatim.map((item, idx) => (
                <CardManajemen key={`jatim-${idx}`} item={item} />
              ))}
            </div>
          </>
        )}

        {/* Tampilkan pesan jika tidak ada hasil */}
        {filteredPusat.length === 0 && filteredJabar.length === 0 && filteredBanten.length === 0 && filteredJateng.length === 0 && filteredJatim.length === 0 && searchTerm && (
          <div className="py-10 text-center">
            <p className="text-gray-600">
              Tidak ada kantor yang ditemukan untuk "<strong>{searchTerm}</strong>".
            </p>
          </div>
        )}
      </section>

      {/* CTA Zakat */}
      <div className="container py-12 mx-auto max-w-7xl">
        <p className="mb-8 text-xl font-medium text-center text-gray-700">
          Salurkan Zakat Anda Lewat BMH — <span className="font-semibold">Lembaga Zakat Amanah &amp; Terpercaya</span>
        </p>

        <div className="grid gap-6 mb-10 md:grid-cols-2">
          {/* Kalkulator Zakat */}
          <div className="flex items-start gap-4 p-6 text-white shadow-md bg-emerald-600 rounded-xl">
            <div className="p-3 bg-white rounded-lg">
              <FaCalculator className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Kalkulator Zakat</h3>
              <p className="text-sm text-emerald-100">Temukan dengan cepat berapa kewajiban zakat Anda. Praktis, akurat, dan sesuai syariat.</p>
              <a href="/kalkulator-zakat" className="inline-block px-4 py-2 mt-3 text-sm font-medium rounded-lg bg-slate-50 text-emerald-600 hover:bg-slate-100">
                Hitung Zakat Anda
              </a>
            </div>
          </div>

          {/* Tunaikan Zakat */}
          <div className="flex items-start gap-4 p-6 text-white bg-[#FEB738] shadow-md rounded-xl">
            <div className="p-3 bg-white rounded-lg">
              <FaMoneyBillWave className="w-6 h-6 text-yellow-500" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Tunaikan Zakat</h3>
              <p className="text-sm text-amber-100">Salurkan zakat Anda secara online dengan aman, transparan, dan tepat sasaran. Setiap rupiah Anda akan membantu mereka yang membutuhkan.</p>
              <a href="https://berbagi.bmh.or.id/" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 mt-3 text-sm font-medium text-yellow-600 rounded-lg bg-slate-50 hover:bg-slate-100">
                Tunaikan Zakat Sekarang
              </a>
            </div>
          </div>
        </div>

        <div className="p-6 text-center shadow bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl">
          <p className="mb-2 text-lg font-medium text-gray-500">Mari Bersama Menebar Kebaikan!</p>
          <h4 className="mb-2 text-lg font-semibold text-emerald-900">BMH: Laznas Amanah, Transparan, dan Profesional Berbasis Dakwah.</h4>
          <p className="mb-4 text-sm text-gray-600">Dengan zakat Anda, ribuan anak bisa belajar, keluarga dhuafa bisa mandiri, dan pesantren bisa terus berdiri.</p>
          <a href="https://wa.me/18002428478" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 text-white transition rounded-lg shadow bg-emerald-500 hover:bg-emerald-600">
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
