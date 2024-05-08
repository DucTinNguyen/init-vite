import twitter from '~/assets/commutity/twitter.svg'
import telegram from '~/assets/commutity/telegram.svg'
import discord from '~/assets/commutity/discord.svg'
const Community = () => {
  return (
    <main className='bg-[#9EDE4E] py-[70px]'>
      <section className='mx-auto w-[905px]'>
        <p className='text-center text-[32px] font-bold leading-[25px] text-[#012F33]'>Join us right now!</p>
        <h2 className='my-3 text-center text-[64px] font-bold uppercase leading-[60px] text-[#000]'>
          Join The Community
        </h2>
        <p className='text-center text-[24px] font-bold leading-[25px] text-[#012F33]'>
          Join us in the arena and stay connected with exclusive content and updates in our communities!
        </p>
        <div className='mx-auto mt-[30px] flex w-[280px] items-center justify-between'>
          <img src={twitter} alt='twitter' />
          <img src={telegram} alt='twitter' />
          <img src={discord} alt='twitter' />
        </div>
      </section>
    </main>
  )
}

export default Community
