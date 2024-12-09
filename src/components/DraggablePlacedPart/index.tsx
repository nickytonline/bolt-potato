;
import { useDrag } from 'react-dnd';
import { PlacedPart } from '../../types';
import { shouldFlipPart } from '../../utils/partUtils';

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

  const Component = part.Component;

  const style: React.CSSProperties = {
    position: 'absolute',
    left: part.position.x,
    top: part.position.y,
    opacity: isDragging ? 0.5 : 1,
    cursor: 'move',
    transform: shouldFlipPart(part.id) ? 'scaleX(-1)' : 'none',
    width: '150px',
    height: '150px',
    zIndex: part.zIndex || 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div ref={drag} style={style}>
      <Component className="w-full h-full" />
    </div>
  );
};

export default DraggablePlacedPart;