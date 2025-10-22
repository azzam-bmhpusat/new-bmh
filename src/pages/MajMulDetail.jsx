import React from 'react';

const MajMulDetail = ({ title, authors, date, content, images }) => {
  return (
    <section className="container px-4 py-20 mx-auto font-poppins bg-slate-100 lg:py-30 max-w-7xl md:px-6 lg:px-12">
      {/* Title */}
      <div className="text-left lg:text-left">
        <h2 className="mt-1 text-2xl font-bold md:text-3xl md:font-extrabold text-[#095046]">{title}</h2>
        <div className="w-40 h-2 mt-1 mb-4 bg-yellow-500"></div>
      </div>

      <div>
        <img src="https://picsum.photos/400/300?random=3" alt="Image" className="object-cover w-full mb-4 bg-white shadow-md rounded-3xl h-75" />
      </div>

      {/* Author and Date */}
      <p className="mb-2 text-sm text-gray-600">
        By{' '}
        {authors.map((author, index) => (
          <span key={index} className="font-semibold text-gray-800">
            {author}
            {index < authors.length - 1 && ' and '}
          </span>
        ))}{' '}
        • {date}
      </p>

      {/* Konten Utama */}
      <div className="mb-6 text-sm prose prose-lg max-w-none md:text-base">
        {content.map((para, index) => (
          <p key={index} className="mb-4 leading-relaxed text-gray-700">
            {para}
          </p>
        ))}
      </div>

      {/* Gambar Tambahan */}
      {images && images.length > 0 && (
        <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-3">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Article image ${index + 1}`} className="object-cover w-full shadow-md rounded-3xl h-52" />
          ))}
        </div>
      )}
    </section>
  );
};

const ArtikelDetail = () => {
  const data = {
    title: 'Majalah Mulia - Amil Mesti Progresif dalam Berkhidmat kepada Umat',
    authors: ['Melanie Zanona', 'Peter Journey'],
    date: '17 Sept 2025, 05:59 PM',
    content: [
      'Laznas BMH Perwakilan Jawa Tengah menggelar sesi sharing progresivitas mindset bersama Kepala Humas BMH Pusat, Mas Imam Nawawi di Semarang (15/9).',
      'Agenda ini merupakan rangkaian pendampingan liputan dan publikasi bersama Mas Imam selaku Kepala BMH Pusat. Puncaknya kami gelar sesi sharing pekanan yang pas sekali momentumnya,” terang Kadir Prodaya BMH Jawa Tengah, Yusran Yauma.',
      'Pertama, setiap amil harus mampu berpikir untuk akan gambaran yang dapat menjadikan BMH semakin solid, tanggap dan lincah dalam dinamika perubahan yang terus terjadi.',
      'Kedua, setiap amil tidak bisa bekerja atas perspektif yang terbatas. Satu sama lain antar tim harus mampu melakukan sinkronisasi yang cepat bahkan perlu menjadi budaya yang sudah mapan.',
      'Kemudian yang ketiga, jadilah amil yang mampu membangun paradigma berpikir besar. Kita hadir, berhimpun, bersama adalah dalam rangka ikut membangun umat, memberdayakan masyarakat dan mewujudkan Indonesia yang lebih baik.',
    ],
    images: ['https://picsum.photos/400/300?random=2', 'https://picsum.photos/400/300?random=3', 'https://picsum.photos/400/300?random=4'],
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <MajMulDetail {...data} />
    </div>
  );
};

export default ArtikelDetail;
