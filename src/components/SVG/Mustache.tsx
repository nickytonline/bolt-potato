;

const Mustache: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 120 40" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 20 Q 40 0 60 20 Q 80 0 110 20"
      fill="none"
      stroke="black"
      strokeWidth="4"
    />
    <path
      d="M10 20 Q 40 40 60 20 Q 80 40 110 20"
      fill="none"
      stroke="black"
      strokeWidth="4"
    />
  </svg>
);

export default Mustache;