;

const Nose: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 40 60" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20 10 Q 30 30 20 50 Q 10 30 20 10"
      fill="#D35400"
      stroke="black"
      strokeWidth="2"
    />
  </svg>
);

export default Nose;