'use client';

import { useEffect, useRef } from 'react';
import './index.scss';
import { iconMap } from '@/src/components/icon';
import gsap from 'gsap';

interface Props {
  data: {
    name: string;
    color: string;
    displayName: string;
  }[];
  width: string;
  reverse?: boolean;
}

export default function Marquee({ data, width, reverse = false }: Props) {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const totalWidth = marquee.scrollWidth / 2;

    const tween = gsap.to(marquee, {
      x: reverse ? totalWidth : -totalWidth,
      duration: 60,
      ease: 'none',
      repeat: -1
    });

    return () => {
      tween.kill();
    };
  }, [reverse]);

  return (
    <div
      style={{ width }}
      className={`${reverse ? 'marquee-reverse max-lg:!w-[100%]' : 'marquee max-lg:!w-[90%]'} marquee-init relative mx-auto h-14 overflow-hidden`}
    >
      <div
        ref={marqueeRef}
        className={`marquee-animation absolute flex lg:w-[200%] sm:w-[250%] w-[300%] overflow-hidden text-white ${reverse && 'right-0'}`}
      >
        <div className='float-left flex w-1/2 justify-around'>
          {data.map(({ name, color, displayName }, index) => {
            const Icon = iconMap[name];
            return Icon ? (
              <div
                key={`${name}${index}`}
                className='item-marquee flex items-center justify-center gap-2 xl:gap-4 w-auto'
              >
                <div className='shrink'>
                  <Icon size={32} color={color} />
                </div>
                <span className='truncate text-white lg:flex hidden'>{displayName}</span>
              </div>
            ) : null;
          })}
        </div>

        <div className='float-left flex w-1/2 justify-around'>
          {data.map(({ name, color, displayName }, index) => {
            const Icon = iconMap[name];
            return Icon ? (
              <div
                key={`${name}${index}`}
                className='item-marquee flex items-center justify-center gap-2 xl:gap-4 w-auto'
              >
                <div className='shrink'>
                  <Icon size={32} color={color} />
                </div>
                <span className='truncate text-white lg:flex hidden'>{displayName}</span>
              </div>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
}
