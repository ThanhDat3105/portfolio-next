import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { useEffect, useRef, useState } from 'react';
import { iconMap } from '../icon';
import gsap from 'gsap';

const TEXT = 'Tech Stack';

export default function TechListSwiper({
  techList
}: {
  techList: { name: string; displayName: string; color: string }[];
}) {
  const techRef = useRef<HTMLParagraphElement>(null);
  const [process, setProcess] = useState(0);

  useEffect(() => {
    if (!techRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        techRef.current!.children,
        {
          x: 30,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.06,
          scrollTrigger: {
            trigger: techRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, techRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className='space-y-4 md:space-y-5'>
      <p
        ref={techRef}
        className='flex overflow-hidden text-4xl md:text-5xl lg:text-7xl'
      >
        {TEXT.split('').map((char, i) => (
          <span key={i} className='inline-block'>
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </p>

      <div className='space-y-6 md:space-y-10'>
        <Swiper
          modules={[Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          onSlideChange={(value) =>
            setProcess(((value.realIndex + 1) / techList.length) * 100)
          }
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20
            }
          }}
          loop={true}
          className='swiper-tech-list h-full w-full'
          style={
            {
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff'
            } as React.CSSProperties
          }
        >
          {techList.map((tech, index) => {
            const Icon = iconMap[tech.name];

            return (
              <SwiperSlide key={index} className='!h-64 md:!h-72 lg:!h-80'>
                <div className='item-slide absolute top-1/2 left-1/2 flex h-[95%] w-[95%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-3 rounded-xl bg-[#111111] text-xl font-bold text-white shadow-[inset_0_0_20px_0_#67676740] transition-all duration-500 md:gap-5 md:rounded-2xl md:text-2xl'>
                  <p className='text-2xl font-medium md:text-3xl'>
                    {tech.displayName}
                  </p>

                  <div className='rounded-xl bg-black p-6 md:rounded-2xl md:p-8 lg:p-10'>
                    <Icon size={48} color={tech.color} />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className='relative h-2 w-full rounded-full bg-[#ffffff33]'>
          <span
            className='absolute h-full rounded-full bg-white transition-all'
            style={{ width: `${process}%` }}
          ></span>
        </div>
      </div>
    </div>
  );
}
