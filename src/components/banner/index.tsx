import logoBanner from '~/assets/banner/logo-banner.png'
import doge from '~/assets/banner/MEME-BASIC_0007_DOGE.png'
import dogeMb from '~/assets/banner/MEME-BASIC_0007_DOGE (1).png'
import pepe from '~/assets/banner/MEME-BASIC_0006_PEPE.png'
import pepeMb from '~/assets/banner/MEME-BASIC_0006_PEPE (1).png'
import pepeTablet from '~/assets/banner/MEME-BASIC_0006_PEPE-tablet.png'
import light from '~/assets/banner/lay.png'
import BtnPlayDance from '../button/btn-dance'
const Banner = () => {
  return (
    <main
      id='banner'
      className='banner relative h-[400px] w-full bg-[url(./assets/banner/banner-mb.png)] bg-cover bg-bottom bg-no-repeat md:h-[520px] lg:h-screen lg:bg-[url(./assets/banner/bg-banner.png)]'
    >
      <section className='relative z-50 mx-auto w-full pt-[90px] lg:w-[873px] lg:pt-[100px]'>
        <figure className='mx-auto w-[217px] md:w-[383px] lg:h-[280px] lg:w-[840px]'>
          <img src={logoBanner} alt='logobanner' />
        </figure>
        <p className='heading mx-auto mt-2 w-[188px] text-base md:w-[330px] md:text-[28px] lg:mt-5 lg:w-[750px] lg:text-[64px]'>
          Play,Dance & Get Aidrop
        </p>
        <p className='mx-auto w-[204px] px-6 text-center text-xs font-bold text-[#fff] opacity-80 md:w-[330px] md:text-[10px] lg:mt-[10px] lg:w-[710px] lg:text-2xl lg:leading-[25px]'>
          Meme Dance is an innovative new gaming platform designed for gaming enthusiasts. From active betting to
          passive staking, there are rewards for all users.
        </p>
        <BtnPlayDance className='shaking mx-auto mt-6 block h-[28px] w-[108px] text-[15px] md:h-[34px] md:w-[200px] md:text-[28px] md:leading-[30px] lg:h-[76px] lg:w-[454px] lg:text-[64px] lg:leading-[70px]' />
      </section>
      <figure className='light absolute left-1/2 top-[75px] hidden h-[968px] w-[1090px] -translate-x-1/2 opacity-50 lg:block'>
        <img src={light} alt='light' />
      </figure>
      <section className='mx-auto w-full lg:w-[1720px]'>
        <figure className='absolute bottom-0 hidden lg:block'>
          <img src={doge} alt='doge' />
        </figure>
        <figure className='absolute bottom-0 right-[88px] hidden lg:block'>
          <img src={pepe} alt='doge' />
        </figure>
        <figure className='absolute bottom-0 left-0 block w-[180px] md:w-[256px] lg:hidden'>
          <img src={dogeMb} alt='doge' />
        </figure>
        <figure className='absolute bottom-0 right-0 block md:hidden'>
          <img src={pepeMb} alt='doge' />
        </figure>
        <figure className='absolute bottom-0 right-[-60px] hidden md:block md:w-[256px] lg:hidden'>
          <img src={pepeTablet} alt='doge' />
        </figure>
      </section>
    </main>
  )
}

export default Banner
