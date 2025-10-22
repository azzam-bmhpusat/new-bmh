import DotGrid from '../ReactBits/DotGrid/DotGrid.jsx';

export default function HeroDot() {
  return (
    <div className="">
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <DotGrid dotSize={10} gap={15} baseColor="#F4FDFD" activeColor="#BCF1F3" proximity={120} shockRadius={250} shockStrength={5} resistance={750} returnDuration={1.5} />
      </div>
    </div>
  );
}
