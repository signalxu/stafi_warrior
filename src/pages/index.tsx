import { Meta } from '../components/Meta'
import { Recruit } from '../components/layout/Recurit'
import { Warriors } from '../components/layout/Warriors'
import { ContributionBoard } from '../components/layout/Contributionboard'
import Link from 'next/link'

export default function Home() {

  return (
    <>
      <Meta
        title=''
        description=''
        image=''
      />
      <div className='bg-blackColor'>
        <div className='bg-bgImage bg-cover bg-repeat'>
          <div className='max-w-7xl mx-auto'>
            
            <section>
              <div className=''>
                <div className='px-4 py-24'>
                  <img src='/image/stafi_font.svg' className='mx-auto h-36'/>
                  <img src='/image/warrior_font.svg' className='mx-auto h-36 mt-4'/>
                  <div className='flex gap-12 mt-24 justify-center'>
                    <button className='bg-gradient-to-r from-#0093ED to-#00F3AB text-black text-base font-bold px-8 py-4 md:px-10 md:py-4 rounded-[12px]'> Apply Now</button>
                    <button className='border-[1px]	border-#5B6872 text-#9DAFBE text-base font-bold px-8 py-4 md:px-10 md:py-4 rounded-[12px]'> Learn More</button>
                  </div>
                  <p className='text-center text-#5B6872 text-base mt-16 px-32 tracking-wide leading-relaxed'>
                    StaFi Warriors team consists of the community member who believe StaFi‘s concepts and prospects deeply. They are working together with the core team to advocate and generalize StaFi’s vision and mission to build an open, free and self-governed StaFi community.
                  </p>
                  <div className='mt-32 px-24'>
                    <div className='grid grid-cols-3 gap-8'>
                      <div className=''>
                        <img src="/image/create_icon.png" className='w-14 mx-auto'/>
                        <h2 className='text-xl text-#9DAFBE mt-4 text-center'>Co-Create</h2>
                      </div>
                      <div className=''>
                        <img src="/image/govern_icon.png" className='w-14 mx-auto'/>
                        <h2 className='text-xl text-#9DAFBE mt-4 text-center'>Co-Govern</h2>
                      </div>
                      <div className=''>
                        <img src="/image/share_icon.png" className='w-14 mx-auto'/>
                        <h2 className='text-xl text-#9DAFBE mt-4 text-center'>Co-Share</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
          <ContributionBoard/>
          <Recruit/>
          <Warriors/>

          </div>
        </div>
      </div>
      
    </>
  )
}


