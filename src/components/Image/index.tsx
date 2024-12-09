;

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className = '' }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`max-w-full max-h-full object-contain ${className}`}
      draggable={false}
    />
  );
};

export default Image;