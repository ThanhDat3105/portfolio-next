'use client';

import CompanyItem from '@/src/components/company/CompanyItem';
import Container from '@/src/components/container/Page';
import { companies } from '@/src/constant/mock-data';

export default function Portfolio() {
  return (
    <div className='relative mt-20 min-h-screen overflow-hidden text-white'>
      {/* 🔥 Background wave effect */}
      <div className='absolute inset-0 -z-10 bg-black'>
        <div className='animate-wave absolute inset-0 bg-gradient-to-r from-[#ff014f]/30 via-transparent to-[#ff014f]/30'></div>
      </div>

      <Container>
        <h1 className='mb-10 text-center text-5xl font-extrabold tracking-wide text-[#ff014f] md:mb-20'>
          Companies I’ve Worked With
        </h1>

        <div className='grid gap-8 md:grid-cols-2'>
          {companies.map((company) => (
            <CompanyItem key={company.id} data={company} />
          ))}
        </div>
      </Container>
    </div>
  );
}
