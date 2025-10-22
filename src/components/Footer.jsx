import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok, FaYoutube } from 'react-icons/fa';
import { MdPhone, MdEmail } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';
import { FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State lokal untuk input

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Arahkan ke halaman kantor-perwakilan dengan query
      window.location.href = `/kantor-perwakilan?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <footer className="relative z-20 shadow-lg bg-[#095046] backdrop-blur-md text-slate-50 font-poppins">
      {/* Konten Utama */}
      <div className="flex flex-row">
        <div className="bg-[#39BA87] w-4/1 h-5 md:h-6"></div>
        <div className="bg-[#FEB738] w-4/3 h-5 md:h-6"></div>
      </div>
      <div className="px-4 md:px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-10 pt-10 pb-10 mx-auto max-w-7xl md:grid-cols-3">
          {/* Kolom 1 */}
          <div className="flex flex-col items-start">
            <a href="/">
              <img src="/footer.png" alt="Logo BMH" className="object-contain h-10 mt-5 mb-6" />
            </a>
            <p className="pl-2 pr-2 text-sm font-light leading-relaxed text-justify">
              Lembaga Amil Zakat Nasional <span className="font-bold text-emerald-400"> Baitul Maal Hidayatullah (BMH)</span> Merupakan lembaga amil zakat yang bergerak dalam penghimpunan dana Zakat, infaq, sedekah, Wakaf dan Hibah berikut
              dana sosial kemanusiaan dan Corporate Social Responsibility (CSR) perusahaan, dan melakukan distribusi melalui program pendidikan, dakwah, sosial kemanusiaan dan ekonomi secara nasional.
            </p>
          </div>

          {/* Kolom 2 - Google Maps */}
          <div className="pl-2 pr-2 md:pt-6 md:mt-15">
            <div className="overflow-hidden shadow-lg rounded-xl h-52">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.506445970923!2d106.8402742!3d-6.259257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f2370ee0a723%3A0x9dfec7fd3fd90a06!2sBaitul%20Maal%20Hidayatullah%20Pusat!5e0!3m2!1sid!2sid!4v1693839981739!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Kolom 3 */}
          <div className="pl-2 pr-2 md:pt-6">
            {/* Form Pencarian */}
            <form onSubmit={handleSearch} className="flex mb-5 overflow-hidden rounded-full">
              <input
                type="text"
                placeholder="Cari kantor cabang BMH"
                className="flex-grow px-4 py-2 pr-10 text-sm text-gray-800 bg-white rounded-l-full focus:outline-none" // Ruang untuk tombol X
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button type="button" className="px-2 py-0 text-gray-500 bg-white border-none hover:text-gray-900" onClick={() => setSearchQuery('')}>
                  &times;
                </button>
              )}
              <button type="submit" className="px-4 py-2 text-sm font-semibold text-white rounded-r-full bg-[#39BA87] hover:bg-emerald-600">
                Search
              </button>
            </form>
            <h3 className="mb-3 text-lg font-extrabold text-[#FEB738]">Kalibata Office Park</h3>
            <div className="space-y-2 text-sm font-light">
              <p className="flex items-center transition">Jalan Raya Pasar Minggu No.21, Blok H RT.1/RW.8, Kalibata, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12780, Indonesia.</p>
              <a href="tel:0217975770" className="flex items-center transition hover:text-[#39BA87] pt-3">
                <MdPhone className="mr-2 text-xs md:text-sm" /> 021-7975-770
              </a>
              <a href="mailto:sekretariat@bmh.or.id" className="flex items-center transition hover:text-[#39BA87]">
                <MdEmail className="mr-2 text-xs md:text-sm" /> sekretariat@bmh.or.id
              </a>
              <a href="/kantor-perwakilan" className="flex items-center transition hover:text-[#39BA87]">
                <FaHome className="mr-2 text-xs md:text-sm" /> Temukan kantor BMH terdekat
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sosial Media */}
      <div className="flex justify-center pt-5 text-sm">
        <p className="flex items-center transition font-extralight">Follow Us: @officialbmh</p>
      </div>
      <div className="flex justify-center gap-6 pt-5 pb-6 text-xl text-slate-50">
        <a href="https://www.facebook.com/BaitulMaalHidayatullah" className="transition hover:text-[#FEB738]">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/official.bmh/" target="_blank" rel="noopener noreferrer" className="transition hover:text-[#FEB738]">
          <FaInstagram />
        </a>
        <a href="https://x.com/officialbmh" target="_blank" rel="noopener noreferrer" className="transition hover:text-[#FEB738]">
          <FaTwitter />
        </a>
        <a href="https://www.tiktok.com/@official.bmh" target="_blank" rel="noopener noreferrer" className="transition hover:text-[#FEB738]">
          <FaTiktok />
        </a>
        <a href="https://www.youtube.com/channel/UCaVCytqsC7PZCOkPB41rSlQ" target="_blank" rel="noopener noreferrer" className="transition hover:text-[#FEB738]">
          <FaYoutube />
        </a>
      </div>

      {/* Copyright */}
      <div className="py-6 md:text-lg text-center text-white bg-[#095046] border-t-1 border-white/30 font-extralight">© 2025 Hak cipta BMH - All Rights Reserved</div>
    </footer>
  );
};

export default Footer;
