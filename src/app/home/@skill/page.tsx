import Container from '@/src/components/container/Page';
import Marquee from '@/src/components/home/skill/marquee';
import { dataFramework, dataState, dataStyle } from '@/src/constant/mock-data';

export default function page() {
  return (
    <div className='mt-20'>
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
  );
}
