'use client';
import React, { useEffect, useRef } from 'react';

import {
  Twitter,
  Instagram,
  Linkedin,
  Facebook,
  ArrowUpRight
} from 'lucide-react';
import { CompanyData } from './CompanyItem';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';

interface Props {
  data: CompanyData;
}

export default function CardProfile({ data }: Props) {
  const icons: Record<string, React.ElementType> = {
    facebook: Facebook,
    linkedin: Linkedin,
    twitter: Twitter,
    instagram: Instagram
  };

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        {
          x: -120,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={contentRef}
      className='sticky top-20 mt-10 flex h-auto min-h-[70vh] w-full flex-col justify-center gap-6 rounded-2xl bg-[#0F0F0F] p-4 text-white shadow-[inset_0_0_20px_0_rgba(103,103,103,0.25)] md:p-5 lg:top-24 lg:mt-0 lg:h-[80vh] lg:w-[350px] lg:gap-10'
    >
      {/* Availability */}
      <div className='flex justify-end'>
        <div className='flex w-fit items-center justify-center gap-2 rounded-lg bg-[#1A1A1A] px-2 py-2 md:px-3 md:py-3'>
          <span className='h-2 w-2 rounded-full bg-orange-500'></span>
          <span className='text-sm text-gray-300 md:text-lg'>
            Available for{' '}
            <span className='font-semibold text-white'>
              {data.projects.length} projects
            </span>
          </span>
        </div>
      </div>

      {/* Avatar */}
      <div className='flex justify-center'>
        <div className='relative flex h-40 w-40 items-center justify-center rounded-3xl border border-gray-700 bg-gradient-to-tr from-[#1A1A1A] to-[#2A2A2A] p-1 md:h-48 md:w-48 lg:h-52 lg:w-52'>
          <Image
            src={data.avatar}
            alt={data.name}
            width={160}
            height={160}
            className='h-32 w-32 rounded-xl object-contain md:h-36 md:w-36 lg:h-40 lg:w-40'
          />

          {/* Name */}
          <h2 className='absolute -bottom-4 left-1/2 -translate-x-1/2 text-center font-[cursive] text-2xl text-nowrap md:-bottom-5 md:text-3xl'>
            {data.name}
          </h2>
        </div>
      </div>

      {/* Email + Location */}
      <div className='text-center'>
        <p className='text-sm break-all text-gray-300 md:text-base'>
          {data.email}
        </p>
        <p className='text-xs text-gray-500 md:text-sm'>{data.location}</p>
      </div>

      {/* Social Icons */}
      <div className='flex justify-center gap-3 text-lg text-gray-400 md:gap-4'>
        {data.social.map(({ name, url }) => {
          const Icon = icons[name];
          if (!Icon) return null;

          return url === '#' ? (
            <div
              key={name}
              className='rounded-full bg-[#ffffff1a] p-2 opacity-50 shadow-[inset_0_0_20px_0_rgba(103,103,103,0.25)]'
            >
              <Icon className='h-5 w-5 text-white' />
            </div>
          ) : (
            <Link
              key={name}
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-full bg-[#ffffff1a] p-2 shadow-[inset_0_0_20px_0_rgba(103,103,103,0.25)] transition hover:bg-gray-600'
            >
              <Icon className='h-5 w-5 text-white' />
            </Link>
          );
        })}
      </div>

      {/* CTA */}
      <Link
        href={data.website}
        target='_blank'
        rel='noopener noreferrer'
        className='mt-3 flex items-center justify-between rounded-full bg-[#1A1A1A] px-5 py-3 transition hover:bg-[#2A2A2A]'
      >
        <span className='text-sm font-medium'>Visit Website</span>
        <span className='ml-3 rounded-full bg-white p-2 text-black'>
          <ArrowUpRight size={16} />
        </span>
      </Link>
    </div>
  );
}
