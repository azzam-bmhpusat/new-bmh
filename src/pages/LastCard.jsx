const DataCard = [
  {
    id: 1,
    title: 'Mengalirkan Kebaikan Lewat Zakat Produktif',
    desc: 'Bagaimana zakat tidak hanya untuk konsumsi sesaat, tapi bisa memberdayakan masyarakat dhuafa agar mandiri secara ekonomi.',
  },
  {
    id: 2,
    title: 'Santri Qur’an, Generasi Harapan Bangsa',
    desc: 'BMH mendukung lahirnya generasi Qur’ani lewat program pendidikan dan beasiswa untuk para santri penghafal Al-Qur’an.',
  },
  {
    id: 3,
    title: 'Dampak Nyata Sedekah untuk Palestina',
    desc: 'Setiap bantuan yang Anda titipkan, hadir sebagai wujud solidaritas kemanusiaan untuk saudara kita di Palestina.',
  },
  {
    id: 4,
    title: 'Ramadhan: Momentum Terbaik untuk Berbagi',
    desc: 'Ramadhan bukan sekadar ibadah, tapi juga momen terbaik untuk berbagi melalui zakat, infak, dan sedekah.',
  },
];

export default function LastCard() {
  return (
    <section className="w-full px-5 font-poppins">
      <div className="container mx-auto max-w-7xl">
        {/* Judul */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-start md:text-4xl text-emerald-900">Blog</h2>
          <div className="w-32 h-2 mt-2 bg-[#FEB738]"></div>
        </div>
        {/* Grid Card */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {DataCard.map((item) => (
            <div key={item.id} className="flex flex-col justify-between p-6 transition-shadow duration-300 bg-white shadow-lg rounded-2xl hover:shadow-2xl">
              <div>
                <h2 className="mb-3 text-lg font-semibold text-emerald-600">{item.title}</h2>
                <p className="text-xs md:text-sm text-slate-600">{item.desc}</p>
              </div>
              <button className="self-start px-4 py-2 mt-6 text-xs font-medium text-white rounded-xl bg-[#095046] hover:bg-emerald-800">Selengkapnya</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
