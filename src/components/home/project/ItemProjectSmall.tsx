'use client';

import Image from 'next/image';

interface Props {
  item: {
    icon: string;
    title: string;
    description: string;
    image: string;
    link: string;
    time: string;
  };
  className?: string;
}

export default function ItemProjectSmall({ item, className = "" }: Props) {
  return (
    <a
      href={item.link}
      target='_blank'
      className={`group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-6 transition-all duration-300 active:border-[#ff014f] active:shadow-xl active:shadow-[#ff014f]/20 ${className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10 group-active:opacity-20 transition-opacity duration-300">
        <Image 
          src={item.image} 
          alt={item.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-800/80 group-active:bg-[#ff014f]/20 transition-colors duration-300'>
          <div
            dangerouslySetInnerHTML={{ __html: item.icon }}
            className="w-6 h-6 [&_svg]:w-6 [&_svg]:h-6"
          />
        </div>

        {/* Title */}
        <h3 className='mb-3 text-xl font-bold text-white group-active:text-[#ff014f] transition-colors duration-300'>
          {item.title}
        </h3>

        {/* Description */}
        <p className='mb-4 text-sm text-gray-300 line-clamp-3 leading-relaxed'>
          {item.description}
        </p>

        {/* Footer with time and arrow */}
        <div className="flex items-center justify-between">
          <span className='text-xs font-medium text-[#ff014f] bg-[#ff014f]/10 px-2 py-1 rounded-full'>
            {item.time}
          </span>
          
          <div className="flex items-center text-gray-400 group-active:text-white transition-colors duration-300">
            <span className="text-xs mr-1">View</span>
            <svg 
              className="w-4 h-4 transform group-active:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>

      {/* active effect gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#ff014f]/0 to-[#ff014f]/5 opacity-0 group-active:opacity-100 transition-opacity duration-300" />
    </a>
  );
}
