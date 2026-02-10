import CardProfile from '@/src/components/company/CardProfile';
import ContentProfile from '@/src/components/company/ContentProfile';
import Container from '@/src/components/container/Page';
import ParticlesBackground from '@/src/components/ParticlesBg';
import { companies } from '@/src/constant/mock-data';

export default async function Page({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const company = companies.find((company) => company.id === Number(id));

  return (
    <Container>
      <ParticlesBackground />
      {company && (
        <main className='relative z-0 flex flex-col gap-6 text-white md:gap-10 lg:flex-row xl:gap-20'>
          <div className='relative w-full lg:w-[350px]'>
            <CardProfile data={company} />
          </div>
          <div className='w-full lg:w-[70%]'>
            <ContentProfile data={company} />
          </div>
        </main>
      )}
    </Container>
  );
}
