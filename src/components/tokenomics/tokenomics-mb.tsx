import chart from '~/assets/tokenomics/chart-graphic.png'

const TokenomicsMobile = () => {
  return (
    <main className='mx-auto mt-[60px] flex w-full items-center justify-between px-8 md:w-[500px] lg:hidden '>
      <section>
        <figure className='w-[168px] md:w-[250px]'>
          <img src={chart} alt='chart' />
        </figure>
      </section>
      <section className='flex flex-col gap-2'>
        <div className='flex items-center space-x-[6px]'>
          <span className='h-3 w-3 min-w-3 rounded-[1px] bg-[#4BDD74]'></span>
          <span className='text-xs font-normal leading-[15px] text-[#FFFFFF]'>Airdrop for Pre-launch</span>
        </div>
        <div className='flex items-center space-x-[6px]'>
          <span className='h-3 w-3 min-w-3 rounded-[1px] bg-[#FE5A5A]'></span>
          <span className='text-xs font-normal leading-[15px] text-[#FFFFFF]'>Team/Marketing</span>
        </div>
        <div className='flex items-center space-x-[6px]'>
          <span className='h-3 w-3 min-w-3 rounded-[1px] bg-[#974AF6]'></span>
          <span className='text-xs font-normal leading-[15px] text-[#FFFFFF]'>Partnership/seed</span>
        </div>
        <div className='flex items-center space-x-[6px]'>
          <span className='h-3 w-3 min-w-3 rounded-[1px] bg-[#3D89FC]'></span>
          <span className='text-xs font-normal leading-[15px] text-[#FFFFFF]'>Rewards</span>
        </div>
        <div className='flex items-center space-x-[6px]'>
          <span className='h-3 w-3 min-w-3 rounded-[1px] bg-[#FFDD63]'></span>
          <span className='text-xs font-normal leading-[15px] text-[#FFFFFF]'>LP</span>
        </div>
      </section>
    </main>
  )
}

export default TokenomicsMobile
