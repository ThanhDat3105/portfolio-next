import { educations } from '@/src/constant/mock-data';
import React, { useRef } from 'react';
import GlowCard from '../GlowCard';
import ScrollPower3Out from '../gsap/ScrollPower3Out';

export default function Education() {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <ScrollPower3Out childrenRef={contentRef as React.RefObject<HTMLElement>}>
      <div ref={contentRef}>
        <div className='mb-6 flex items-center gap-8'>
          <h1 className='text-3xl font-bold text-white'>Education</h1>
          <div className='flex items-center justify-center'>
            <div className='size-2 shrink-0 rounded-full bg-[#9f9f9f]'></div>
            <div className='h-0.5 w-16 bg-[#9f9f9f]'></div>
            <div className='size-2 shrink-0 rounded-full bg-[#9f9f9f]'></div>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2 lg:gap-8'>
          {educations.map((education, index) => (
            <GlowCard key={index}>
              <div className='space-y-1 p-4 text-white sm:p-5 md:p-6'>
                <p className='text-sm font-medium sm:text-base'>
                  <span className='text-[#ff014f]'>{education.name}</span> -{' '}
                  {education.major}
                </p>
                <p className='text-lg font-bold sm:text-xl'>{education.date}</p>
                <p className='mt-5 text-base text-[#9f9f9f] sm:text-lg'>
                  {education.description}
                </p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </ScrollPower3Out>
  );
}
