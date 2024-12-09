import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { PotatoPart, PlacedPart } from '../types';
import DraggablePlacedPart from './DraggablePlacedPart';

const Canvas: React.FC = () => {
  const [placedParts, setPlacedParts] = useState<PlacedPart[]>([]);

  const [, drop] = useDrop(() => ({
    accept: 'potatoPart',
    drop: (item: PotatoPart, monitor) => {
      const offset = monitor.getClientOffset();
      if (offset) {
        const canvasRect = document.getElementById('canvas')?.getBoundingClientRect();
        if (canvasRect) {
          const x = offset.x - canvasRect.left;
          const y = offset.y - canvasRect.top;
          
          const newPart: PlacedPart = {
            ...item,
            position: { x, y },
          };
          
          setPlacedParts((prev) => [...prev, newPart]);
        }
      }
    },
  }));

  const updatePartPosition = (id: string, x: number, y: number) => {
    setPlacedParts((prev) =>
      prev.map((part) =>
        part.id === id ? { ...part, position: { x, y } } : part
      )
    );
  };

  return (
    <div
      id="canvas"
      ref={drop}
      className="flex-1 relative bg-amber-100 min-h-screen"
    >
      {/* Base potato body */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-96
          bg-amber-800 rounded-[50%] shadow-lg"
      />
      
      {placedParts.map((part) => (
        <DraggablePlacedPart
          key={`${part.id}-${part.position.x}-${part.position.y}`}
          part={part}
          onMove={updatePartPosition}
        />
      ))}
    </div>
  );
};

export default Canvas;