import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

export default function Introduce({
  introduce
}: {
  introduce: { title: string; description: string };
}) {
  const contentRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        {
          x: 60,
          opacity: 0
        },
        {
          x: 0,
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
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <li ref={contentRef}>
      <p className='mb-3 ml-5 list-item list-disc text-base text-[#fff9] md:mb-5 md:text-lg'>
        Introduction
      </p>
      <p className='mt-3 text-base md:mt-5 md:text-lg lg:text-xl'>
        {introduce.description}
      </p>
    </li>
  );
}
