'use client';

import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

import './ContentTyped.scss';

export default function ContentTyped() {
  const el = useRef(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Freelancer.', 'Web Developer.'],
      typeSpeed: 100,
      backDelay: 2000,
      backSpeed: 50,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const elements = contentRef.current?.querySelectorAll('.animated-item');

    if (elements && elements.length > 0) {
      gsap.to(elements, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.2
      });
    }
  }, []);

  return (
    <div ref={contentRef} className='content-typed my-auto flex-1 text-white'>
      <p className='animated-item translate-y-12 text-[28px] font-bold uppercase opacity-0'>
        Hello
      </p>
      <h1 className='animated-item translate-y-12 text-[28px] font-bold opacity-0 sm:text-[54px]'>
        <p className=''>i&apos;m Cao Thanh Dat a</p>
        <span
          className='animated-item translate-y-12 text-[#ff014f] opacity-0'
          ref={el}
        />
      </h1>
      <p className='animated-item mt-6 translate-y-12 text-justify text-base leading-8 text-[#9f9f9f] opacity-0 sm:text-lg'>
        I&apos;m a web developer with professional and freelance experience,
        specializing in React.js and Vue.js. I build modern, efficient, and
        maintainable web apps, delivering tailored solutions with clean code and
        great user experience.
      </p>

      {/* <div className='animated-item icons mt-10 flex translate-y-12 gap-2.5 opacity-0 *:relative *:z-[-1] *:flex *:size-10 *:items-center *:justify-center *:overflow-hidden *:rounded-full *:bg-[#141414] *:transition-all'>
        <div className='icon-item'>
          <a
            href='https://www.instagram.com/tict.datt_315/'
            target='_blank'
            className='*:size-4'
          >
            <Instagram />
          </a>
        </div>
        <div className='icon-item'>
          <a
            href='https://www.linkedin.com/in/th%C3%A0nh-%C4%91%E1%BA%A1t-16927526b/'
            target='_blank'
            className='*:size-4'
          >
            <Linkedin />
          </a>
        </div>
        <div className='icon-item *:size-4'>
          <a className='*:size-4'>
            <Twitter />
          </a>
        </div>
        <div className='icon-item *:size-4'>
          <a
            href='https://www.facebook.com/profile.php?id=100017737833003'
            target='_blank'
            className='*:size-4'
          >
            <Facebook />
          </a>
        </div>
      </div> */}
    </div>
  );
}
