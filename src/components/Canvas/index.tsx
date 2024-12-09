import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { PotatoPart, PlacedPart } from '../../types';
import DraggablePlacedPart from '../DraggablePlacedPart';
import PotatoBody from './PotatoBody';

const Canvas: React.FC = () => {
  const [placedParts, setPlacedParts] = useState<PlacedPart[]>([]);

  const [, drop] = useDrop(() => ({
    accept: ['potatoPart', 'placedPart'],
    drop: (item: PotatoPart | PlacedPart, monitor) => {
      const offset = monitor.getClientOffset();
      if (offset) {
        const canvasRect = document.getElementById('canvas')?.getBoundingClientRect();
        if (canvasRect) {
          const x = offset.x - canvasRect.left;
          const y = offset.y - canvasRect.top;
          
          if ('position' in item) {
            // Update existing part
            updatePartPosition(item.id, x, y);
          } else {
            // Add new part
            const newPart: PlacedPart = {
              ...item,
              position: { x, y },
              zIndex: placedParts.length + 1,
            };
            setPlacedParts((prev) => [...prev, newPart]);
          }
        }
      }
      return undefined;
    },
  }));

  const updatePartPosition = (id: string, x: number, y: number) => {
    setPlacedParts((prev) =>
      prev.map((part) =>
        part.id === id 
          ? { ...part, position: { x, y }, zIndex: Math.max(...prev.map(p => p.zIndex || 0)) + 1 }
          : part
      )
    );
  };

  return (
    <div
      id="canvas"
      ref={drop}
      className="flex-1 relative bg-amber-100 min-h-screen"
    >
      <PotatoBody />
      {placedParts.map((part) => (
        <DraggablePlacedPart
          key={`${part.id}-${part.position.x}-${part.position.y}-${part.zIndex}`}
          part={part}
          onMove={updatePartPosition}
        />
      ))}
    </div>
  );
};

export default Canvas;