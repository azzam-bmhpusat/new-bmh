import CountUp from '../ReactBits/CountUp/CountUp.jsx';

export default function JejakKebaikan() {
  return (
    <section className="p-8 mx-0 bg-white shadow-sm md:mx-5 rounded-3xl md:p-5 font-poppins">
      {/* Judul */}
      <div className="container py-10 mx-auto max-w-7xl">
        <div className="py-5 mb-10">
          <h2 className="text-3xl font-bold text-emerald-900 md:text-4xl">Jejak Kebaikan Kita</h2>
          <div className="w-32 h-2 mt-2 bg-[#39BA87]"></div>
        </div>

        {/* Konten Utama */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Gambar Indonesia */}
          <div className="flex justify-center bg-cover">
            <img src="/images/beranda/map.png" alt="Peta Indonesia" className="max-w-full" />
          </div>

          {/* Teks Menjangkau Nusantara */}
          <div>
            <h3 className="text-2xl font-bold m text-emerald-900">Menjangkau Nusantara</h3>
            <div className="w-32 h-2 my-2 rounded-none bg-[#FEB738]"></div>
            <p className="mb-4 text-sm leading-relaxed text-gray-600 ">Bersama Para Dermawan, Kami Telah Menebar Harapan Dan Kebaikan Ke Seluruh Pelosok Indonesia.</p>
            <p className="mb-2 leading-relaxed text-gray-600">Telah Menyentuh Lebih Dari:</p>
            <p className="text-3xl font-bold text-[#39BA87]">50,3 Juta Jiwa</p>
          </div>
        </div>

        {/* Statistik Bawah */}
        <div className="grid grid-cols-1 gap-4 mt-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 text-center border rounded-xl border-slate-200">
            <p className="text-[#095046] font-medium">Total Donasi Tersalurkan</p>
            <span className="text-2xl font-bold text-[#39BA87]">Rp. </span>
            <CountUp from={744665454225} to={744675454225} separator="," direction="up" duration={1} className="text-2xl font-bold count-up-text text-[#39BA87]" />
            <p className="mt-1 text-xs text-gray-500 md:text-sm">Setiap Rupiah Adalah Harapan Yang Nyata.</p>
          </div>

          <div className="p-6 text-center border rounded-xl border-slate-200">
            <p className="text-[#095046] font-medium">Penerima Manfaat</p>
            <CountUp from={0} to={7523658} separator="," direction="up" duration={1} className="text-2xl font-bold count-up-text text-[#39BA87]" />
            <span className="text-2xl font-bold text-[#39BA87]"> Orang</span>
            <p className="mt-1 text-xs text-gray-500 md:text-sm">Hidup Mereka Berubah Berkat Dukungan Anda.</p>
          </div>

          <div className="p-6 text-center border rounded-xl border-slate-200">
            <p className="text-[#095046] font-medium">Program Kebaikan</p>
            <CountUp from={0} to={100} separator="," direction="up" duration={1} className="text-2xl font-bold count-up-text text-[#39BA87]" />
            <span className="text-2xl font-bold text-[#39BA87]">+ Program</span>
            <p className="mt-1 text-xs text-gray-500 md:text-sm">Ratusan Aksi Nyata Untuk Masa Depan Yang Lebih Cerah.</p>
          </div>

          <div className="p-6 text-center border rounded-xl border-slate-200">
            <p className="text-[#095046] font-medium0">Relawan Hebat</p>
            <CountUp from={0} to={708} separator="," direction="up" duration={1} className="text-2xl font-bold count-up-text text-[#39BA87]" />
            <span className="text-2xl font-bold text-[#39BA87]"> Orang</span>
            <p className="mt-1 text-xs text-gray-500 md:text-sm">Pejuang Tanpa Pamrih Di Garda Depan Kemanusiaan.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
