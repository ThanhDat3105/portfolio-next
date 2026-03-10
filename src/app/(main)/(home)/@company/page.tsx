'use client';

import CompanyItem from '@/src/components/company/CompanyItem';
import Container from '@/src/components/container/Page';
import ScrollPower3Out from '@/src/components/gsap/ScrollPower3Out';
import { companies } from '@/src/constant/mock-data';
import { useRef } from 'react';

export default function CompaniesPage() {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <ScrollPower3Out childrenRef={contentRef as React.RefObject<HTMLElement>}>
      <section
        className='relative mt-0 scroll-mt-32 overflow-hidden text-white md:mt-14 lg:mt-20'
        ref={contentRef}
        id='companiesPage'
      >
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
      </section>
    </ScrollPower3Out>
  );
}
