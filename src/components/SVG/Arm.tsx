;

const Arm: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 100 40" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 20 Q 50 0 90 20"
      fill="none"
      stroke="#8B4513"
      strokeWidth="8"
      strokeLinecap="round"
    />
  </svg>
);

export default Arm;