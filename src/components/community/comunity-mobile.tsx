import discord from '~/assets/commutity/discord 1.png'
import twitter from '~/assets/commutity/twitter (2) 1.png'
import telegram from '~/assets/commutity/telegram 1.png'

const CommunityMobile = () => {
  return (
    <main className='block h-[180px] bg-[#421c5a] lg:hidden'>
      <section className='mx-auto w-[172px] pt-12'>
        <h2 className='text-lg font-bold text-[#FFB800]'>JOIN OUR COMMUNITY</h2>
        <div className='mx-auto mt-5 flex h-5 w-[87px] items-center justify-between rounded-[14px] bg-[#F5D7FF] px-2 py-[2px]'>
          <img src={discord} alt='discord' />
          <img src={twitter} alt='discord' />
          <img src={telegram} alt='discord' />
        </div>
      </section>
    </main>
  )
}

export default CommunityMobile
