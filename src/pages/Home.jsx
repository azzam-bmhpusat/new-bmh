// src/pages/Home.jsx
import HeroTailwind from './HeroTailwind';
import NewsSection from './NewsSection';
import BuktiNyata from './BuktiNyata';
import LastCard from './LastCard';
import JejakKebaikan from './JejakKebaikan';
import ProgramKami from './ProgramKami';
import KenapaHarusKami from './KenapaHarusKami';
import Testimonials from './Testimonials';
import FAQZakat from './FAQZakat';

export default function Home() {
  return (
    <div className="min-h-screen px-4 bg-slate-100 md:px-6 lg:px-12">
      {/* Hero Section */}
      <HeroTailwind />

      {/* News Section */}
      <div className="pt-20 md:pt-23">
        <NewsSection />
      </div>
      {/* BuktiNyata */}
      <div className="pt-20 md:pt-23" id="bukti-nyata">
        <BuktiNyata />
      </div>
      {/* LastCard */}
      <div className="pt-20 md:pt-23">
        <LastCard />
      </div>
      {/* KenapaHarusKami */}
      <div className="pt-20 md:pt-23">
        <KenapaHarusKami />
      </div>
      {/* JejakKebaikan */}
      <div className="pt-20 md:pt-23">
        <JejakKebaikan />
      </div>
      {/* ProgramKami */}
      <div className="pt-20 md:pt-23" id="program-kami">
        <ProgramKami />
      </div>
      {/* Testimonials */}
      <div className="pt-20 md:pt-23">
        <Testimonials />
      </div>
      {/* FAQZakat */}
      <div className="pt-20 mb-30 md:pt-23">
        <FAQZakat />
      </div>
    </div>
  );
}
