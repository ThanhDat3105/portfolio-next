'use client';

interface Props {
  index: number;
  heightItem: number;
  item: {
    icon: string;
    title: string;
    description: string;
    image: string;
    link: string;
    time: string;
  };
  handleMouseEnter: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    index: number,
    src: string
  ) => void;
  handleMouseLeave: () => void;
}

export default function ItemProject({
  index,
  item,
  heightItem,
  handleMouseEnter,
  handleMouseLeave
}: Props) {
  return (
    <a
      href={item.link}
      target='_blank'
      style={{ height: `${heightItem}px` }}
      id='10'
      className='z-10 flex flex-col overflow-hidden border border-t-[#e3e3e333] border-b-[#e3e3e333] last:border-b-0 md:flex-row'
      onMouseEnter={(event) => handleMouseEnter(event, index, item.image)}
      onMouseLeave={handleMouseLeave}
    >
      <div className='flex w-[20%] items-center justify-center p-8 md:w-40 xl:w-60'>
        <div className='flex h-20 w-20 items-center justify-center rounded-full'>
          <div
            dangerouslySetInnerHTML={{ __html: item.icon }}
            style={{ width: 48, height: 48 }}
          />
        </div>
      </div>

      <div className='flex w-[15%] flex-col md:flex-row md:items-center md:justify-between'>
        <div>
          <h2 className='xl:text-3xl text-2xl font-bold text-white'>{item.title}</h2>
        </div>
      </div>

      {/* Content Area */}
      <div className='flex-1 p-6 md:p-8'>
        <div className='mt-4'>
          <p className='text-lg text-white'>{item.description}</p>
        </div>
      </div>

      <span className='inline-flex w-[10%] xl:w-[15%] items-center rounded-md px-4 py-2 font-bold text-white transition duration-300'>
        {item.time}
      </span>
    </a>
  );
}
