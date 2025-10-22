import React, { useState } from 'react';

const YearPagination = () => {
  const [currentYear, setCurrentYear] = useState(2020); // default tahun aktif

  const years = Array.from({ length: 10 }, (_, i) => 2017 + i); // 2017 - 2026

  const handlePrev = () => {
    if (currentYear > 2017) {
      setCurrentYear(currentYear - 1);
    }
  };

  const handleNext = () => {
    if (currentYear < 2026) {
      setCurrentYear(currentYear + 1);
    }
  };

  const handleYearClick = (year) => {
    setCurrentYear(year);
  };

  return (
    <div className="flex items-center p-4 space-x-1 bg-transparent rounded-lg">
      {/* Previous Button */}
      <button
        onClick={handlePrev}
        disabled={currentYear <= 2017}
        className={`w-10 h-10 flex items-center justify-center rounded-full text-gray-700 transition-colors ${currentYear <= 2017 ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'}`}
      >
        &lt;
      </button>

      {/* Year Buttons */}
      {years.map((year) => (
        <button
          key={year}
          onClick={() => handleYearClick(year)}
          className={`w-20 h-10 flex items-center justify-center rounded-full text-gray-700 transition-all ${
            currentYear === year ? 'bg-slate-50 border-2 border-emerald-500 text-emerald-600 scale-105 shadow-inner' : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {year}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentYear >= 2026}
        className={`w-10 h-10 flex items-center justify-center rounded-full text-gray-700 transition-colors ${currentYear >= 2026 ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'}`}
      >
        &gt;
      </button>
    </div>
  );
};

export default YearPagination;
