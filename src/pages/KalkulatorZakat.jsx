import React, { useState } from 'react';

const KalkulatorZakat = () => {
  const [selectedType, setSelectedType] = useState('Penghasilan (Profesi)');
  const [periode, setPeriode] = useState('bulanan');

  const [penghasilan, setPenghasilan] = useState('');
  const [pendapatanLain, setPendapatanLain] = useState('');
  const [pengeluaran, setPengeluaran] = useState('');
  const [tabungan, setTabungan] = useState('');
  const [asetDagang, setAsetDagang] = useState('');
  const [keuntungan, setKeuntungan] = useState('');
  const [utang, setUtang] = useState('');
  const [emas, setEmas] = useState('');
  const [hasilZakat, setHasilZakat] = useState('');

  const hargaEmas = 1999846; // per gram
  const nisab = 85 * hargaEmas; // Nisab emas (Rp131jt-an)

  const handleHitungZakat = () => {
    let total = 0;

    if (selectedType === 'Penghasilan (Profesi)') {
      const penghasilanBersih = parseFloat(penghasilan || 0) + parseFloat(pendapatanLain || 0) - parseFloat(pengeluaran || 0);

      total = periode === 'bulanan' ? penghasilanBersih * 12 : penghasilanBersih;

      if (total >= nisab) {
        setHasilZakat(`Rp${(total * 0.025).toLocaleString('id-ID')} / ${periode === 'bulanan' ? 'tahun' : 'periode'}`);
      } else {
        setHasilZakat('Tidak Wajib Zakat (Belum Mencapai Nisab)');
      }
    }

    if (selectedType === 'Tabungan (Maal)') {
      total = parseFloat(tabungan || 0);

      if (total >= nisab) {
        setHasilZakat(`Rp${(total * 0.025).toLocaleString('id-ID')}`);
      } else {
        setHasilZakat('Tidak Wajib Zakat (Belum Mencapai Nisab)');
      }
    }

    if (selectedType === 'Perdagangan') {
      const totalAset = parseFloat(asetDagang || 0) + parseFloat(keuntungan || 0);
      const totalBersih = totalAset - parseFloat(utang || 0);

      if (totalBersih >= nisab) {
        setHasilZakat(`Rp${(totalBersih * 0.025).toLocaleString('id-ID')}`);
      } else {
        setHasilZakat('Tidak Wajib Zakat (Belum Mencapai Nisab)');
      }
    }

    if (selectedType === 'Emas') {
      const totalNilaiEmas = parseFloat(emas || 0) * hargaEmas;

      if (totalNilaiEmas >= nisab) {
        setHasilZakat(`Rp${(totalNilaiEmas * 0.025).toLocaleString('id-ID')}`);
      } else {
        setHasilZakat('Tidak Wajib Zakat (Belum Mencapai Nisab)');
      }
    }
  };

  return (
    <section className="container px-4 py-20 mx-auto font-poppins bg-slate-100 lg:py-30 max-w-7xl md:px-6 lg:px-12">
      <h2 className="mt-1 text-2xl font-bold md:text-3xl md:font-extrabold text-[#095046]">Kalkulator Zakat</h2>
      <div className="h-2 w-40 bg-[#FEB738] mt-1 mb-4"></div>
      <h4 className="mb-2 text-xl font-bold text-slate-700">Hitung dan Tunaikan Zakat Anda dengan Mudah</h4>
      <p className="leading-relaxed text-justify text-gray-700">
        <span className="font-semibold">Zakat </span>adalah kewajiban bagi setiap Muslim yang hartanya telah mencapai nisab. Dengan kalkulator zakat ini, Anda dapat dengan cepat dan akurat menghitung jumlah zakat yang perlu dibayarkan
        berdasarkan penghasilan, tabungan, perdagangan, atau emas yang Anda miliki. Mari bersihkan harta dan berbagi keberkahan kepada yang membutuhkan.
      </p>

      <div className="max-w-4xl mx-auto mt-10">
        <h4 className="mb-4 text-3xl font-bold text-center text-[#39BA87]">
          PILIH JENIS <span className="text-[#095046]"> ZAKAT ANDA</span>
        </h4>
        <div className="flex flex-wrap justify-center gap-4">
          {['Penghasilan (Profesi)', 'Tabungan (Maal)', 'Perdagangan', 'Emas'].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`border-1 px-5 py-2 rounded-xl flex items-center gap-2 transition-all ${
                selectedType === type ? 'border-green-400 text-[#39BA87] font-semibold hover:border-[#39BA87]' : 'border-gray-200 text-[#158173] hover:cursor-pointer hover:text-[#011d1a] hover:border-slate-300'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Input Dinamis */}
        <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
          {selectedType === 'Penghasilan (Profesi)' && (
            <>
              <div>
                <label className="block text-sm font-medium">Penghasilan:</label>
                <input type="number" value={penghasilan} onChange={(e) => setPenghasilan(e.target.value)} placeholder="Masukkan gaji Anda" className="w-full px-4 py-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium">Pendapatan Lain:</label>
                <input type="number" value={pendapatanLain} onChange={(e) => setPendapatanLain(e.target.value)} placeholder="Opsional" className="w-full px-4 py-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium">Pengeluaran:</label>
                <input type="number" value={pengeluaran} onChange={(e) => setPengeluaran(e.target.value)} placeholder="Opsional" className="w-full px-4 py-2 border rounded-md" />
              </div>
              <div className="flex gap-6 mt-4">
                {['bulanan', 'tahunan'].map((p) => (
                  <label key={p} className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="radio" name="periode" value={p} checked={periode === p} onChange={(e) => setPeriode(e.target.value)} />
                    {p.charAt(0).toUpperCase() + p.slice(1)}
                  </label>
                ))}
              </div>
            </>
          )}

          {selectedType === 'Tabungan (Maal)' && (
            <div>
              <label className="block text-sm font-medium">Jumlah Tabungan:</label>
              <input type="number" value={tabungan} onChange={(e) => setTabungan(e.target.value)} placeholder="Saldo akhir tabungan" className="w-full px-4 py-2 border rounded-md" />
            </div>
          )}

          {selectedType === 'Perdagangan' && (
            <>
              <div>
                <label className="block text-sm font-medium">Aset Dagang:</label>
                <input type="number" value={asetDagang} onChange={(e) => setAsetDagang(e.target.value)} placeholder="Total aset dagang" className="w-full px-4 py-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium">Keuntungan:</label>
                <input type="number" value={keuntungan} onChange={(e) => setKeuntungan(e.target.value)} placeholder="Keuntungan tahun ini" className="w-full px-4 py-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium">Utang Jatuh Tempo:</label>
                <input type="number" value={utang} onChange={(e) => setUtang(e.target.value)} placeholder="Utang yang harus dibayar" className="w-full px-4 py-2 border rounded-md" />
              </div>
            </>
          )}

          {selectedType === 'Emas' && (
            <div>
              <label className="block text-sm font-medium">Jumlah Emas (gram):</label>
              <input type="number" value={emas} onChange={(e) => setEmas(e.target.value)} placeholder="Misal: 100 gram" className="w-full px-4 py-2 border rounded-md" />
            </div>
          )}

          <button type="button" onClick={handleHitungZakat} className="w-full px-4 py-2 mt-4 text-white transition bg-[#39BA87] rounded-xl hover:bg-green-600">
            Hitung Zakat
          </button>

          <div>
            <label className="block text-sm font-medium">Wajib Bayar</label>
            <input type="text" value={hasilZakat} placeholder="Zakat yang wajib dibayar" readOnly className="w-full px-4 py-2 text-red-500 bg-gray-100 border rounded-md" />
          </div>
        </form>

        <div className="mt-6 text-xs text-gray-600">
          <p>- Harga emas saat ini: Rp{hargaEmas.toLocaleString('id-ID')} / gram</p>
          <p>- Nisab (85 gram emas): Rp{nisab.toLocaleString('id-ID')}</p>
          <p>- Zakat = 2.5% dari harta yang telah mencapai nisab</p>
        </div>
      </div>
    </section>
  );
};

export default KalkulatorZakat;
