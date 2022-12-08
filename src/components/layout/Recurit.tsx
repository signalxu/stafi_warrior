

export function Recruit() {
  return(
    <>
      <div className="py-32 px-16">
        <img src="/image/beekeeper_icon.png" className="mx-auto w-24"/>
        <h1 className="text-center font-anton text-xl text-#FFA540 tracking-widest">
          Recruitment
        </h1>
        <h2 className="text-white font-anton text-3xl text-center mt-6 tracking-[.3em]">
          You will Get
        </h2>
        <div className="px-6 py-6 bg-gradient-to-b from-#1F2D41 via-#172231 to-#070B10 border-[1px] border-[#1A2835] mt-12 rounded-[15px]">
          <h3 className="text-center text-xl text-white font-anton">
            Financial Support
          </h3>
          <p className="text-center text-base mt-12">
            Monthly salary base（400～1200$USDT in $FIS) and bonus (0~200$USDT in $FIS) based on the contribution and performance. Apart from that, warriors have the opportunities to get the quarterly Warrior Star Award(500 FIS) and yearly Thanksgiving Gift (5000FIS) rewards.
          </p>
          <div className="mt-12 grid-cols-11 gap-2">
            <div className="col-span-2">
              <img src="/image/usdtprize_icon.svg" className="mx-auto w-14"/>
              <p className="text-xl text-[#00F3AB] text-center "> 400～1200 $USDT </p>
              <p className="text-xl text-[#00F3AB] text-center "> 400～1200 $USDT </p>
            </div>
            <div className="col-span-1">
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
