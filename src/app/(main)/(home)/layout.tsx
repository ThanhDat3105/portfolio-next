import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio Home',
  description: 'Home Page Portfolio'
};

export default async function Layout({
  banner,
  skill,
  project,
  company
}: {
  banner: React.ReactNode;
  skill: React.ReactNode;
  project: React.ReactNode;
  company: React.ReactNode;
}) {
  return (
    <div className='bg-[#060606]'>
      {banner}
      {skill}
      {project}
      {company}
    </div>
  );
}
