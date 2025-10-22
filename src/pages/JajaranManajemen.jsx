import React from 'react';
import { FaCalculator, FaMoneyBillWave } from 'react-icons/fa';

// Reusable Component
const CardManajemen = ({ data }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
      {data.map((item, index) => (
        <div key={index} className="relative overflow-hidden shadow-md rounded-2xl bg-slate-50">
          {/* Foto pengurus */}
          <div className="w-full bg-gray-200 h-85 md:h-111">
            {item.image ? (
              <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
            ) : (
              <div className="flex items-center justify-center w-full h-full bg-gray-200">
                <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
                </svg>
              </div>
            )}
          </div>

          {/* Overlay gradasi */}
          <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#095046] to-transparent">
            <p className="text-xs font-medium text-white md:text-sm">{item.role}</p>
            <h3 className="text-sm font-semibold text-yellow-500 md:text-base">{item.name}</h3>
            <p className="text-xs text-gray-200">{item.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function JajaranManajemen() {
  const dewanPembina = [
    {
      role: 'Ketua Pembina',
      name: 'DR Nashirul Haq',
      email: 'dr.nashirul.haq@bmh.or.id',
      image: '/images/jajaran-pengurus/1-pembina/1.png',
    },
    {
      role: 'Anggota Pembina',
      name: 'Ust. Fathul Adhim',
      email: 'fathul.adhim@bmh.or.id',
      image: '/images/jajaran-pengurus/1-pembina/2.JPG',
    },
    {
      role: 'Anggota Pembina',
      name: 'Ust. Marwan Mujahidin',
      email: 'marwan.mujahidin@bmh.or.id',
      image: '/images/jajaran-pengurus/1-pembina/3.jpg',
    },
  ];

  const dewanPengawas = [
    {
      role: 'Ketua Pengawas',
      name: 'Drs. Wahyu Rahman, M.M',
      email: 'wahyu.rahman@bmh.or.id',
      image: '/images/jajaran-pengurus/2-pengawas/1.jpg',
    },
    {
      role: 'Anggota Pengawas',
      name: 'Abdul Ghofar, S.Pd.I',
      email: 'abdul.ghofar@bmh.or.id',
      image: '/images/jajaran-pengurus/2-pengawas/2.jpg',
    },
    {
      role: 'Anggota Pengawas',
      name: 'Abdul Kholiq, Lc, M.H.I',
      email: 'abdul.kholiq@bmh.or.id',
      image: '/images/jajaran-pengurus/2-pengawas/3.png',
    },
    {
      role: 'Anggota Pengawas',
      name: 'Naspi Arsyad, Lc',
      email: 'naspi.arsyad@bmh.or.id',
      image: '/images/jajaran-pengurus/2-pengawas/4.png',
    },
  ];

  const dewanPengurus = [
    {
      role: 'Ketua Pengurus',
      name: 'Ust. Firman Zainal Abidin',
      email: 'firmanza@bmh.or.id',
      image: '/images/jajaran-pengurus/3-pengurus/1.JPG',
    },
    {
      role: 'Sekretaris Pengurus',
      name: 'Ust. Dede Heri Bachtiar',
      email: 'dede.heri@bmh.or.id',
      image: '/images/jajaran-pengurus/3-pengurus/2.JPG',
    },
    {
      role: 'Bendahara Pengurus',
      name: 'Ust. Abdul Chadjib Halik',
      email: 'abdul.chajib@bmh.or.id',
      image: '/images/jajaran-pengurus/3-pengurus/3.JPG',
    },
  ];

  const direksi = [
    {
      role: 'Direktur Utama',
      name: 'Ust. Supendi',
      email: 'supendi@bmh.or.id',
      image: '/images/jajaran-pengurus/4-direksi/1.JPG',
    },
    {
      role: 'Direktur Operasional',
      name: 'DR Eko Muliansyah',
      email: 'eko.muliansyah@bmh.or.id',
      image: '/images/jajaran-pengurus/4-direksi/2.JPG',
    },
    {
      role: 'Direktur Marketing',
      name: 'Ust. Zainal Abidin',
      email: '@bmh.or.id',
      image: '/images/jajaran-pengurus/4-direksi/3.JPG',
    },
    {
      role: 'Direktur Prodaya',
      name: 'Ust. Syamsudin',
      email: '@bmh.or.id',
      image: '/images/jajaran-pengurus/4-direksi/4.JPG',
    },
    {
      role: 'Sekretaris Lembaga',
      name: 'Ust. Tri Winarno',
      email: 'tri.winarno@bmh.or.id',
      image: '/images/jajaran-pengurus/4-direksi/5.JPG',
    },
  ];

  return (
    <section className="px-4 py-20 mx-auto font-poppins bg-slate-100 lg:py-30 max-w-7xl md:px-6 lg:px-12">
      {/* Text Content */}
      <div className="text-left">
        <h2 className="mt-1 text-2xl font-bold md:text-3xl md:font-extrabold text-[#095046]">Jajaran Manajemen</h2>
        <div className="h-2 w-40 bg-[#10B981] mt-1 mb-4"></div>

        <p className="text-xs leading-relaxed text-justify text-gray-700 md:text-sm">
          Di balik setiap langkah besar BMH, ada para pemimpin visioner yang bekerja penuh dedikasi. Jajaran manajemen Baitul Maal Hidayatullah (BMH) merupakan sosok-sosok terbaik yang menjalankan amanah lembaga dengan penuh integritas,
          profesionalitas, dan semangat melayani umat. Mereka bukan hanya mengelola organisasi, tapi juga memastikan setiap program berjalan tepat sasaran, transparan, dan membawa manfaat luas bagi masyarakat. Dengan struktur manajemen yang
          solid—mulai dari Dewan Pembina, Dewan Pengawas, hingga Dewan Pengurus—BMH terus berkomitmen menghadirkan kebermanfaatan zakat, infak, dan sedekah secara optimal.
        </p>
      </div>

      {/* Bagian Dewan Pembina */}
      <div className="my-10">
        <h2 className="mt-1 text-2xl font-bold md:text-3xl md:font-extrabold text-[#095046]">Dewan Pembina</h2>
        <div className="w-40 h-2 mt-1 mb-4 bg-yellow-500"></div>
        <CardManajemen data={dewanPembina} />
      </div>

      {/* Bagian Dewan Pengawas */}
      <div className="my-10">
        <h2 className="mt-1 text-2xl font-bold md:text-3xl md:font-extrabold text-[#095046]">Dewan Pengawas</h2>
        <div className="w-40 h-2 mt-1 mb-4 bg-yellow-500"></div>
        <CardManajemen data={dewanPengawas} />
      </div>

      {/* Bagian Dewan Pengurus */}
      <div className="my-10">
        <h2 className="mt-1 text-2xl font-bold md:text-3xl md:font-extrabold text-[#095046]">Dewan Pengurus</h2>
        <div className="w-40 h-2 mt-1 mb-4 bg-yellow-500"></div>
        <CardManajemen data={dewanPengurus} />
      </div>

      {/* Bagian Direksi */}
      <div className="my-10">
        <h2 className="mt-1 text-2xl font-bold md:text-3xl md:font-extrabold text-[#095046]">Direksi</h2>
        <div className="w-40 h-2 mt-1 mb-4 bg-yellow-500"></div>
        <CardManajemen data={direksi} />
      </div>

      {/* CTA Zakat */}
      <div className="py-12 mx-auto max-w-7xl">
        {/* Heading */}
        <p className="mb-8 text-xl font-medium text-center text-gray-700">
          Salurkan Zakat Anda Lewat BMH — <span className="font-semibold">Lembaga Zakat Amanah &amp; Terpercaya</span>
        </p>

        {/* Cards */}
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
          <div className="flex items-start gap-4 p-6 text-white bg-yellow-500 shadow-md rounded-xl">
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

        {/* CTA Box */}
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
