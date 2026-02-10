'use client';

import React, { useEffect, useRef } from 'react';
import { CompanyData } from './CompanyItem';
import Introduce from './Introduce';
import Experience from './Experience';
import TechListSwiper from './TechListSwiper';
import gsap from 'gsap';

interface Props {
  data: CompanyData;
}

export default function ContentProfile({ data }: Props) {
  return (
    <div className='mx-auto mt-8 md:mt-12 lg:mt-20 flex-1 overflow-y-hidden'>
      <div className='pb-6 md:pb-8 lg:pb-10'>
        <AnimatedText text={data.fullLocation} />
      </div>

      <ul className='w-full space-y-10 md:space-y-16 lg:space-y-20'>
        <Introduce introduce={data.introduce} />
        <Experience />
        <li>
          <TechListSwiper techList={data.tech} />
        </li>
      </ul>
    </div>
  );
}

export function AnimatedText({
  text,
  className
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current.children,
      { x: 20, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.04,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          once: true
        }
      }
    );
  }, []);

  return (
    <span ref={ref} className={className}>
      {text.split('').map((char, i) => (
        <span key={i} className='inline-block'>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}
