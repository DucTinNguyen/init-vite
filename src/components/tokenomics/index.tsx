import Heading from '../common/heading'
import chart from '~/assets/tokenomics/chart-graphic.png'
const Tokenomics = () => {
  return (
    <main className='h-[1037px] w-full bg-[url(./assets/tokenomics/Tokenomic.png)] pt-8'>
      <section className='mx-auto max-w-[1548px]'>
        <Heading title='Tokenomic' className='mx-auto w-[314px]' />
        <section className='mt-[73px] flex justify-between'>
          <section className='flex w-[428px] flex-col items-end'>
            <TokenItem
              title='10% Airdrop'
              className='items-end'
              titleClass='text-[#F9575E] text-end'
              descClass='text-end'
              desc='10% of the overall supply is reserved for pairing with a
              liquidity pool on a decentralized exchange.'
            />
            <div className='mb-4 mt-[55px] h-2 w-full bg-[#fff] opacity-30'></div>
            <TokenItem
              title='5% SEED/partnerShip'
              titleClass='text-[#FFB800] text-end'
              className=''
              descClass='text-end'
              desc='10% of the overall supply is reserved for pairing with a
              liquidity pool on a decentralized exchange.'
            />
          </section>

          <figure className='flex justify-center'>
            <img src={chart} alt='chart' />
          </figure>
          <section className='flex w-[428px] flex-col items-start'>
            <TokenItem
              title='5% rewards'
              titleClass='text-[#4989F9]'
              desc='10% of the overall supply is reserved for pairing with a
              liquidity pool on a decentralized exchange.'
            />
            <div className='mb-4 mt-[55px] h-2 w-full bg-[#fff] opacity-30'></div>
            <TokenItem
              title='5% Team/MArketing'
              titleClass='text-[#E425F7]'
              desc='10% of the overall supply is reserved for pairing with a
              liquidity pool on a decentralized exchange.'
            />
          </section>
        </section>
      </section>
    </main>
  )
}

interface IItemToken {
  title: string
  desc: string
  titleClass?: string
  className?: string
  descClass?: string
}

const TokenItem = ({ title, desc, titleClass, className, descClass }: IItemToken) => {
  return (
    <div className={`flex flex-col items-start ${className}`}>
      <h3 className={`w-full text-[40px] font-bold uppercase ${titleClass}`}>{title}</h3>
      <p className={`text-start text-2xl font-normal text-[#B5E7ED] ${descClass}`}>{desc}</p>
    </div>
  )
}

export default Tokenomics
