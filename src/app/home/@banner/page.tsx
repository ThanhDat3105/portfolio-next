import Container from '@/src/components/container/Page';
import MyImage from '@/src/components/home/banner/content-img';
import ContentTyped from '@/src/components/home/banner/content-typed';
import ParticlesView from '@/src/components/particles';
import React from 'react';

export default function page() {
  return (
    <div className='relative'>
      <div className='absolute h-full w-full'>
        <ParticlesView />
      </div>

      <div className='banner'>
        <Container>
          <div className='relative right-0 left-0 z-[5] pt-5'>
            <div className='flex h-full flex-col-reverse gap-10 lg:flex-row xl:gap-40'>
              <ContentTyped />
              <MyImage />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
