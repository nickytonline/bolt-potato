;
import { potatoParts } from '../../data/potatoParts';
import DraggablePart from './DraggablePart';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-100 p-4 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Potato Parts</h2>
      <div className="grid grid-cols-2 gap-2">
        {potatoParts.map((part) => (
          <DraggablePart key={`sidebar-${part.id}`} part={part} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;