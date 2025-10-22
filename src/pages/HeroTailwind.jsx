'use client';

export default function HeroTailwind() {
  return (
    <div className="flex items-center min-h-screen bg-slate-100 font-poppins">
      <div className="relative w-full px-6 isolate lg:px-8">
        {/* Background atas */}
        <div aria-hidden="true" className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80">
          <div
            style={{
              clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffbd4c] to-[#53ffba] opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
          />
        </div>

        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center max-w-4xl min-h-[70vh] mx-auto text-center">
          {/* Tagline */}
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative px-3 py-1 text-sm text-gray-600 rounded-full ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Menebar Manfaat, Membangun Umat.{' '}
              <a href="#bukti-nyata" className="font-semibold text-[#39BA87]">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Judul */}
          <h1 className="max-w-3xl mx-auto text-4xl font-semibold leading-snug tracking-tight text-gray-900 md:font-bold text-balance sm:text-3xl md:text-4xl lg:text-5xl">
            Beramal Lebih Mudah, <br className="hidden sm:block" /> Berkah Lebih Luas.
          </h1>

          {/* Deskripsi */}
          <p className="max-w-2xl mt-8 text-sm leading-relaxed text-gray-600 sm:text-lg md:text-xl">
            Bersama BMH, wujudkan kepedulian yang nyata untuk dakwah, pendidikan, sosial, dan kemanusiaan. Satu klik kebaikanmu hari ini bisa mengubah masa depan banyak orang.
          </p>

          {/* Tombol */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <a
              href="https://berbagi.bmh.or.id/"
              target="_blank"
              className="rounded-xl bg-[#39BA87] px-5 py-3 text-sm sm:text-base font-semibold focus:outline-2 focus:outline-offset-2 focus:outline-emerald-400 text-white shadow-md hover:bg-[#37b683] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#39BA87]"
            >
              Donasi Sekarang
            </a>
            <a href="#program-kami" className="text-sm font-semibold text-gray-700 hover:text-gray-900 sm:text-base">
              Pelajari Program <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Background bawah */}
        <div aria-hidden="true" className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div
            style={{
              clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-[#ffc259] to-[#4cffb7] opacity-50 sm:left-[calc(50%+36rem)] sm:w-[72rem]"
          />
        </div>
      </div>
    </div>
  );
}
