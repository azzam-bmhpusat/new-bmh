import React, { useState } from 'react';

const FAQZakat = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Apa itu Lembaga Zakat Baitul Maal Hidayatullah (BMH)?',
      answer:
        'BMH adalah lembaga amil zakat yang menghimpun dan menyalurkan zakat, infak, sedekah, serta wakaf sesuai prinsip syariah. Kami fokus pada program pendidikan, kesehatan, sosial, dan pemberdayaan ekonomi untuk mustahik yang membutuhkan.',
    },
    {
      question: 'Bagaimana cara menyalurkan zakat, infak, atau sedekah melalui BMH?',
      answer:
        'Anda dapat berdonasi melalui fitur donasi online di website resmi, transfer ke rekening resmi BMH, atau melalui kanal pembayaran resmi yang kami sediakan (mis. QRIS / e-wallet bila tersedia). Pastikan selalu menggunakan info rekening atau tombol donasi yang tercantum di situs resmi untuk keamanan transaksi.',
    },
    {
      question: 'Apakah penyaluran dana BMH sudah sesuai syariah?',
      answer:
        'Ya. Seluruh kebijakan dan penyaluran dana diawasi oleh Dewan Pengawas Syariah kami dan disusun sesuai ketentuan syariah serta pedoman amil zakat nasional. Selain itu, laporan keuangan dan program kami dapat diaudit oleh pihak independen untuk memastikan kepatuhan dan transparansi.',
    },
    {
      question: 'Bagaimana saya bisa memantau penyaluran dan mendapatkan bukti donasi?',
      answer:
        'Setiap donatur akan menerima bukti penerimaan (kwitansi/receipt) setelah transaksi. Donatur juga dapat memantau riwayat donasi dan laporan penyaluran melalui portal donor atau menerima laporan berkala via email. Untuk informasi lebih rinci tentang penerima dan dampak program, silakan cek laporan kegiatan kami di website.',
    },
    {
      question: 'Apakah saya bisa berdonasi untuk program tertentu atau menjadi relawan/mitra?',
      answer:
        'Bisa. Jika Anda ingin menyalurkan dana ke program khusus (mis. beasiswa, kesehatan, bencana) atau bergabung sebagai relawan/mitra, hubungi tim kami melalui halaman Kontak / Form Mitra di website. Tim akan membantu prosedur, syarat, dan mekanisme pelaksanaan sesuai kebutuhan program.',
    },
  ];

  return (
    <section className="w-full px-5 font-poppins">
      <div className="container mx-auto max-w-7xl">
        {/* Text Content */}
        <div className="mb-10 text-left lg:text-left">
          <h2 className="mt-1 text-2xl font-bold md:text-3xl md:font-extrabold text-[#095046]">Pertanyaan Umum (FAQ)</h2>
          <div className="h-2 w-40 bg-[#FEB738] mt-1 mb-4"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className={`rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-[#39BA87] text-white' : 'bg-gray-50'}`}>
              <button onClick={() => toggleFAQ(index)} className="flex items-center justify-between w-full px-6 py-3 mt-4 text-left focus:outline-none">
                <span className={`font-medium ${openIndex === index ? 'text-white' : 'text-[#095046]'}`}>{faq.question}</span>

                {/* span pakai transform supaya rotate bekerja */}
                <span className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className={`${openIndex === index ? 'text-white' : 'text-[#FEB738]'}`} aria-hidden="true" focusable="false">
                    {/* chevron stroke-only */}
                    <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>

              <div className={`px-6 pb-4 transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <p className="text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQZakat;
