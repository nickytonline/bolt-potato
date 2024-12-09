import { FC } from 'react';

export interface PotatoPart {
  id: string;
  type: string;
  name: string;
  Component: FC<{ className?: string }>;
}

export interface PlacedPart extends PotatoPart {
  position: {
    x: number;
    y: number;
  };
  zIndex?: number;
}