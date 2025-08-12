import Image from 'next/image';
import img from '@/public/images/banner/user-mock.png';

import './MyImage.scss';

export default function MyImage() {
  return (
    <div className='img relative flex-1 overflow-hidden flex justify-center'>
      <Image
        src={img}
        alt='my-img'
        className='relative z-[2] sm:h-[700px] w-full object-contain max-sm:max-w-64'
      />
      <h2 className='top absolute top-[25%] z-1 w-full text-center sm:text-[50px] xs:text-4xl max-xs:text-3xl font-bold text-white uppercase xl:text-[64px]'>
        web developer
      </h2>
      <h2 className='bottom absolute bottom-[5%] z-[3] w-full text-center sm:text-[50px] xs:text-4xl max-xs:text-3xl font-bold text-transparent uppercase xl:text-[64px]'>
        web developer
      </h2>
    </div>
  );
}
