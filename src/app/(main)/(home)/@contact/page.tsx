'use client';

import FormEmail from '@/src/components/Contact/FormEmail';
import Container from '@/src/components/container/Page';
import GlowCard from '@/src/components/GlowCard';
import ScrollPower3Out from '@/src/components/gsap/ScrollPower3Out';
import { useRef } from 'react';

export default function SkillPage() {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <ScrollPower3Out childrenRef={contentRef as React.RefObject<HTMLElement>}>
      <div className='mt-0 md:mt-14 lg:mt-20' ref={contentRef}>
        <Container>
          <GlowCard>
            <div className='flex flex-col justify-center gap-10 p-6 py-10 md:p-12 lg:flex-row lg:p-16 xl:p-20'>
              <div className='space-y-3 lg:w-[40%] lg:space-y-5 lg:pr-24'>
                <p className='text-base font-medium tracking-widest text-[#ff014f] uppercase'>
                  GET IN TOUCH
                </p>
                <p className='text-3xl font-bold text-white lg:text-5xl lg:leading-16'>
                  Elevate your brand with Me.
                </p>
                <p className='text-[#9F9F9F]'>
                  Feel free to reach out via email or phone below, or simply
                  fill out the contact form. I look forward to discussing how we
                  can work together.
                </p>
              </div>
              <div className='lg:w-[60%]'>
                <FormEmail />
              </div>
            </div>
          </GlowCard>
        </Container>
      </div>
    </ScrollPower3Out>
  );
}
