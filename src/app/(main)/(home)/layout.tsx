import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio Home',
  description: 'Home Page Portfolio'
};

export default async function Layout({
  banner,
  skill,
  project,
  company,
  educationAndCertificate
}: {
  banner: React.ReactNode;
  skill: React.ReactNode;
  project: React.ReactNode;
  company: React.ReactNode;
  educationAndCertificate: React.ReactNode;
}) {
  return (
    <div>
      {banner}
      {educationAndCertificate}
      {skill}
      {project}
      {company}
    </div>
  );
}
