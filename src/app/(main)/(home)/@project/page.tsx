'use client';

import Container from '@/src/components/container/Page';
import HoverPreviewImage from '@/src/components/home/project/HoverPreviewImage';
import ItemActive from '@/src/components/home/project/ItemActive';
import ItemProject from '@/src/components/home/project/ItemProject';
import ItemProjectSmall from '@/src/components/home/project/ItemProjectSmall';
import { dataProject } from '@/src/constant/mock-data';
import React, { useState } from 'react';

export default function ProjectsPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const [preview, setPreview] = useState<null | {
    src: string;
    x: number;
    y: number;
  }>(null);
  const heightItem = 166;

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    index: number,
    src: string
  ) => {
    setHoveredIndex(index);

    const container = document.getElementById('projects');
    if (container) {
      const containerRect = container.getBoundingClientRect();
      const x = event.clientX - containerRect.left;
      const y = event.clientY - containerRect.top;

      setPreview({ src, x: x - 200, y: y - 100 });
    } else {
      setPreview({ src, x: event.clientX - 200, y: event.clientY - 100 });
    }
  };

  const handleMouseLeave = () => {
    setHoveredIndex(0);
    if (preview) {
      setPreview(null);
    }
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (preview) {
      const container = document.getElementById('projects');
      if (container) {
        const containerRect = container.getBoundingClientRect();

        const x = event.clientX - containerRect.left;
        const y = event.clientY - containerRect.top;

        setPreview((prev) =>
          prev ? { src: prev.src, x: x - 200, y: y - 100 } : null
        );
      }
    }
  };

  return (
    <div className='mt-20 overflow-hidden'>
      <Container>
        <div className='mb-10 text-center md:mb-16'>
          <h1 className='mb-4 text-5xl font-bold text-[#ff014f]'>
            My Projects
          </h1>
          <p className='mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300'>
            A collection of projects showcasing my design and development skills
          </p>
        </div>

        <div
          id='projects'
          className='relative hidden flex-col justify-center lg:flex'
          onMouseMove={handleMouseMove}
        >
          {dataProject.map((item, index) => (
            <ItemProject
              key={index}
              index={index}
              heightItem={heightItem}
              item={item}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
            />
          ))}

          <ItemActive heightItem={heightItem} hoveredIndex={hoveredIndex} />

          <HoverPreviewImage preview={preview} />
        </div>

        <div
          id='projects'
          className='relative flex flex-col justify-center lg:hidden gap-5'
          onMouseMove={handleMouseMove}
        >
          {dataProject.map((item, index) => (
            <ItemProjectSmall key={index} item={item} />
          ))}
        </div>
      </Container>
    </div>
  );
}
