import React from 'react';
import { FaCalculator, FaMoneyBillWave } from 'react-icons/fa';

export default function MajalahMulia() {
  const articles = [
    {
      id: 1,
      title: 'Amil Mesti Progresif dalam Berkhidmat kepada Umat.',
      date: '17 Sept 2025, 05:59 PM',
      author: 'Admin Website BMH',
      image: 'https://picsum.photos/400/300?random=1',
      link: '/majalah-mulia-detail',
    },
    {
      id: 2,
      title: 'Amil Mesti Progresif dalam Berkhidmat kepada Umat.',
      date: '17 Sept 2025, 05:59 PM',
      author: 'Admin Website BMH',
      image: 'https://picsum.photos/400/300?random=2',
      link: '/majalah-mulia-detail',
    },
    {
      id: 3,
      title: 'Amil Mesti Progresif dalam Berkhidmat kepada Umat.',
      date: '17 Sept 2025, 05:59 PM',
      author: 'Admin Website BMH',
      image: 'https://picsum.photos/400/300?random=3',
      link: '/majalah-mulia-detail',
    },
    {
      id: 4,
      title: 'Amil Mesti Progresif dalam Berkhidmat kepada Umat.',
      date: '17 Sept 2025, 05:59 PM',
      author: 'Admin Website BMH',
      image: 'https://picsum.photos/400/300?random=4',
      link: '/majalah-mulia-detail',
    },
    {
      id: 1,
      title: 'Amil Mesti Progresif dalam Berkhidmat kepada Umat.',
      date: '17 Sept 2025, 05:59 PM',
      author: 'Admin Website BMH',
      image: 'https://picsum.photos/400/300?random=5',
      link: '/majalah-mulia-detail',
    },
    {
      id: 2,
      title: 'Amil Mesti Progresif dalam Berkhidmat kepada Umat.',
      date: '17 Sept 2025, 05:59 PM',
      author: 'Admin Website BMH',
      image: 'https://picsum.photos/400/300?random=6',
      link: '/majalah-mulia-detail',
    },
    {
      id: 3,
      title: 'Amil Mesti Progresif dalam Berkhidmat kepada Umat.',
      date: '17 Sept 2025, 05:59 PM',
      author: 'Admin Website BMH',
      image: 'https://picsum.photos/400/300?random=7',
      link: '/majalah-mulia-detail',
    },
    {
      id: 4,
      title: 'Amil Mesti Progresif dalam Berkhidmat kepada Umat.',
      date: '17 Sept 2025, 05:59 PM',
      author: 'Admin Website BMH',
      image: 'https://picsum.photos/400/300?random=8',
      link: '/majalah-mulia-detail',
    },
  ];

  return (
    <section className="container px-4 py-20 mx-auto font-poppins bg-slate-100 lg:py-30 max-w-7xl md:px-6 lg:px-12">
      {/* Text Content */}
      <div className="text-left lg:text-left">
        <h2 className="mt-1 text-2xl font-bold md:text-3xl md:font-extrabold text-[#095046]">Majalah Mulia – Menginspirasi dengan Dakwah dan Aksi Nyata</h2>
        <div className="h-2 w-40 bg-[#10B981] mt-1 mb-4"></div>
        <p className="text-sm leading-relaxed text-justify text-gray-700">
          <span className="font-semibold">Majalah Mulia </span>adalah media resmi Lembaga Zakat Baitul Maal Hidayatullah (BMH) yang hadir untuk menyebarkan nilai-nilai kebaikan, dakwah, serta semangat berbagi kepada umat. <br /> Melalui
          artikel, kisah inspiratif, dan liputan program, Majalah Mulia menjadi jendela informasi bagi masyarakat tentang bagaimana zakat, infak, sedekah, dan wakaf dikelola serta disalurkan secara amanah dan profesional. <br /> Kami
          percaya bahwa literasi adalah bagian dari ibadah. Karena itu, setiap edisi Majalah Mulia dirancang tidak hanya untuk dibaca, tetapi juga menjadi inspirasi nyata agar setiap orang dapat terus berkhidmat dan memberi manfaat lebih
          luas bagi sesama.
        </p>
      </div>

      {/* Grid Artikel */}
      <div className="grid gap-6 py-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        {articles.map((article) => (
          <div key={article.id} className="relative overflow-hidden shadow-md rounded-3xl group">
            {/* Gambar */}
            <img src={article.image} alt={article.title} className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-105" />

            {/* Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-xs opacity-80">{article.date}</p>
              <h3 className="text-sm font-semibold sm:text-base">{article.title}</h3>
              <p className="mb-2 text-xs opacity-80">Oleh: {article.author}</p>
              <a href={article.link} className="text-sm font-medium text-yellow-300 hover:underline">
                Read More →
              </a>
            </div>
          </div>
        ))}
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
          <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 text-white transition rounded-lg shadow bg-emerald-500 hover:bg-emerald-600">
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
