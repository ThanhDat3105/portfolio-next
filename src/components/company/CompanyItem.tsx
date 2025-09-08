import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  data: {
    id: number;
    name: string;
    email: string;
    social: {
      name: string;
      url: string;
    }[];
    banner: string;
    avatar: string;
    role: string;
    time: string;
    position: string;
    description: string;
    projects: {
      name: string;
      description: string;
      link: string;
    }[];
    tech: {
      name: string;
      displayName: string;
      color: string;
    }[];
  };
}

export default function CompanyItem({ data }: Props) {
  return (
    <Link
      href={`/company/${data.id}`}
      key={data.id}
      className='relative overflow-hidden rounded-2xl p-[2px] shadow-lg'
    >
      {/* 🔥 Border xoay */}
      <div className='animate-rotate absolute top-1/2 left-1/2 h-1/2 w-[200%] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-red-500'></div>

      {/* Nội dung card */}
      <div
        className='group relative z-10 h-full rounded-2xl bg-gradient-to-br from-[#111] to-[#1c1c1c] bg-cover bg-center p-6 transition-transform duration-300 hover:shadow-2xl'
        style={{ backgroundImage: `url(${data.banner})` }}
      >
        {/* Header */}
        <div className='flex items-center gap-4'>
          <Image
            src={data.avatar}
            alt={data.name}
            width={60}
            height={60}
            className='rounded-lg bg-white object-contain p-1'
          />
          <div>
            <h2 className='text-xl font-bold'>{data.name}</h2>
            <p className='text-sm text-gray-400'>
              {data.role} • <span className='text-[#ff014f]'>{data.time}</span>
            </p>
          </div>
        </div>

        {/* Description */}
        <p className='mt-4 text-gray-300'>{data.description}</p>

        {/* Projects */}
        <div className='mt-4'>
          <h3 className='mb-2 text-sm font-semibold tracking-wide text-gray-400 uppercase'>
            Projects:
          </h3>
          <ul className='list-inside list-disc space-y-1 text-gray-200'>
            {data.projects.map((task, index) => (
              <li
                key={index}
                className='transition-colors hover:text-[#ff014f]'
              >
                {task.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}
