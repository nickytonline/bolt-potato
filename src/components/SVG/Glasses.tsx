;

const Glasses: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 100 40" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="30" height="20" rx="5" fill="none" stroke="black" strokeWidth="3"/>
    <rect x="60" y="10" width="30" height="20" rx="5" fill="none" stroke="black" strokeWidth="3"/>
    <line x1="40" y1="20" x2="60" y2="20" stroke="black" strokeWidth="3"/>
  </svg>
);

export default Glasses;