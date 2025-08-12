import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio Home',
  description: 'Home Page Portfolio'
};

export default async function Layout({
  banner,
  skill,
  project
}: {
  banner: React.ReactNode;
  skill: React.ReactNode;
  project: React.ReactNode;
}) {
  return (
    <body>
      <div id='smooth-wrapper'>
        <div id='smooth-content'>
          {banner}
          {skill}
          {project}
        </div>
      </div>
    </body>
  );
}
