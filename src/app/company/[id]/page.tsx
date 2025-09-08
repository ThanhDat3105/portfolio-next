import CardProfile from '@/src/components/company/CardProfile';
import ContentProfile from '@/src/components/company/ContentProfile';
import Container from '@/src/components/container/Page';
import ParticlesBackground from '@/src/components/ParticlesBg';

export default async function Page({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log(id);

  return (
    <Container>
      <ParticlesBackground />
      <main className='relative z-0 grid grid-cols-[350px_1fr] text-white'>
        <CardProfile />
        <ContentProfile />
      </main>
    </Container>
  );
}
