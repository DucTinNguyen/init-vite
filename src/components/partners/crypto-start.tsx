import BtnPlayDance from '../button/btn-dance'

const CryptoStart = () => {
  return (
    <main className='absolute bottom-0 h-[305px] w-full bg-[url(./assets/partners/circle-top.png)] bg-cover bg-no-repeat'>
      <section className='mx-auto mt-8 w-[670px]'>
        <h2 className='text-center text-[64px] font-bold uppercase leading-[60px] text-[#FFB800]'>
          CRYPTO MEME DANCE STARTS TODAY!
        </h2>
        <BtnPlayDance className='mx-auto mt-10 block h-[76px] w-[454px] text-[64px] leading-[60px]' />
      </section>
    </main>
  )
}

export default CryptoStart
