'use client';

import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { IOptions, RecursivePartial } from '@tsparticles/engine';
import particlesL from '@/src/config/particlesLink.json';

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>
      {/* Background + Particles layer */}
      <div className='fixed inset-0 -z-10'>
        {init && (
          <Particles
            id='tsparticles'
            options={particlesL as RecursivePartial<IOptions>}
          />
        )}
      </div>
    </>
  );
}
