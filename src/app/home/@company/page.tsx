'use client';

import CompanyItem from '@/src/components/company/CompanyItem';
import Container from '@/src/components/container/Page';

const companies = [
  {
    id: 1,
    name: 'THD Security',
    email: 'email@gmail.com',
    social: [
      { name: 'facebook', url: 'https://facebook.com' },
      { name: 'linkedin', url: 'https://linkedin.com' },
      { name: 'twitter', url: 'https://twitter.com' },
      { name: 'instagram', url: 'https://instagram.com' }
    ],
    banner: '/images/banner/background-banner.jpg',
    avatar: '/images/logo/logo_THD.png',
    role: 'Front-end Intern',
    time: '2023',
    position: 'Frontend Developer',
    description:
      'THD Cyber Security cung cấp giải pháp an ninh mạng hiện đại, toàn diện, giúp doanh nghiệp Việt Nam an toàn trước mọi mối đe dọa số.',
    projects: [
      {
        name: 'THD E-learning',
        description: 'Dự án hệ thống E-learning nội bộ công ty.',
        link: '',
        image: '/images/projects/project-elearning.png'
      }
    ],
    tech: [
      { name: 'js-icon', displayName: 'JavaScript', color: '#F7DF1E' },
      { name: 'ts-icon', displayName: 'TypeScript', color: '#3178C6' },
      { name: 'react-icon', displayName: 'React', color: '#61DAFB' },
      { name: 'vue-icon', displayName: 'Vue', color: '#42B883' },
      { name: 'next-icon', displayName: 'Next.js', color: '#888888' },
      { name: 'nodejs-icon', displayName: 'Node.js', color: '#68A063' },
      { name: 'express-icon', displayName: 'Express', color: '#828282' }
    ]
  }
];

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
