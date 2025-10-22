'use client';

import { useState } from 'react';
import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import { InformationCircleIcon, UsersIcon, BuildingOfficeIcon, NewspaperIcon, BookOpenIcon, LightBulbIcon, Bars3Icon, XMarkIcon, BanknotesIcon, CalendarDaysIcon, CalculatorIcon, TruckIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

const profil = [
  { name: 'Tentang Kami', description: 'Kenali lebih dekat visi, misi, dan komitmen BMH dalam membangun peradaban berbasis zakat.', href: '/profil-bmh', icon: InformationCircleIcon },
  { name: 'Jajaran Manajemen', description: 'Temui para penggerak BMH yang berdedikasi mengelola amanah zakat dengan profesional dan transparan.', href: '/jajaran-manajemen', icon: UsersIcon },
  { name: 'Perwakilan', description: 'Temukan kantor BMH di berbagai daerah untuk layanan donasi dan program kebaikan lebih dekat dengan Anda.', href: '/kantor-perwakilan', icon: BuildingOfficeIcon },
  //   { name: 'Perwakilan', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  //   { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
];
const services = [
  {
    name: 'Kalkulator Zakat',
    description: 'Hitung zakatmu dengan mudah sesuai ketentuan syariah.',
    href: '/kalkulator-zakat',
    icon: CalculatorIcon,
  },
  {
    name: 'Jemput Zakat',
    description: 'Layanan penjemputan zakat langsung ke lokasi Anda.',
    href: '/jemput-zakat',
    icon: TruckIcon,
  },
];
const publikasi = [
  {
    name: 'Berita',
    description: 'Kumpulan berita terbaru seputar aktivitas, program, dan capaian BMH untuk masyarakat.',
    href: '/berita-bmh',
    icon: NewspaperIcon,
  },
  {
    name: 'PID',
    description: 'Publikasi Inspirasi Dakwah (PID) berisi tulisan keislaman, renungan, dan dakwah bil qalam.',
    href: '/under-construction',
    icon: BookOpenIcon,
  },
  {
    name: 'Riset & Pengembangan',
    description: 'Laporan riset dan inovasi pengembangan program BMH agar lebih tepat sasaran dan bermanfaat.',
    href: '/riset-pengembangan',
    icon: LightBulbIcon,
  },
  {
    name: 'Laporan Keuangan',
    description: 'Transparansi pengelolaan dana BMH yang disajikan dalam bentuk laporan keuangan resmi dan dapat diakses publik.',
    href: '/laporan-keuangan',
    icon: BanknotesIcon,
  },
  {
    name: 'Laporan Tahunan',
    description: 'Rangkuman kegiatan, capaian, dan kontribusi BMH selama satu tahun penuh dalam satu dokumen komprehensif.',
    href: '/laporan-tahunan',
    icon: CalendarDaysIcon,
  },
];

const servicesMenu = [
  {
    names: 'Kalkulator Zakat',
    descriptions: 'Hitung zakatmu dengan mudah sesuai ketentuan syariah.',
    hrefs: '/kalkulator-zakat',
    icons: CalculatorIcon,
  },
  {
    names: 'Jemput Zakat',
    descriptions: 'Layanan penjemputan zakat langsung ke lokasi Anda.',
    hrefs: '/jemput-zakat',
    icons: TruckIcon,
  },
];

const callsToAction = [
  { name: 'Bukti Nyata', href: 'https://youtu.be/toD10MqZkcQ?si=xMYiBElCAau7HthJ', icon: PlayCircleIcon },
  { name: 'Kontak', href: 'https://wa.me/6285697779888', icon: PhoneIcon },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full shadow-lg bg-white/70 font-poppins backdrop-blur-sm shadow-black/5">
      <nav aria-label="Global" className="flex items-center justify-between p-3 px-4 mx-auto max-w-7xl md:px-6 lg:px-8 ">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">BMH</span>
            <img alt="/" src="/images/logo/nav.png" className="w-auto h-8" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-semibold transition-all duration-200 text-sm/6 ${
                isActive
                  ? 'text-[#39BA87]' // warna hijau muda kalau aktif
                  : 'text-[#095046] hover:text-[#39BA87]' // default hijau tua + hover
              }`
            }
          >
            Beranda
          </NavLink>
          <Popover className="relative">
            <PopoverButton className="flex items-center font-semibold text-[#095046] hover:text-[#39BA87] transition-all duration-200 gap-x-1 text-sm/6">
              Profil
              <ChevronDownIcon aria-hidden="true" className="flex-none text-gray-400 size-5" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute z-10 w-screen max-w-md mt-3 overflow-hidden transition -translate-x-1/2 bg-white shadow-lg left-1/2 rounded-3xl outline-1 outline-[#095046]/5 data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {profil.map((item) => (
                  <div key={item.name} className="relative flex items-center p-4 rounded-lg group gap-x-6 text-sm/6 hover:bg-gray-50">
                    <div className="flex items-center justify-center flex-none rounded-lg size-11 bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="text-gray-600 size-6 group-hover:text-[#39BA87] transition-all duration-20" />
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
          <Popover className="relative">
            <PopoverButton className="flex items-center font-semibold text-[#095046] hover:text-[#39BA87] transition-all duration-200 gap-x-1 text-sm/6">
              Layanan
              <ChevronDownIcon aria-hidden="true" className="flex-none text-gray-400 size-5" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute z-10 w-screen max-w-md mt-3 overflow-hidden transition -translate-x-1/2 bg-white shadow-lg left-1/2 rounded-3xl outline-1 outline-[#095046]/5 data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
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

          {/* <a href="/kalkulator-zakat" className="font-semibold text-[#095046] hover:text-[#39BA87] transition-all duration-200 text-sm/6">
            Kalkulator Zakat
          </a>
          <a href="/jemput-zakat" className="font-semibold text-[#095046] hover:text-[#39BA87] transition-all duration-200 text-sm/6">
            Jemput Zakat
          </a> */}
          <a href="https://berbagi.bmh.or.id/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#095046] hover:text-[#39BA87] transition-all duration-200 text-sm/6">
            Donasi
          </a>

          <NavLink
            to="/majalah-mulia"
            className={({ isActive }) =>
              `font-semibold transition-all duration-200 text-sm/6 ${
                isActive
                  ? 'text-[#39BA87]' // warna hijau muda kalau aktif
                  : 'text-[#095046] hover:text-[#39BA87]' // default hijau tua + hover
              }`
            }
          >
            Majalah Mulia
          </NavLink>

          <Popover className="relative">
            <PopoverButton className="flex items-center font-semibold text-[#095046] hover:text-[#39BA87] transition-all duration-200 gap-x-1 text-sm/6">
              Publikasi
              <ChevronDownIcon aria-hidden="true" className="flex-none text-gray-400 size-5" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute z-10 w-screen max-w-md mt-3 overflow-hidden transition -translate-x-1/2 bg-white shadow-lg left-1/2 rounded-3xl outline-1 outline-[#095046]/5 data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
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
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/double-slider-login"
            className="px-4 py-1 font-semibold text-white transition-all duration-200 rounded-full shadow-lg bg-[#39BA87] hover:bg-[#269e6e] border-small border-white/50 focus:outline-2 focus:outline-offset-2 focus:outline-emerald-200"
          >
            Log in
          </a>
        </div>
        s
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full p-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-[#095046]/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="Logo BMH" src="/images/logo/nav.png" className="w-auto h-8" />
            </a>
            <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6 space-y-2">
                <a href="/" className="block px-3 py-2 -mx-3 font-semibold text-[#095046] hover:text-[#39BA87] transition-all duration-200 rounded-xl text-base/7 hover:bg-gray-50">
                  Beranda
                </a>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-xl py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#095046] hover:text-[#39BA87] transition-all duration-200 hover:bg-gray-50">
                    Profil
                    <ChevronDownIcon aria-hidden="true" className="flex-none size-5 group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...profil, ...callsToAction].map((item) => (
                      <DisclosureButton key={item.name} as="a" href={item.href} className="block py-2 pl-6 pr-3 font-semibold text-[#095046] hover:text-[#39BA87] transition-all duration-200 rounded-xl text-sm/7 hover:bg-gray-50">
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-xl py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#095046] hover:text-[#39BA87] transition-all duration-200 hover:bg-gray-50">
                    Layanan
                    <ChevronDownIcon aria-hidden="true" className="flex-none size-5 group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...servicesMenu].map((item) => (
                      <DisclosureButton key={item.names} as="a" href={item.hrefs} className="block py-2 pl-6 pr-3 font-semibold text-[#095046] hover:text-[#39BA87] transition-all duration-200 rounded-xl text-sm/7 hover:bg-gray-50">
                        {item.names}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>

                <a href="https://berbagi.bmh.or.id/" className="block px-3 py-2 -mx-3 font-semibold text-[#095046] hover:text-[#39BA87] transition-all duration-200 rounded-xl text-base/7 hover:bg-gray-50">
                  Donasi
                </a>
                <a href="/majalah-mulia" className="block px-3 py-2 -mx-3 font-semibold text-[#095046] hover:text-[#39BA87] transition-all duration-200 rounded-xl text-base/7 hover:bg-gray-50">
                  Majalah Mulia
                </a>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-xl py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#095046] hover:text-[#39BA87] transition-all duration-200 hover:bg-gray-50">
                    Publikasi
                    <ChevronDownIcon aria-hidden="true" className="flex-none size-5 group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...publikasi].map((item) => (
                      <DisclosureButton key={item.name} as="a" href={item.href} className="block py-2 pl-6 pr-3 font-semibold text-[#095046] hover:text-[#39BA87] transition-all duration-200 rounded-xl text-sm/7 hover:bg-gray-50">
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
              </div>
              <div className="py-6">
                <a href="/double-slider-login" className="-mx-3 block rounded-xl px-3 py-2.5 text-base/7 font-semibold text-[#095046] hover:text-[#39BA87] transition-all duration-200 hover:bg-gray-50">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
