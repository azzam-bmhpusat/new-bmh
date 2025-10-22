import React from 'react';
import { FaCalculator, FaMoneyBillWave } from 'react-icons/fa';
import Masonry from '../ReactBits/Masonry/Masonry.jsx';

export default function ProfilBmh() {
  const items = [
    {
      id: '1',
      img: 'images/profil/profil2.png',
      url: 'https://example.com/one',
      height: 400,
    },
    {
      id: '2',
      img: 'https://img.freepik.com/free-photo/warehouse-worker-operating-forklift-storage-facility_23-2151962537.jpg?size=338&ext=jpg',
      url: 'https://example.com/two',
      height: 250,
    },
    {
      id: '3',
      img: '/images/profil/profil1.png',
      url: 'https://example.com/three',
      height: 600,
    },
    {
      id: '4',
      img: 'images/profil/profil2.png',
      url: 'https://example.com/one',
      height: 400,
    },
    {
      id: '5',
      img: 'https://img.freepik.com/free-photo/warehouse-worker-operating-forklift-storage-facility_23-2151962537.jpg?size=338&ext=jpg',
      url: 'https://example.com/two',
      height: 250,
    },
    {
      id: '6',
      img: '/images/profil/profil1.png',
      url: 'https://example.com/three',
      height: 600,
    },
    {
      id: '7',
      img: 'images/profil/profil2.png',
      url: 'https://example.com/one',
      height: 400,
    },
    {
      id: '8',
      img: 'https://img.freepik.com/free-photo/warehouse-worker-operating-forklift-storage-facility_23-2151962537.jpg?size=338&ext=jpg',
      url: 'https://example.com/two',
      height: 250,
    },
    {
      id: '9',
      img: '/images/profil/profil1.png',
      url: 'https://example.com/three',
      height: 600,
    },

    // ... more items
  ];
  return (
    <section className="container px-4 py-20 mx-auto font-poppins bg-slate-100 md:px-8 lg:py-30 lg:px-16">
      <div className="grid items-center gap-10 mx-auto max-w-7xl lg:grid-cols-2">
        {/* Images Grid */}
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
          {/* Gambar besar: melebar 2 kolom di layar md ke atas */}
          <img src="/images/profil/profil2.png" alt="BMH Office" className="object-cover w-full h-full shadow-lg md:col-span-2 md:row-span-2 rounded-xl" />
          {/* Gambar kecil 1 */}
          <img src="/images/profil/profil2.png" alt="Launching Logo" className="object-cover w-full h-full shadow-lg rounded-xl" />
          {/* Gambar kecil 2 */}
          <img src="/images/profil/profil1.png" alt="Produk BMH" className="object-cover w-full h-full shadow-lg rounded-xl" />
        </div>

        {/* Text Content */}
        <div className="text-left lg:text-left">
          <h3 className="font-semibold tracking-wide text-green-600 uppercase">TENTANG KAMI</h3>
          <h2 className="mt-1 text-2xl font-bold md:text-3xl md:font-extrabold">BAITUL MAAL HIDAYATULLAH</h2>
          <div className="h-2 w-40 bg-[#10B981] mt-1 mb-4"></div>
          <p className="text-xs leading-relaxed text-justify text-gray-700 md:text-sm">
            Lembaga Amil Zakat Nasional Baitul Maal Hidayatullah (BMH) merupakan lembaga amil zakat yang bergerak dalam penghimpunan dana Zakat, Infaq, Sedekah, Wakaf dan Hibah berikut dana sosial kemanusiaan dan Corporate Social
            Responsibility (CSR) perusahaan, serta melakukan distribusi melalui program pendidikan, dakwah, sosial kemanusiaan, dan ekonomi secara nasional.
            <br />
            <br />
            BMH hadir di 34 Provinsi dengan unit penghimpunan (UPP) zakat, infak dan sedekah mencapai 97 se-Indonesia. Kami wujudkan semua sebagai komitmen untuk menjadi perantara kebaikan, memberi kemudahan bagi masyarakat dalam menunaikan
            ZISWAF menuju Indonesia yang lebih bermartabat.
            <br />
            Kiprah program BMH dari hasil pengelolaan zakat telah melintasi berbagai daerah di Indonesia, setidaknya 287 Pesantren telah eksis dan berkiprah, 5213 Dai Tangguh telah menyebar seantero nusantara, ribuan keluarga dhuafa telah
            terberdayakan dan mandiri, ribuan anak usia sekolah mendapatkan pendidikan yang layak.
          </p>
        </div>
      </div>

      {/* CTA Zakat */}
      <div className="container py-12 mx-auto max-w-7xl">
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
              <a href="https://berbagi.bmh.or.id/" target="blank" className="inline-block px-4 py-2 mt-3 text-sm font-medium text-yellow-600 rounded-lg bg-slate-50 hover:bg-slate-100">
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

      {/* Visi-Misi */}
      <div className="">
        <div className="container py-12 mx-auto space-y-10 max-w-7xl">
          {/* Visi */}
          <div>
            <h2 className="text-2xl font-bold text-[#095046] flex items-center gap-2">Visi</h2>
            <div className="h-2 w-20 bg-[#10B981] mt-1 mb-4"></div>
            <div className="p-4 border rounded-xl border-slate-200">
              <p className="font-medium text-gray-700">Menjadi Lembaga Amil Zakat Terdepan Dan Terpercaya.</p>
            </div>
          </div>

          {/* Misi */}
          <div>
            <h2 className="text-2xl font-bold text-[#095046] flex items-center gap-2">Misi</h2>
            <div className="h-2 w-20 bg-[#F59E0B] mt-1 mb-4"></div>
            <div className="p-4 border rounded-xl border-slate-200">
              <ul className="pl-6 space-y-2 font-medium text-gray-700 list-disc">
                <li>Menjadi Lembaga Amil Zakat Yang Terdepan Dalam Penghimpunan Dan Fokus Dalam Pendayagunaan</li>
                <li>Melaksanakan Pengelolaan Dana Zakat, Infaq Dan Shadaqah Sesuai Dengan Manajemen Modern Yang Transparan Dan Profesional</li>
                <li>Melakukan Pemberdayaan Ummat Dengan Meningkatkan Kuantitas, Kualitas Pendidikan Dan Dakwah</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Legal */}
      <div className="">
        <div className="container py-12 mx-auto space-y-10 max-w-7xl">
          {/* Visi */}
          <div>
            <h2 className="text-2xl font-bold text-[#095046] flex items-center gap-2">Legal Formal</h2>
            <div className="h-2 w-20 bg-[#10B981] mt-1 mb-4"></div>
            <div className="p-4 border rounded-xl border-slate-200">
              <ul className="pl-6 space-y-2 font-medium text-gray-700 list-disc">
                <li>SK Menteri Agama No. 179 Tahun 2021 Sebagai Laznas</li>
                <li>SK Menteri Agama No. 425 Tahun 2015 Sebagai Laznas</li>
                <li>SK Menteri Agama No. 538 Tahun 2001 Sebagai Laznas</li>
                <li>Akte Notaris Lilik Kristiwati, SH tanggal 26 Februari 2001</li>
                <li>Keputusan Menkumham AHU-AH.01.08-210 tanggal 15 April 2011</li>
                <li>NPWP 2.028.581.3-002</li>
                <li>Izin Domisili 018/SRHJ/IV/2011</li>
                <li>Surat Izin Operasional 011.12510.13/1.848 B</li>
              </ul>
            </div>
          </div>

          {/* Misi */}
          <div>
            <h2 className="text-2xl font-bold text-[#095046] flex items-center gap-2">Penghargaan & Apresiasi</h2>
            <div className="h-2 w-20 bg-[#F59E0B] mt-1 mb-4"></div>
            <div className="p-4 border rounded-xl border-slate-200">
              <ul className="pl-6 space-y-2 font-medium text-gray-700 list-disc">
                <li>Rekor MURI dengan sate qurban terbanyak 2005</li>
                <li>BAZNAS Award 2019 sebagai LAZNAS Dengan Kelembagaan Terbaik</li>
                <li>BAZNAS Award 2019 sebagai LAZNAS Dengan Pendistribusian ZIS Terbaik</li>
                <li>Lulus Sertifikasi ISO 9001 : 2015 pada tahun 2018</li>
                <li>Penghargaan Rekor MURI sebagai Pemrakarsa dan Penyelenggara Sebari Da’i Ramadhan Terbanyak dan Terluas 2013</li>
                <li>Penghargaan Rekor MURI sebagai Pemrakarsa Pembagian Paket Sekolah Senyum Anak Indonesia Terbanyak dan Terluas 2014</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ReactBits Gallery */}
      <div className="container py-12 mx-auto space-y-10 mb-100 max-w-7xl">
        <Masonry items={items} ease="power3.out" duration={2} stagger={0.3} animateFrom="bottom" scaleOnHover={true} hoverScale={0.97} blurToFocus={true} colorShiftOnHover={false} />
      </div>
    </section>
  );
}
