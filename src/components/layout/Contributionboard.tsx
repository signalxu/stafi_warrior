import { Board } from '../Board'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay} from 'swiper';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"



const slides =[
  {
    month:'11',
    date: 'November，2022',
    url:'/'
  },
  {
    month:'10',
    date: 'October，2022',
    url:'/'
  },
  {
    month:'9',
    date: 'September，2022',
    url:'/'
  },
  {
    month:'8',
    date: 'August，2022',
    url:'/'
  },
  {
    month:'7',
    date: 'July，2022',
    url:'/'
  },
  {
    month:'6',
    date: 'June，2022',
    url:'/'
  },
  {
    month:'5',
    date: 'May，2022',
    url:'/'
  },
  {
    month:'4',
    date: 'April，2022',
    url:'/'
  },
  {
    month:'3',
    date: 'March，2022',
    url:'/'
  },
  {
    month:'2',
    date: 'February，2022',
    url:'/'
  },
  {
    month:'1',
    date: 'January，2022',
    url:'/'
  },

]


export function ContributionBoard() {

  let page: number = Math.ceil(slides.length/9) ;
  let slidesNumber :Array<number> = new Array(page).fill(0);

  return(
    <>
      <div className="py-12 md:py-24 px-2 md:px-16">
        <img src="/image/beekeeper_icon.png" className="mx-auto w-24"/>
        <h1 className="text-center font-anton text-base md:text-xl text-#FFA540 tracking-widest md:tracking-widest">
          Warrior
        </h1>
        <h2 className="text-white font-anton text-4xl md:text-5xl text-center mt-6 tracking-[.3em] md:tracking-[.3em]">
          Contribution Board
        </h2>

      <div className='w-full'>
        <Swiper
          modules={[Pagination,Autoplay]} 
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{delay:3000}}
          speed={1000}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className="w-full mt-6 md:mt-12"
        >
        {slidesNumber.map((item,index) => (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-3 grid-rows-3 gap-2 md:gap-4 py-10 md:py-14'>
              {slides.slice(index*9,index*9+9).map((item) => (
                <Board
                month={item.month}
                date={item.date}
                url={item.url}
                key={item.date}
                />
              ))}
            </div>
          </SwiperSlide> 
        ))}

        </Swiper>

      </div>

      </div>
    </>
  )
  
}