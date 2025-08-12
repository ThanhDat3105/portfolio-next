import React from 'react';

interface Props {
  hoveredIndex: number;
  heightItem: number;
}

export default function ItemActive({ hoveredIndex, heightItem }: Props) {
  return (
    <div
      style={{
        height: `${heightItem}px`,
        top: `${hoveredIndex * heightItem}px`
      }}
      className='absolute top-0 z-1 w-full bg-[#ff014f] transition-all duration-500'
    />
  );
}
