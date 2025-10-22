import React, { useState, useEffect } from 'react';

const BeritaDetail = ({ berita }) => {
  const { title, authors, date, content, images } = berita;

  // Parse authors string menjadi array
  const authorList = authors ? authors.split(',').map((author) => author.trim()) : [];

  // Parse content string menjadi paragraf
  const contentParagraphs = content ? content.split('\n').filter((p) => p.trim() !== '') : [];

  // Parse images string menjadi array
  const imageList = images
    ? images
        .split(',')
        .map((img) => img.trim())
        .filter((img) => img)
    : [];

  return (
    <section className="container px-4 py-20 mx-auto font-poppins bg-slate-100 lg:py-30 max-w-7xl md:px-6 lg:px-12">
      <div className="text-left lg:text-left">
        <h2 className="mt-1 text-2xl font-bold md:text-3xl md:font-extrabold text-[#095046]">{title}</h2>
        <div className="w-40 h-2 mt-1 mb-4 bg-yellow-500"></div>
      </div>

      {/* Gambar utama - ambil dari array pertama */}
      {imageList[0] && <img src={imageList[0]} alt="Image" className="object-cover w-full mb-4 bg-white shadow-md rounded-3xl h-75" />}

      <p className="mb-2 text-sm text-gray-600">
        By{' '}
        {authorList.map((author, index) => (
          <span key={index} className="font-semibold text-gray-800">
            {author}
            {index < authorList.length - 1 && ' and '}
          </span>
        ))}{' '}
        • {date}
      </p>

      <div className="mb-6 text-sm prose prose-lg max-w-none md:text-base">
        {contentParagraphs.map((para, index) => (
          <p key={index} className="mb-4 leading-relaxed text-gray-700">
            {para}
          </p>
        ))}
      </div>

      {/* Gambar tambahan */}
      {imageList.length > 1 && (
        <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-3">
          {imageList.slice(1).map((img, index) => (
            <img key={index} src={img} alt={`Article image ${index + 1}`} className="object-cover w-full shadow-md rounded-3xl h-52" />
          ))}
        </div>
      )}
    </section>
  );
};

const BeritaList = () => {
  const [beritaList, setBeritaList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBerita = async () => {
      try {
        // Ganti dengan ID sheet kamu
        const SPREADSHEET_ID = '12gPPDPn1dZ-gDWcnQ1PsokUYtSHlkNNhG3GbAXOmmIM';
        const SHEET_NAME = 'Sheet1';

        // Perbaikan: Hapus spasi di URL
        const response = await fetch(`https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?sheet=${SHEET_NAME}&tqx=out:json`);

        const text = await response.text();
        // Parse JSONP response
        const json = JSON.parse(text.substring(47, text.length - 2));

        const rows = json.table.rows;
        const headers = json.table.cols.map((col) => col.label || col.id);

        const data = rows.map((row) => {
          const rowData = {};
          headers.forEach((header, index) => {
            rowData[header] = row.c[index]?.v || '';
          });
          return rowData;
        });

        setBeritaList(data);
      } catch (err) {
        setError('Gagal memuat berita');
        console.error('Error fetching berita:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBerita();
  }, []);

  if (loading) return <div className="flex items-center justify-center min-h-screen">Memuat berita...</div>;
  if (error) return <div className="flex items-center justify-center min-h-screen text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-slate-100">
      {beritaList.length > 0 ? beritaList.map((berita) => <BeritaDetail key={berita.id || berita.title} berita={berita} />) : <div className="flex items-center justify-center min-h-screen">Belum ada berita</div>}
    </div>
  );
};

export default BeritaList;
