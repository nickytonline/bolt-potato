;
import { useDrag } from 'react-dnd';
import { PlacedPart } from '../types';

interface Props {
  part: PlacedPart;
  onMove: (id: string, x: number, y: number) => void;
}

const DraggablePlacedPart: React.FC<Props> = ({ part, onMove }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'placedPart',
    item: part,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    end: (_item, monitor) => {
      const offset = monitor.getClientOffset();
      if (offset) {
        const canvasRect = document.getElementById('canvas')?.getBoundingClientRect();
        if (canvasRect) {
          const x = offset.x - canvasRect.left;
          const y = offset.y - canvasRect.top;
          onMove(part.id, x, y);
        }
      }
    },
  }));

  const style: React.CSSProperties = {
    position: 'absolute',
    left: part.position.x,
    top: part.position.y,
    opacity: isDragging ? 0.5 : 1,
    cursor: 'move',
  };

  return (
    <div ref={drag} style={style} className="text-4xl">
      <part.Component />
    </div>
  );
};

export default DraggablePlacedPart;