import React from 'react';

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className='m-auto px-5 pb-20 sm:max-w-[540px] sm:px-0 md:max-w-[720px] md:min-w-[720px] lg:max-w-[960px] lg:min-w-[960px] xl:max-w-[1200px] xl:min-w-[1200px] 2xl:max-w-[1290px] 2xl:min-w-[1290px]'>
      {children}
    </div>
  );
}
