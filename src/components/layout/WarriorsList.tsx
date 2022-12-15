import { Disclosure } from '@headlessui/react'
import {AvatarCard} from '../AvatarCard'
import Link from 'next/link'



export function WarriorsList() {
  
  const warriorsModeratorList = [
    {
      id:1,
      title:'Community Manager',
      avatar:'/image/avatar_1.png',
      name:'Adam',
      description:'Adam is a crypto advocate since 2016, making a true difference in this world is what he strives for. ',
      twitter_url:'https://twitter.com/frostyfoxes',
      twitter_username:'@frostyfoxes',
    },
    {
      id:2,
      title:'Community Manager',
      avatar:'/image/avatar_2.png',
      name:'AlphaTower',
      description:'An Air Traffic Controller by profession and a Web3 enthusiast. A Discord Community Manager/Moderator for Web3 projects.',
      twitter_url:'https://twitter.com/EB_fifth',
      twitter_username:'@EB_fifth', 
    },
    {
      id:3,
      title:'Twitter Operator',
      avatar:'/image/avatar_3.png',
      name:'Miracle Ikechi',
      description:"It's Miracle over here, a blockchain enthusiast from Nigeria and I'm quite busy making sure you all have the best on StaFi twitter handles.",
      twitter_url:'https://twitter.com/Miles_From_Town',
      twitter_username:'@Mazi55480281',
    },
    {
      id:4,
      title:'Forum Manager',
      avatar:'/image/avatar_4.png',
      name:'Aniel Essien',
      description:"I am a realist, dad's youngest, a blockchain preacher, If you want to discuss come to the forum, let's have some fun 😉",
      twitter_url:'https://twitter.com/joshua_aniel',
      twitter_username:'@joshua_aniel',
    },
    {
      id:5,
      title:'Testing Moderator',
      avatar:'/image/avatar_5.png',
      name:'Dayal',
      description:"A crypto enthusiast who strongly believes in Blockchain Technology and DeFi. Self-Motivated and Get Going person, a pet lover by nature.",
      twitter_url:'https://twitter.com/DayalKS2',
      twitter_username:'@DayalKS2',
    },
    {
      id:6,
      title:'Editor Moderator',
      avatar:'/image/avatar_6.png',
      name:'Rohit Chatterjee',
      description:"Electronics engineer who loves writing about latest blockchain projects. Recently got into creating NFTs as well.",
      twitter_url:'https://twitter.com/aaboltaabol',
      twitter_username:'@aaboltaabol',
    },
  ]
  const warriorsAmbassadorList = [
    {
      id:1,
      title:'StaFi Ambassador',
      avatar:'/image/avatar_7.png',
      name:'Alpha Chukwunelo',
      description:"I'm Alpha Chukwunelo and being the first is my hobby 😂. I'm a crypto enthusiast, Arsenal fan, Cosmonaut and Web3 Privacy merchant.",
      twitter_url:'https://twitter.com/AlpharezCC',
      twitter_username:'@AlpharezCC',
    },
    {
      id:2,
      title:'StaFi Ambassador',
      avatar:'/image/avatar_8.png',
      name:'Nsikak Joseph',
      description:"I'm a content developer, and graphic designer, with vast experience in the blockchain space. I am driven by the zeal to promote the adoption of crypto in Africa",
      twitter_url:'https://twitter.com/_brownish6',
      twitter_username:'@brownish6',
    },
    {
      id:3,
      title:'StaFi Ambassador',
      avatar:'/image/avatar_9.png',
      name:'Delphin Amonle',
      description:'I started out my Blockchain journey since 2019 as "buy-and-hold" person. In only three years of this journey, I have been named Ambassador for some Crypto Brands.',
      twitter_url:'https://twitter.com/delkind26',
      twitter_username:'@delkind26',
    },
    {
      id:4,
      title:'StaFi Ambassador',
      avatar:'/image/avatar10_icon.png',
      name:'Kenny',
      description:"Hi, I'm Kenny from Nigeria and I've been an adopter of the Blockchain technology for a few years new. Happy to Be a StaFi Warrior.",
      twitter_url:'https://twitter.com/cosmosadvocate',
      twitter_username:'@cosmosadvocate',
    },
    {
      id:5,
      title:'StaFi Ambassador',
      avatar:'/image/avatar11_icon.png',
      name:'Miracle Ikechi',
      description:"I’m Joshua Ikechukwu here. I’m a huge fan of cosmos and I’ve been with them as a dedicated community member for over a year.",
      twitter_url:'https://twitter.com/Joshyysmartt',
      twitter_username:'@Joshyysmartt',
    },
  ]
  
  const ModeratorList = [
    {
      id:1,
      title:'Twitter Operator',
      description:'Daily operation of StaFi’s Twitter handles, like drafting tweets and engaging the community with the progress of StaFi products.',
      url:'https://forms.gle/mPb92FUDvxhzi2EcA',
    },
    {
      id:2,
      title:'Forum Manager',
      description:'Manage and operate StaFi & StaFiHub governance forums and initiate discussions and proposals based on the StaFi Protocol’s latest progress.',
      url:'https://forms.gle/ChyqWUa4zijd7vTA6',
    },
    {
      id:3,
      title:'BD Moderator',
      description:'Help StaFi Protocol to pitch third-party integrations for rToken ecosystem.',
      url:'https://forms.gle/EQj9dgqUWnyzFL6TA',
    },
    {
      id:4,
      title:'Testing Moderator',
      description:'Provide full testing for StaFi products and output optimization suggestions on functional bugs or UI/UX, the StaFi team will optimize it based on the feedback from testing moderators.',
      url:'https://forms.gle/JpqPJtfhxKrc5Fmq6',
    },

  ]

  const ambassdorList = [
    {
      id:1,
      title:'Twitter Influencer',
      description:'Daily operation of StaFi’s Twitter handles, like drafting tweets and engaging the community with the progress of StaFi products.',
      url:'https://forms.gle/wkzKD9F8oDurijQbA',
    },
    {
      id:2,
      title:'Youtube Influencer',
      description:'Manage and operate StaFi & StaFiHub governance forums and initiate discussions and proposals based on the StaFi Protocol’s latest progress.',
      url:'https://forms.gle/xQf96wjNbVSwF5jE6',
    },
    {
      id:3,
      title:'Offline Activity Manager',
      description:'Help StaFi Protocol to pitch third-party integrations for rToken ecosystem.',
      url:'https://forms.gle/Sw412aSEcwo9AVw79',
    },
  ]


  return(
    <>
      <div className="py-12 md:py-24 px-6">
        <img src="/image/beekeeper_icon.png" className="mx-auto w-24"/>
        <h1 className="text-center font-anton text-xl text-#FFA540 tracking-widest">
          About
        </h1>
        <h2 className="text-white font-anton text-5xl text-center mt-6 tracking-[.3em]">
          StaFi Warriors
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 mt-24">

          <div className="col-span-1">
            <section>
              <div className="bg-[#172636]/10 border-[1px] border-[#1A2835] rounded-[16px]">
                <div className="flex mt-4">
                  <div className="h-16 w-10 bg-[#00F3AB] float-left rounded-tl-[6px] rounded-tr-[59px] rounded-bl-[6px] rounded-br-[59px]" style={{boxShadow:"6px -15px 70px #00F3AB"}}>
                  </div>
                  <div className="mt-4 pl-12 pr-2 ">
                    <h2 className="text-2xl text-#00F3AB font-anton tracking-wider"> StaFi Moderator </h2>
                    <p className="mt-4 text-base text-#5B6872 leading-relaxed tracking-wide">StaFi Moderator mainly take management and operation roles in StaFi community. Such as managing Social media, testing UI/UX, coordinating BD and content edition works.</p>
                  </div>
                </div>

                <div className='px-4 pt-6 pb-12'>
                  {ModeratorList.map((item) => (
                    <div className='mt-8' key={item.id}>
                      <Disclosure >
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="text-xl text-#9DAFBE flex gap-4 items-center">
                            <img src={`${open ? '/image/dropdown_icon.png' : '/image/dropup_icon.png'}`} className="w-6"/>
                            <span> {item.title} </span>
                          </Disclosure.Button>
                          <Disclosure.Panel className="pl-10 pt-4 pb-6">
                            <p className='text-base text-#5B6872 leading-relaxed tracking-wide'> {item.description} </p>
                            <Link href={item.url} target="_blank">
                              <div className='mt-6 flex gap-2'>
                                <p className='text-base text-#00F3AB'> Apply </p>
                                <img src='/image/apply_icon.svg' className='w-4'/>
                              </div>
                            </Link>
                          </Disclosure.Panel>
                        </>
                      )}
                      </Disclosure>
                    </div>
                  ))}
                </div>
              </div>
            </section>    

          </div>

          <div className='col-span-2 mt-10 md:mt-0'>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
            { warriorsModeratorList.map((item) => (
              <AvatarCard
                key = {item.id}
                title = {item.title}
                name = {item.name}
                image = {item.avatar}
                description = {item.description}
                twitter_url = {item.twitter_url}
                twitter_username = {item.twitter_username}
              />

            ))}

            
            </div>

          </div>
        
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 mt-16">
          <div className="col-span-1">
          <section>
              <div className="bg-[#172636]/10 border-[1px] border-[#1A2835] rounded-[16px] mt-10 md:mt-0">
                <div className="flex mt-4">
                  <div className="h-16 w-10 bg-[#0095EB] float-left rounded-tl-[6px] rounded-tr-[59px] rounded-bl-[6px] rounded-br-[59px]" style={{boxShadow:"6px -15px 70px #0095EB"}}>
                  </div>
                  <div className="mt-4 pl-12 pr-2 ">
                    <h2 className="text-2xl text-[#0095EB] font-anton tracking-wider"> StaFi Ambassador </h2>
                    <p className="mt-4 text-base text-#5B6872 leading-relaxed tracking-wide">StaFi Ambassador mainly take promotion roles to expand the brand awareness and advocate the StaFi’s vision both on-line and off-line.</p>
                  </div>
                </div>

                <div className='px-4 pt-6 pb-12'>
                  {ambassdorList.map((item) => (
                    <div className='mt-8' key={item.id}> 
                      <Disclosure >
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="text-xl text-#9DAFBE flex gap-4 items-center">
                            <img src={`${open ? '/image/dropdown_icon.png' : '/image/dropup_icon.png'}`} className="w-6"/>
                            <span> {item.title} </span>
                          </Disclosure.Button>
                          <Disclosure.Panel className="pl-10 pt-4 pb-6">
                            <p className='text-base text-#5B6872 leading-relaxed tracking-wide'> {item.description} </p>
                            <Link href={item.url} target="_blank">
                              <div className='mt-6 flex gap-2'>
                                <p className='text-base text-#00F3AB'> Apply </p>
                                <img src='/image/apply_icon.svg' className='w-4'/>
                              </div>
                            </Link>
                          </Disclosure.Panel>
                        </>
                      )}
                      </Disclosure>
                    </div>
                  ))}
                </div>
              </div>
            </section>

          </div>

          <div className='col-span-2 mt-10 md:mt-0'>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
            { warriorsAmbassadorList.map((item) => (
              <AvatarCard
                key = {item.id}
                title = {item.title}
                name = {item.name}
                image = {item.avatar}
                description = {item.description}
                twitter_url = {item.twitter_url}
                twitter_username = {item.twitter_username}
              />

            ))}

            
            </div>

          </div>


        </div>

      </div>
    </>
  )
}
