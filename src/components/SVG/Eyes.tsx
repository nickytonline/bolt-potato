;

const Eyes: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 100 40"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    <circle cx="25" cy="20" r="12" fill="white" stroke="black" strokeWidth="2"/>
    <circle cx="75" cy="20" r="12" fill="white" stroke="black" strokeWidth="2"/>
    <circle cx="25" cy="20" r="6" fill="black"/>
    <circle cx="75" cy="20" r="6" fill="black"/>
  </svg>
);

export default Eyes;