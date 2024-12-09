;

const Leg: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 40 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20 10 Q 30 50 20 90"
      fill="none"
      stroke="#8B4513"
      strokeWidth="8"
      strokeLinecap="round"
    />
  </svg>
);

export default Leg;