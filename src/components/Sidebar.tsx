;
import { useDrag } from 'react-dnd';
import { potatoParts } from '../data/potatoParts';
import { PotatoPart } from '../types';

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

  return (
    <div
      ref={drag}
      className={`cursor-move p-2 m-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow
        ${isDragging ? 'opacity-50' : 'opacity-100'}`}
    >
      <div className="text-4xl"><part.Component /></div>
      <div className="text-sm text-gray-600">{part.name}</div>
    </div>
  );
};

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-100 p-4 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Potato Parts</h2>
      <div className="grid grid-cols-2 gap-2">
        {potatoParts.map((part) => (
          <DraggablePart key={part.id} part={part} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;