;
import { useDrag } from 'react-dnd';
import { PotatoPart } from '../../types';
import { shouldFlipPart } from '../../utils/partUtils';

interface DraggablePartProps {
  part: PotatoPart;
}

const DraggablePart: React.FC<DraggablePartProps> = ({ part }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'potatoPart',
    item: part,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const Component = part.Component;

  return (
    <div
      ref={drag}
      className={`cursor-move p-2 m-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow
        ${isDragging ? 'opacity-50' : 'opacity-100'}`}
    >
      <div
        className="w-20 h-20 mx-auto flex items-center justify-center"
        style={{
          transform: shouldFlipPart(part.id) ? 'scaleX(-1)' : 'none',
        }}
      >
        <Component className="w-full h-full" />
      </div>
      <div className="text-sm text-gray-600 text-center mt-2">{part.name}</div>
    </div>
  );
};

export default DraggablePart;