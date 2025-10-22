import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HiChevronDown } from 'react-icons/hi';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false); // hanya ambil nilainya saja
  const menuRef = useRef();
  const buttonRef = useRef();

  const handleClick = () => {
    setShow(!show);
  };

  let menuActive = show ? 'top-16' : '-top-full'; // muncul dari atas setelah navbar (sekitar 64px)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
        setShow(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const isDesktop = window.innerWidth > 768; // anggap Android di bawah 768px

    if (!isDesktop) return; // nonaktifkan scroll-effect di Android

    const handleScroll = () => {
      if (window.scrollY > 64) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 navbar font-poppins ${scroll ? 'py-3 bg-white/50 backdrop-blur-sm shadow-md' : 'py-4'}`}>
      <div className="container px-4 mx-auto md:px-8 lg:px-16">
        <div className="flex items-center justify-between text-gray-900 navbar-box">
          <div className="flex items-center space-x-2 text-lg logo">
            <Link to="/">
              <img src="/images/logo/nav.png" alt="BMH Logo" className="h-6 transition-transform duration-300 ease-in-out cursor-pointer scale-179 hover:scale-185" />
            </Link>
          </div>
          <ul
            ref={menuRef}
            className={`fixed ${menuActive} left-0 right-0 flex flex-col gap-4 px-4 py-6 font-medium text-slate-800 transition-all duration-500 ease-in-out bg-white lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:top-0 md:translate-y-0 md:text-[#095046] md:p-0 md:m-0 md:transition-none z-40`}
          >
            <li className="flex items-center gap-3">
              <i class="ri-home-5-line text-2xl md:hidden block"></i>
              <a href="/" className="transition-all duration-100 ease-in hover:text-[#39BA87] text-[#095046]">
                Beranda
              </a>
            </li>
            <li className="relative flex items-center gap-3 group">
              <i class="ri-building-line text-2xl md:hidden block rounded"></i>
              <button className="flex items-center gap-1 transition-all duration-100 ease-in hover:text-[#39BA87] text-[#095046]">
                Profil
                <HiChevronDown className="text-base" />
              </button>
              <ul className="absolute left-0 hidden p-2 space-y-2 bg-white rounded-2xl shadow-md text-[#095046] group-hover:block top-full min-w-[12rem]">
                <li>
                  <Link to="/profil-bmh" className="block px-4 py-2 transition-all duration-100 ease-in rounded-xl hover:bg-slate-100 hover:text-[#39BA87] text-[#095046]">
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <a href="/jajaran-manajemen" className="block px-4 py-2 transition-all duration-100 ease-in rounded-xl hover:bg-slate-100 hover:text-[#39BA87] text-[#095046]">
                    Jajaran Manajemen
                  </a>
                </li>
                <li>
                  <a href="/kantor-perwakilan" className="block px-4 py-2 transition-all duration-100 ease-in rounded-xl hover:bg-slate-100 hover:text-[#39BA87] text-[#095046]">
                    Perwakilan
                  </a>
                </li>
              </ul>
            </li>
            <li className="relative flex items-center gap-3 group">
              <i class="ri-service-line text-2xl md:hidden block"></i>
              <button className="flex items-center gap-1 transition-all duration-100 ease-in hover:text-[#39BA87] text-[#095046]">
                Layanan
                <HiChevronDown className="text-base" />
              </button>
              <ul className="absolute left-0 hidden p-2 space-y-2 bg-white rounded-2xl shadow-md text-[#095046] group-hover:block top-full min-w-[12rem]">
                <li>
                  <a href="/kalkulator-zakat" className="block px-4 py-2 transition-all duration-100 ease-in rounded-xl hover:bg-slate-100 hover:text-[#39BA87] text-[#095046]">
                    Kalkulator Zakat
                  </a>
                </li>
                <li>
                  <a href="/jemput-zakat" className="block px-4 py-2 transition-all duration-100 ease-in rounded-xl hover:bg-slate-100 hover:text-[#39BA87] text-[#095046]">
                    Jemput Zakat
                  </a>
                </li>
              </ul>
            </li>
            <li className="flex items-center gap-3">
              <i className="block text-2xl ri-book-open-line md:hidden"></i>
              <Link to="https://berbagi.bmh.or.id/" className="px-4 py-1 border rounded-full shadow-lg text-emerald-600 border-white/50 animate-blinkLed">
                Donasi
              </Link>
            </li>

            {/* <li className="flex items-center gap-3">
              <i className="block text-2xl ri-book-open-line md:hidden"></i>
              <Link to="/donasi-bmh" className="px-4 py-1 bg-linear-to-tr from-emerald-100 to-emerald-50 border rounded-full shadow-lg border-white/50 animate-blinkLed text-[#095046]">
                Donasi
              </Link>
            </li> */}

            <li className="flex items-center gap-3">
              <i class="ri-book-open-line text-2xl md:hidden block"></i>
              <Link to="/majalah-mulia" className="transition-all duration-100 ease-in hover:text-[#39BA87] text-[#095046]">
                Majalah Mulia
              </Link>
            </li>
            <li className="relative flex items-center gap-3 group">
              <i class="ri-service-line text-2xl md:hidden block"></i>
              <button className="flex items-center gap-1 transition-all duration-100 ease-in hover:text-[#39BA87] text-[#095046]">
                Publikasi
                <HiChevronDown className="text-base" />
              </button>
              <ul className="absolute left-0 hidden p-2 space-y-2 bg-white rounded-2xl shadow-md text-[#095046] group-hover:block top-full min-w-[12rem]">
                <li>
                  <a href="/majalah-mulia" className="block px-4 py-2 transition-all duration-100 ease-in rounded-xl hover:bg-slate-100 hover:text-[#39BA87] text-[#095046]">
                    Berita
                  </a>
                </li>
                <li>
                  <a href="/riset-pengembangan" className="block px-4 py-2 transition-all duration-100 ease-in rounded-xl hover:bg-slate-100 hover:text-[#39BA87] text-[#095046]">
                    Riset
                  </a>
                </li>
                <li>
                  <a href="/laporan-keuangan" className="block px-4 py-2 transition-all duration-100 ease-in rounded-xl hover:bg-slate-100 hover:text-[#39BA87] text-[#095046]">
                    Laporan Keuangan
                  </a>
                </li>
                <li>
                  <a href="/under-construction" className="block px-4 py-2 transition-all duration-100 ease-in rounded-xl hover:bg-slate-100 hover:text-[#39BA87] text-[#095046]">
                    Laporan Tahunan
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="flex items-center gap-2 social">
            <a
              href="/double-slider-login"
              className="px-4 py-1 text-white rounded-full shadow-lg bg-linear-to-tr from-emerald-600 hover:from-emerald-500 to-emerald-400 hover:to-emerald-300 border-small border-white/50 focus:outline-2 focus:outline-offset-2 focus:outline-emerald-200"
            >
              Login
            </a>
            <a href="#" className="px-4 py-1 text-white rounded-full shadow-lg bg-linear-to-tr from-pink-600 to-yellow-600 border-small border-white/50 focus:outline-2 focus:outline-offset-2 focus:outline-red-200">
              ID
            </a>
            <i ref={buttonRef} className={`block text-3xl md:hidden text-slate-900 ${show ? 'ri-close-line' : 'ri-menu-line'}`} onClick={handleClick}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
