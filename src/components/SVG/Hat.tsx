;

const Hat: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="60" width="60" height="10" fill="black"/>
    <rect x="30" y="20" width="40" height="40" fill="black"/>
  </svg>
);

export default Hat;