import party from '~/assets/minigame/party.png'
import BtnPlayDance from '../button/btn-dance'
import FillTopPage from './fill-top'
import { motion, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
const MiniGame = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  useEffect(() => {
    console.log('Element is in view: ', isInView)
  }, [isInView])
  return (
    <main ref={ref} className='relative mx-auto h-[969px] w-full bg-[url(./assets/minigame/minigame.png)]'>
      <FillTopPage />
      <section className='mx-auto flex w-full items-center justify-between pt-[297px] lg:max-w-[1200px]'>
        <motion.figure
          initial={{
            opacity: 0,
            y: 1000
          }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 1000
          }}
          className='h-full w-[600px]'
        >
          <img src={party} alt='honey party' />
        </motion.figure>
        <div className='w-[486px]'>
          <motion.h2
            initial={{
              opacity: 0,
              y: 1000
            }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 1000
            }}
            className='text-[40px] font-bold uppercase leading-[60px] text-[#FFB800]'
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
            className='mb-[65px] mt-[10px] text-xl font-bold leading-[28px] text-[#000]'
          >
            Meme Dance to Art app is available on both iOS and Android. So you can tap your photos on fly, on the go,
            whenever, whenever.
          </motion.p>
          <BtnPlayDance className='mt-6 block h-[76px] w-[454px] text-[64px] leading-[70px]' />
        </div>
      </section>
    </main>
  )
}

export default MiniGame
