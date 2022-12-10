import React from 'react';
import Link from 'next/link'

type BoardProps = {
  month?: string;
  date?: string;
  url: string;
};

export function Board({
  month,
  date,
  url='/',
}:BoardProps){  
  return (
    <Link href={url} className="group">
      <div className='bg-#172636/10 border-[1px] border-#1A2835 rounded-[15px] group-hover:bg-gradient-to-br from-hoverboard_bg/75 via-hoverboard_bg/40 to-[#070B10]'>
        <div className='bg-[#0095EB] drop-shadow-[0_6px_37px_rgba(0,149,235,1)] w-24 h-2 rounded-tl-[59px] rounded-tr-[59px] rounded-bl-[6px] rounded-br-[6px]'>
        </div>
        <div className='px-6 pt-4 pb-16'>
          <h3 className='text-5xl font-bold mt-2 text-#9DAFBE group-hover:text-white'>{month}</h3>
          <h4 className='text-lg font-bold mt-14 text-white/50 group-hover:text-white'>{date}</h4>
        </div>
      </div>
    </Link>
  );


}


