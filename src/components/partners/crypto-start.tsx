import cgs from '~/assets/partners/cgs.png'
const CryptoStart = () => {
  return (
    <main className='absolute bottom-0 h-[190px] w-full bg-[url(./assets/partners/circle-top.png)] bg-cover bg-top bg-no-repeat lg:h-[305px]'>
      <section className='mx-auto mt-8 w-full lg:w-[670px]'>
        <h2 className='text-center text-lg font-bold uppercase text-[#FFB800] lg:text-[64px] lg:leading-[60px]'>
          DEVELOPER
        </h2>
        <figure className='mx-auto mt-6 w-20 '>
          <img src={cgs} alt='cgs' />
        </figure>
      </section>
    </main>
  )
}

export default CryptoStart
