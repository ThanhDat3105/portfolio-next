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
  educationAndCertificate,
  contact
}: {
  banner: React.ReactNode;
  skill: React.ReactNode;
  project: React.ReactNode;
  company: React.ReactNode;
  educationAndCertificate: React.ReactNode;
  contact: React.ReactNode;
}) {
  return (
    <div>
      {banner}
      {educationAndCertificate}
      {skill}
      {project}
      {company}
      {contact}
    </div>
  );
}
