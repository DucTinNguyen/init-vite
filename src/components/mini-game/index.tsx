import party from '~/assets/minigame/party.png'
import BtnPlayDance from '../button/btn-dance'
import FillTopPage from './fill-top'
const MiniGame = () => {
  return (
    <main className='relative mx-auto h-[969px] w-full bg-[url(./assets/minigame/minigame.png)]'>
      <FillTopPage />
      <section className='mx-auto flex w-full items-center justify-between pt-[297px] lg:max-w-[1200px]'>
        <figure className='w-[600px]'>
          <img src={party} alt='honey party' />
        </figure>
        <div className='w-[486px]'>
          <h2 className='text-[40px] font-bold uppercase leading-[60px] text-[#FFB800]'>Telegram mini game</h2>
          <p className='mb-[65px] mt-[10px] text-xl font-bold leading-[28px] text-[#000]'>
            Meme Dance to Art app is available on both iOS and Android. So you can tap your photos on fly, on the go,
            whenever, whenever.
          </p>
          <BtnPlayDance className='mt-6 block h-[76px] w-[454px] text-[64px] leading-[70px]' />
        </div>
      </section>
    </main>
  )
}

export default MiniGame
