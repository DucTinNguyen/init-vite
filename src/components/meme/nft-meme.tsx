import pepe from '~/assets/meme-nft/pepe-meme.png'
import duck from '~/assets/meme-nft/duck-meme.png'
import girl from '~/assets/meme-nft/girl-meme.png'
import doge from '~/assets/meme-nft/doge-meme.png'
import rabbit from '~/assets/meme-nft/rabbit-meme.png'
import { motion } from 'framer-motion'
import Marquee from 'react-fast-marquee'

// , duck, rabbit, girl, doge
const memes = [pepe, duck, girl, doge, duck, rabbit, girl, doge]

const NftMeme = () => {
  return (
    <section className='mx-auto w-full lg:h-[900px] lg:w-[1200px]'>
      <motion.h2
        initial={{
          opacity: 0,
          y: 70
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        className='text-center text-xl font-bold uppercase leading-[60px] text-[#FFB800] lg:text-[60px]'
      >
        NFT meme
      </motion.h2>
      <Marquee className='mt-4 grid grid-cols-4 px-6 lg:mt-10 lg:px-0'>
        {memes.slice(0, 4).map((item) => {
          return (
            <figure className='mr-2 h-full w-[80px] lg:mr-6 lg:w-full'>
              <img src={item} alt='meme' />
            </figure>
          )
        })}
      </Marquee>
      <Marquee direction='right' className='mt-4 grid grid-cols-4 px-6 lg:mt-10 lg:px-0'>
        {memes.slice(4, 8).map((item) => {
          return (
            <figure className='mr-2 h-full w-20 lg:mr-6 lg:w-full'>
              <img src={item} alt='meme' />
            </figure>
          )
        })}
      </Marquee>
    </section>
  )
}

export default NftMeme
