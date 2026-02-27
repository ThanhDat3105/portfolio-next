'use client';

import Container from '@/src/components/container/Page';
import ScrollPower3Out from '@/src/components/gsap/ScrollPower3Out';
import Marquee from '@/src/components/home/skill/marquee';
import { dataFramework, dataState, dataStyle } from '@/src/constant/mock-data';
import { useRef } from 'react';

export default function SkillPage() {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <ScrollPower3Out childrenRef={contentRef as React.RefObject<HTMLElement>}>
      <div className='mt-0 md:mt-14 lg:mt-20' ref={contentRef}>
        <Container>
          <h1 className='mb-10 text-center text-5xl font-bold text-[#ff014f] md:mb-20'>
            My Skills
          </h1>
          <div className='flex flex-col justify-center gap-5'>
            <Marquee data={dataFramework} width='100%' />
            <Marquee data={dataStyle} width='100%' reverse={true} />
            <Marquee data={dataState} width='100%' />
          </div>
        </Container>
      </div>
    </ScrollPower3Out>
  );
}
