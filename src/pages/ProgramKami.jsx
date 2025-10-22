import { GraduationCap, Home, Coins, Heart, Leaf, Stethoscope } from 'lucide-react';
import SpotlightCard from '../ReactBits/SpotlightCard/SpotlightCard.jsx';

export default function ProgramKami() {
  const programs = [
    { icon: <GraduationCap className="w-6 h-6 font-bold text-emerald-500" />, title: 'Dakwah' },
    { icon: <Home className="w-6 h-6 font-bold text-emerald-500" />, title: 'Pendidikan' },
    { icon: <Coins className="w-6 h-6 font-bold text-emerald-500" />, title: 'Ekonomi' },
    { icon: <Heart className="w-6 h-6 font-bold text-emerald-500" />, title: 'Sosial Kemanusiaan' },
    { icon: <Leaf className="w-6 h-6 font-bold text-emerald-500" />, title: 'Lingkungan' },
    { icon: <Stethoscope className="w-6 h-6 font-bold text-emerald-500" />, title: 'Kesehatan' },
  ];

  return (
    <section className="w-full px-5 font-poppins">
      <div className="container mx-auto max-w-7xl">
        {/* Judul */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-[#095046] md:text-4xl">Program Kami</h2>
          <div className="h-2 mt-2 w-28 bg-amber-400"></div>
        </div>

        {/* Grid Program */}
        <div className="grid grid-cols-2 gap-4 mb-12 md:grid-cols-3 lg:grid-cols-3">
          {programs.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 p-4 transition border-1 border-slate-200 rounded-xl hover:border-slate-300">
              <span className="text-xl text-green-600">{item.icon}</span>
              <p className="text-xs md:text-sm font-semibold text-[#095046]">{item.title}</p>
            </div>
          ))}
        </div>

        {/* Kartu Bantuan */}
        <div className="flex flex-col items-center gap-6 p-4 border border-slate-200 rounded-2xl md:flex-row md:p-4 lg:p-6">
          {/* Kiri */}
          <div className="flex flex-col items-center justify-center flex-1 w-full gap-4 p-6 text-white bg-gradient-to-r from-amber-400 to-amber-300 rounded-xl md:flex-row md:text-left">
            <div>
              <a href="https://berbagi.bmh.or.id/" target="blank" className="px-5 py-2 font-semibold text-yellow-500 transition bg-white shadow rounded-xl hover:bg-slate-50 hover:cursor-pointer">
                Bantu Sekarang!
              </a>
              <p className="text-sm text-center mt-7 md:text-left">
                Jadilah bagian dari perubahan — satu donasi kecil, <span className="font-bold">berdampak besar.</span>
              </p>
            </div>
          </div>

          {/* Kanan */}
          <div className="flex flex-col flex-1 w-full gap-3 md:gap-4">
            <p className="text-sm text-center text-[#095046] md:text-left">Masih bingung cara berdonasi? Tim kami siap membantu kamu</p>
            <div className="flex items-center justify-center gap-2 px-3 py-2 text-sm text-gray-700 transition border rounded-lg md:justify-start border-slate-200 hover:bg-slate-200 hover:cursor-pointer">
              <span className="font-semibold">WhatsApp:</span> 021 - 7975770
            </div>
            <div className="flex items-center justify-center gap-2 px-3 py-2 text-sm text-gray-700 transition border rounded-lg md:justify-start border-slate-200 hover:bg-slate-200 hover:cursor-pointer">
              <span className="font-semibold">Email:</span> sekretariat@bmh.or.id
            </div>
          </div>
        </div>

        {/* ReactBits */}
        {/* <SpotlightCard
        className="flex flex-col items-center gap-6 p-4 mt-20 border custom-spotlight-card border-slate-200 rounded-2xl md:flex-row md:p-4 lg:p-6"
        spotlightColor="rgba(57, 186, 135, 0.1)
"
      >
        
        <div className="flex flex-col items-center justify-center flex-1 w-full gap-4 p-6 text-white bg-gradient-to-r from-amber-400 to-amber-300 rounded-xl md:flex-row md:text-left">
          <div>
            <a href="https://berbagi.bmh.or.id/" target="blank" className="px-5 py-2 font-semibold text-yellow-500 transition bg-white shadow rounded-xl hover:bg-slate-50 hover:cursor-pointer">
              Bantu Sekarang!
            </a>
            <p className="mt-3 text-sm text-center md:text-left">
              Jadilah bagian dari perubahan — satu donasi kecil, <span className="font-bold">berdampak besar.</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col flex-1 w-full gap-3 md:gap-4">
          <p className="text-sm text-center text-[#095046] md:text-left">Masih bingung cara berdonasi? Tim kami siap membantu kamu</p>
          <div className="flex items-center justify-center gap-2 px-3 py-2 text-sm text-gray-700 transition border rounded-lg md:justify-start border-slate-200 hover:bg-slate-200 hover:cursor-pointer">
            <span className="font-semibold">WhatsApp:</span> 021 - 7975770
          </div>
          <div className="flex items-center justify-center gap-2 px-3 py-2 text-sm text-gray-700 transition border rounded-lg md:justify-start border-slate-200 hover:bg-slate-200 hover:cursor-pointer">
            <span className="font-semibold">Email:</span> sekretariat@bmh.or.id
          </div>
        </div>
      </SpotlightCard> */}
        {/* <div className="flex flex-col items-center gap-6 p-6 border border-slate-200 md:flex-row rounded-2xl">
       
        <div className="flex flex-col items-center flex-1 gap-4 p-6 text-white md:flex-row bg-gradient-to-r from-amber-400 to-amber-300 rounded-xl">
          
          <div>
            <button className="px-4 py-2 font-semibold text-yellow-500 bg-white shadow hover:bg-slate-50 rounded-xl hover:cursor-pointer">Bantu Sekarang!</button>
            <p className="mt-2 text-sm">
              Jadilah bagian dari perubahan — satu donasi kecil, <span className="font-bold">berdampak besar.</span>
            </p>
          </div>
        </div>

        
        <div className="flex flex-col flex-1 gap-2">
          <p className="text-sm text-[#095046]">Masih bingung cara berdonasi?, Tim kami siap membantu kamu</p>
          <div className="flex items-center gap-2 px-3 py-2 text-sm text-center text-gray-700 rounded-lg border-1 border-slate-200 hover:bg-slate-200 hover:cursor-pointer">
            <span className="font-semibold ">WhatsApp:</span> 021 - 7975770
          </div>
          <div className="flex items-center gap-2 px-3 py-2 text-sm text-center text-gray-700 rounded-lg border-1 border-slate-200 hover:bg-slate-200 hover:cursor-pointer">
            <span className="font-semibold ">Email:</span> sekretariat@bmh.or.id
          </div>
        </div>
      </div> */}
      </div>
    </section>
  );
}
