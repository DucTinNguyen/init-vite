import babyDoge from '~/assets/sponsor/babydoge.svg fill.png'
import galxe from '~/assets/sponsor/galxe2.png.png'
import iguverse from '~/assets/sponsor/iguverse.svg.png'
import chiko from '~/assets/sponsor/chiko-roko.svg.png'
import carv from '~/assets/sponsor/carv.svg.png'
import bitmetis from '~/assets/sponsor/bitmetis2.png.png'
import nomis from '~/assets/sponsor/nomis.svg.png'
import magic from '~/assets/sponsor/magic.svg.png'
import spaceID from '~/assets/sponsor/spaceID.svg.png'
import notCoin from '~/assets/sponsor/notcoin.svg.png'
import fundo from '~/assets/sponsor/fundo.png'
import CryptoStart from './crypto-start'

const Partners = () => {
  return (
    <main className='partners relative h-[500px] w-full bg-[#421C5A] pt-[88px] lg:h-[915px]'>
      <section className='mx-auto max-w-[1200px]'>
        <div className='mx-auto hidden w-[669px] flex-col gap-[15px] lg:flex'>
          <p className='building text-2xl'>Building Together</p>
          <h2 className='text-center text-[64px] leading-[60px] tracking-[2px] text-[#F4F0EB] '>Our Partners</h2>
          <p className='text-center text-[32px] font-normal leading-[28px] text-[#D6BFA9]'>
            Projects we're collaborating with to ship a better Web3
          </p>
        </div>
        <h2 className='text-center text-[28px] font-bold uppercase text-[#FFB800]'>INVESTORS & PARTNERS</h2>
        <div className='sponsor mt-[73px] hidden grid-cols-5 lg:grid'>
          <figure>
            <img src={babyDoge} alt='' />
          </figure>
          <figure>
            <img src={galxe} alt='' />
          </figure>
          <figure>
            <img src={iguverse} alt='' />
          </figure>
          <figure>
            <img src={chiko} alt='' />
          </figure>
          <figure>
            <img src={carv} alt='' />
          </figure>
          <figure>
            <img src={bitmetis} alt='' />
          </figure>
          <figure>
            <img src={nomis} alt='' />
          </figure>
          <figure>
            <img src={magic} alt='' />
          </figure>
          <figure>
            <img src={spaceID} alt='' />
          </figure>
          <figure>
            <img src={notCoin} alt='' />
          </figure>
        </div>
        <div className='mx-auto mt-5 block w-[53px] lg:hidden'>
          <figure>
            <img src={fundo} alt='' />
          </figure>
        </div>
      </section>
      {/* start today */}
      <CryptoStart />
    </main>
  )
}

export default Partners
