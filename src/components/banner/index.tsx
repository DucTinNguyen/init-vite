import logoBanner from '~/assets/banner/logo-banner.png'
import doge from '~/assets/banner/MEME-BASIC_0007_DOGE.png'
import pepe from '~/assets/banner/MEME-BASIC_0006_PEPE.png'
import BtnPlayDance from '../button/btn-dance'
const Banner = () => {
  return (
    <main className='banner h-screen w-full bg-[url(./assets/banner/bg-banner.png)] bg-cover bg-bottom bg-no-repeat'>
      <section className='mx-auto w-[873px] pt-[100px]'>
        <figure className=' h-[280px]'>
          <img src={logoBanner} alt='logobanner' />
        </figure>
        <p className='heading mx-auto w-[750px] text-[64px]'>Play,Dance & Get Aidrop</p>
        <p className='mx-auto w-[710px] px-6 text-center text-2xl font-bold leading-[25px] text-[#fff] opacity-80'>
          Meme Dance is an innovative new gaming platform designed for gaming enthusiasts. From active betting to
          passive staking, there are rewards for all users.
        </p>
        <BtnPlayDance className='shaking mx-auto mt-6 block h-[76px] w-[454px] text-[64px] leading-[70px]' />
      </section>
      <section className='mx-auto w-[1720px]'>
        <figure className='absolute bottom-0'>
          <img src={doge} alt='doge' />
        </figure>
        <figure className='absolute bottom-0 right-[88px]'>
          <img src={pepe} alt='doge' />
        </figure>
      </section>
    </main>
  )
}

export default Banner
