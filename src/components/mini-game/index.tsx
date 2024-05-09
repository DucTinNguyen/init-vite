import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import party from '~/assets/minigame/party.png'
import BtnPlayDance from '../button/btn-dance'
import FillTopPage from './fill-top'
const MiniGame = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  return (
    <main
      ref={ref}
      className='relative mx-auto h-[343px] w-full bg-[url(./assets/minigame/minigame.png)] md:h-[430px] lg:h-[969px]'
    >
      <FillTopPage />
      <section className='mx-auto flex w-full items-center justify-between space-x-4 px-6 pt-[110px] md:w-[533px] lg:w-[1200px] lg:space-x-0 lg:px-0 lg:pt-[297px]'>
        <motion.figure
          initial={{
            opacity: 0,
            y: 70
          }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 70
          }}
          className='w-[150px] md:w-[244px] lg:w-[600px]'
        >
          <img src={party} alt='honey party' />
        </motion.figure>
        <div className='w-[190px] md:w-[216px] lg:w-[486px]'>
          <motion.h2
            initial={{
              opacity: 0,
              y: 1000
            }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 1000
            }}
            className='text-base font-bold uppercase text-[#FFB800] lg:text-[40px] lg:leading-[60px]'
          >
            Telegram mini game
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0,
              y: 70
            }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 70,
              transition: {
                delay: 0.5
              }
            }}
            className='mt-[10px] text-xs font-bold text-[#000] lg:mb-[65px] lg:text-xl lg:leading-[28px]'
          >
            Meme Dance to Art app is available on both iOS and Android. So you can tap your photos on fly, on the go,
            whenever, whenever.
          </motion.p>
          <BtnPlayDance className='mt-6 block h-[36px] w-[165px] text-xl lg:h-[76px] lg:w-[454px] lg:text-[64px] lg:leading-[70px]' />
        </div>
      </section>
    </main>
  )
}

export default MiniGame
