'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import { InformationCircleIcon, UsersIcon, BuildingOfficeIcon, NewspaperIcon, BookOpenIcon, LightBulbIcon, Bars3Icon, XMarkIcon, BanknotesIcon, CalendarDaysIcon, CalculatorIcon, TruckIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

const profil = [
  { name: 'Tentang Kami', description: 'Kenali lebih dekat visi, misi, dan komitmen BMH dalam membangun peradaban berbasis zakat.', href: '/profil-bmh', icon: InformationCircleIcon },
  { name: 'Jajaran Manajemen', description: 'Temui para penggerak BMH yang berdedikasi mengelola amanah zakat dengan profesional dan transparan.', href: '/jajaran-manajemen', icon: UsersIcon },
  { name: 'Perwakilan', description: 'Temukan kantor BMH di berbagai daerah untuk layanan donasi dan program kebaikan lebih dekat dengan Anda.', href: '/kantor-perwakilan', icon: BuildingOfficeIcon },
];

const services = [
  { name: 'Kalkulator Zakat', description: 'Hitung zakatmu dengan mudah sesuai ketentuan syariah.', href: '/kalkulator-zakat', icon: CalculatorIcon },
  { name: 'Jemput Zakat', description: 'Layanan penjemputan zakat langsung ke lokasi Anda.', href: '/jemput-zakat', icon: TruckIcon },
];

const publikasi = [
  { name: 'Berita', description: 'Kumpulan berita terbaru seputar aktivitas, program, dan capaian BMH.', href: '/berita-bmh', icon: NewspaperIcon },
  { name: 'PID', description: 'Publikasi Inspirasi Dakwah (PID) berisi tulisan keislaman dan dakwah bil qalam.', href: '/under-construction', icon: BookOpenIcon },
  { name: 'Riset & Pengembangan', description: 'Laporan riset dan inovasi program BMH agar lebih tepat sasaran.', href: '/riset-pengembangan', icon: LightBulbIcon },
  { name: 'Laporan Keuangan', description: 'Transparansi pengelolaan dana BMH dalam laporan keuangan publik.', href: '/laporan-keuangan', icon: BanknotesIcon },
  { name: 'Laporan Tahunan', description: 'Rangkuman kegiatan dan capaian BMH selama satu tahun penuh.', href: '/laporan-tahunan', icon: CalendarDaysIcon },
];

const callsToAction = [
  { name: 'Bukti Nyata', href: 'https://youtu.be/toD10MqZkcQ?si=xMYiBElCAau7HthJ', icon: PlayCircleIcon },
  { name: 'Kontak', href: 'https://wa.me/6285697779888', icon: PhoneIcon },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // 🟢 state untuk deteksi scroll

  // 🟢 Efek: ubah state saat user scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full font-poppins transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-md shadow-black/5' // 🟢 Saat discroll
          : 'bg-transparent shadow-none' // 🟢 Saat di posisi atas
      }`}
    >
      <nav aria-label="Global" className="flex items-center justify-between p-3 px-4 mx-auto max-w-7xl md:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">BMH</span>
            <img alt="/" src="/images/logo/nav.png" className="w-auto h-8" />
          </a>
        </div>

        {/* Tombol Mobile */}
        <div className="flex lg:hidden">
          <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Menu Desktop */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <NavLink to="/" className={({ isActive }) => `font-semibold transition-all duration-200 text-sm/6 ${isActive ? 'text-[#39BA87]' : 'text-[#095046] hover:text-[#39BA87]'}`}>
            Beranda
          </NavLink>

          {/* === PROFIL === */}
          <Popover className="relative">
            <PopoverButton className="flex items-center font-semibold text-[#095046] hover:text-[#39BA87] transition-all duration-200 gap-x-1 text-sm/6">
              Profil
              <ChevronDownIcon aria-hidden="true" className="flex-none text-gray-400 size-5" />
            </PopoverButton>

            <PopoverPanel transition className="absolute z-10 w-screen max-w-md mt-3 overflow-hidden transition -translate-x-1/2 bg-white shadow-lg left-1/2 rounded-3xl outline-1 outline-[#095046]/5">
              <div className="p-4">
                {profil.map((item) => (
                  <div key={item.name} className="relative flex items-center p-4 rounded-lg group gap-x-6 text-sm/6 hover:bg-gray-50">
                    <div className="flex items-center justify-center flex-none rounded-lg size-11 bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="text-gray-600 size-6 group-hover:text-[#39BA87] transition-all duration-200" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-[#095046] hover:text-[#39BA87] transition-all duration-200">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-xs text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-[#095046]/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a key={item.name} href={item.href} target="_blank" className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-[#095046] hover:text-[#39BA87] transition-all duration-200 hover:bg-gray-100">
                    <item.icon aria-hidden="true" className="flex-none text-gray-400 size-5" />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          {/* === LAYANAN === */}
          <Popover className="relative">
            <PopoverButton className="flex items-center font-semibold text-[#095046] hover:text-[#39BA87] transition-all duration-200 gap-x-1 text-sm/6">
              Layanan
              <ChevronDownIcon aria-hidden="true" className="flex-none text-gray-400 size-5" />
            </PopoverButton>

            <PopoverPanel transition className="absolute z-10 w-screen max-w-md mt-3 overflow-hidden transition -translate-x-1/2 bg-white shadow-lg left-1/2 rounded-3xl outline-1 outline-[#095046]/5">
              <div className="p-4">
                {services.map((item) => (
                  <div key={item.name} className="relative flex items-center p-4 rounded-lg group gap-x-6 text-sm/6 hover:bg-gray-50">
                    <div className="flex items-center justify-center flex-none rounded-lg size-11 bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="text-gray-600 size-6 group-hover:text-[#39BA87] transition-all duration-200" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-[#095046] hover:text-[#39BA87] transition-all duration-200">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-xs text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          {/* Menu lain */}
          <a href="https://berbagi.bmh.or.id/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#095046] hover:text-[#39BA87] transition-all duration-200 text-sm/6">
            Donasi
          </a>

          <NavLink to="/majalah-mulia" className={({ isActive }) => `font-semibold transition-all duration-200 text-sm/6 ${isActive ? 'text-[#39BA87]' : 'text-[#095046] hover:text-[#39BA87]'}`}>
            Majalah Mulia
          </NavLink>

          {/* === PUBLIKASI === */}
          <Popover className="relative">
            <PopoverButton className="flex items-center font-semibold text-[#095046] hover:text-[#39BA87] transition-all duration-200 gap-x-1 text-sm/6">
              Publikasi
              <ChevronDownIcon aria-hidden="true" className="flex-none text-gray-400 size-5" />
            </PopoverButton>

            <PopoverPanel transition className="absolute z-10 w-screen max-w-md mt-3 overflow-hidden transition -translate-x-1/2 bg-white shadow-lg left-1/2 rounded-3xl outline-1 outline-[#095046]/5">
              <div className="p-4">
                {publikasi.map((item) => (
                  <div key={item.name} className="relative flex items-center p-4 rounded-lg group gap-x-6 text-sm/6 hover:bg-gray-50">
                    <div className="flex items-center justify-center flex-none rounded-lg size-11 bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="text-gray-600 size-6 group-hover:text-[#39BA87] transition-all duration-200" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-[#095046] hover:text-[#39BA87] transition-all duration-200">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-xs text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
        </PopoverGroup>

        {/* Tombol Login */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/double-slider-login"
            className="px-4 py-1 font-semibold text-white transition-all duration-200 border rounded-full shadow-lg bg-gradient-to-tr from-emerald-600 to-emerald-400 hover:from-emerald-500 hover:to-emerald-300 border-white/50 focus:outline-2 focus:outline-offset-2 focus:outline-emerald-200"
          >
            Log in
          </a>
        </div>
      </nav>
    </header>
  );
}
