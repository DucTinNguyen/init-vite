import pepeDance from '~/assets/dance/pepe-dance.png'
import overlay from '~/assets/dance/EF.png'
import bgLight from '~/assets/dance/bg-light.png'
import characters from '~/assets/dance/NV.png'
const Dance = () => {
  return (
    <main className='dance relative h-[300px] w-full overflow-hidden bg-[url(./assets/dance/DJ.png)] bg-cover bg-top bg-no-repeat md:h-[478px] lg:h-[1079px] lg:bg-bottom'>
      <section className=''>
        <figure className='relative mx-auto w-[250px] md:w-[350px] lg:w-[700px]'>
          <img src={pepeDance} alt='pepe dancer' className='relative z-10 lg:w-[700px]' />
          <img src={bgLight} alt='pepe dancer' className='pepe_dancer absolute top-0 lg:w-[800px]' />
        </figure>
      </section>
      <figure className='absolute bottom-0 left-1/2 z-10 w-full -translate-x-1/2 lg:w-[1727px]'>
        <img src={characters} alt='pepe dancer' />
      </figure>

      {/* overlay */}
      <figure>
        <img src={overlay} alt='overlay' className='absolute left-0 top-0 h-full w-full' />
      </figure>
    </main>
  )
}

export default Dance
