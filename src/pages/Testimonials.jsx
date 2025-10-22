export default function Testimonials() {
  return (
    <section className="relative px-6 py-10 overflow-hidden bg-slate-100 isolate lg:px-8 font-poppins">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-emerald-100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-slate-100 shadow-xl ring-1 shadow-emerald-600/10 ring-emerald-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="max-w-2xl mx-auto lg:max-w-4xl">
        <img alt="" src="/images/logo/nav.png" className="h-12 mx-auto" />
        <figure className="mt-10">
          <blockquote className="font-semibold text-center text-gray-900 text-xl/8 sm:text-2xl/9">
            <p>
              “Alhamdulillah, saya sangat bersyukur bisa menunaikan zakat melalui BMH. Prosesnya mudah, amanah, dan transparan. Melihat laporan penyaluran yang jelas membuat saya yakin bahwa setiap rupiah benar-benar sampai kepada yang
              berhak.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" className="mx-auto rounded-full size-10" />
            <div className="flex items-center justify-center mt-4 space-x-3 text-base">
              <div className="font-semibold text-gray-900">Aisyah Rahma</div>
              <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">Donatur BMH Surabaya</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
