'use client';

import Image from 'next/image';
import React from 'react';

interface Props {
  preview: { src: string; x: number; y: number } | null;
}

export default function HoverPreviewImage({ preview }: Props) {
  if (!preview) return null;

  return (
    <Image
      width={400}
      height={400}
      src={preview.src}
      alt='Preview'
      className='pointer-events-none absolute z-20 rounded-2xl shadow-lg'
      style={{
        left: preview.x,
        top: preview.y,
        backgroundColor: 'white',
      }}
    ></Image>
  );
}
