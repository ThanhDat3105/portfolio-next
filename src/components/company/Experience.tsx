'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TEXT =
  'As the Front-end Team Lead in the e-learning project, I led the interface development team, ensuring the quality and timely delivery of features aimed at users such as administrators, teachers, and students. I was responsible for assigning tasks effectively to each team member and ensuring the user interface was both efficient and consistent.';

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const contentRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!containerRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(trackRef.current, {
        xPercent: -16,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

      gsap.fromTo(
        contentRef.current,
        {
          y: 60,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      if (!textRef.current) return;
      const chars = textRef.current.querySelectorAll('span');

      gsap.fromTo(
        chars,
        {
          color: '#ffffff55'
        },
        {
          color: '#ffffff',
          stagger: 0.03,
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
            end: 'bottom 40%',
            scrub: true
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <li
      ref={contentRef}
      className='list-item w-full list-disc text-base text-[#fff9] md:text-lg'
    >
      <p className='mb-16 ml-5 list-item list-disc leading-none md:mb-24 lg:mb-32'>
        <span>Experiences</span>{' '}
        <span
          ref={textRef}
          className='ml-10 align-middle text-lg leading-tight font-normal lg:tracking-tight text-white md:text-2xl lg:ml-20 lg:text-3xl'
        >
          {TEXT.split('').map((char, i) => (
            <span key={i}>{char}</span>
          ))}
        </span>
      </p>

      <div className='w-full rounded-xl border border-white px-2 py-6 shadow-[inset_0_0_20px_0_#ffffff] md:rounded-2xl md:py-10'>
        <div ref={containerRef} className='relative overflow-hidden'>
          <div
            ref={trackRef}
            className='flex w-max items-center gap-5 will-change-transform md:gap-10'
          >
            {Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className='flex items-center gap-5 md:gap-10'>
                <span className='text-4xl tracking-[-2px] whitespace-nowrap text-white md:text-6xl lg:text-8xl'>
                  THD Security
                </span>
                <span className='h-[20px] w-[20px] shrink-0 rounded-full bg-[linear-gradient(144.12deg,#FB8F10_14.68%,#FE0101_81.68%)] md:h-[24px] md:w-[24px] lg:h-[31px] lg:w-[31px]' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
}
