'use client';

import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import type { Container } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import bg from '@/public/images/banner/background-banner.jpg';
import Image from 'next/image';

export default function ParticlesView() {
  const [init, setInit] = useState<boolean>(false);

  const particlesLoaded = (container: Container | undefined): Promise<void> => {
    return new Promise((resolve) => {
      console.log(container);
      resolve();
    });
  };

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>
      <Image
        src={bg}
        alt='bg'
        quality={100}
        priority
        fill
        className='object-cover'
      />
      {init && (
        <Particles
          id='tsparticles'
          className='relative z-[5] h-full'
          particlesLoaded={particlesLoaded}
          options={{
            fullScreen: { enable: false },
            background: {
              image: `url('${bg.src}')`,
              position: '50% 50%',
              repeat: 'no-repeat',
              size: 'cover'
            },
            fpsLimit: 120,
            interactivity: {
              modes: {
                push: {
                  quantity: 4
                },
                repulse: {
                  distance: 200,
                  duration: 0.4
                }
              }
            },
            particles: {
              color: {
                value: '#FF3333'
              },

              move: {
                direction: 'top',
                enable: true,
                outModes: {
                  default: 'out'
                },
                random: true,
                speed: 4,
                straight: false
              },
              number: {
                density: {
                  enable: true
                },
                value: 90
              },
              opacity: {
                value: {
                  min: 0.1,
                  max: 1
                }
              },
              shape: {
                type: 'circle'
              },
              size: {
                value: { min: 2, max: 4 }
              }
            },
            detectRetina: true
          }}
        />
      )}
    </>
  );
}
