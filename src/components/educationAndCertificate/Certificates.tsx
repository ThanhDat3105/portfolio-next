import { certificates } from '@/src/constant/mock-data';
import React, { useRef } from 'react';
import GlowCard from '../GlowCard';
import ScrollPower3Out from '../gsap/ScrollPower3Out';

export default function Certificates() {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <ScrollPower3Out childrenRef={contentRef as React.RefObject<HTMLElement>}>
      <div ref={contentRef}>
        <div className='mb-6 flex items-center gap-8'>
          <h1 className='text-3xl font-bold text-white'>Certificates</h1>
          <div className='flex items-center justify-center'>
            <div className='size-2 shrink-0 rounded-full bg-[#9f9f9f]'></div>
            <div className='h-0.5 w-16 bg-[#9f9f9f]'></div>
            <div className='size-2 shrink-0 rounded-full bg-[#9f9f9f]'></div>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2 lg:gap-8'>
          {certificates.map((certificate, index) => (
            <GlowCard key={index}>
              <div className='space-y-1 p-4 text-white sm:p-5 md:p-6'>
                <p className='text-sm font-medium sm:text-base'>
                  <span className='text-[#ff014f]'>
                    {certificate.organization}
                  </span>{' '}
                  - {certificate.name}
                </p>
                <p className='text-lg font-bold sm:text-xl'>
                  {certificate.date}
                </p>
                <p className='mt-5 text-base text-[#9f9f9f] sm:text-lg'>
                  {certificate.description}
                </p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </ScrollPower3Out>
  );
}
