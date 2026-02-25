'use client';

import { useEffect, useRef } from 'react';
import Container from '@/src/components/container/Page';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Certificates from '@/src/components/educationAndCertificate/Certificates';
import Education from '@/src/components/educationAndCertificate/Education';
import ScrollPower3Out from '@/src/components/gsap/ScrollPower3Out';

gsap.registerPlugin(ScrollTrigger);

export default function EducationAndCertificate() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, titleRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className='mt-20'>
      <Container>
        <ScrollPower3Out childrenRef={titleRef as React.RefObject<HTMLElement>}>
          <div ref={titleRef} className='mb-10 md:mb-20'>
            <h1 className='mb-4 text-center text-3xl font-bold text-[#ff014f] sm:text-4xl md:text-5xl'>
              Education & Certificate
            </h1>
            <p className='mx-auto max-w-2xl px-4 text-center text-sm text-gray-600 sm:text-base md:text-lg dark:text-gray-300'>
              Business consulting consultants provide expert advice and guida
              businesses to help them improve their performance, efficiency, and
              organizational
            </p>
          </div>
        </ScrollPower3Out>

        <div className='space-y-16'>
          <Education />
          <Certificates />
        </div>
      </Container>
    </div>
  );
}
