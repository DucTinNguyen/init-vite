import pepe from '~/assets/meme-nft/pepe-meme.png'
import duck from '~/assets/meme-nft/duck-meme.png'
import girl from '~/assets/meme-nft/girl-meme.png'
import doge from '~/assets/meme-nft/doge-meme.png'
import rabbit from '~/assets/meme-nft/rabbit-meme.png'
import { motion } from 'framer-motion'

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
      <div className='mt-4 grid grid-cols-4 gap-2 px-6 lg:mt-10 lg:gap-6 lg:px-0'>
        {memes.map((item) => {
          return (
            <figure className='h-full w-full'>
              <img src={item} alt='meme' />
            </figure>
          )
        })}
      </div>
    </section>
  )
}

export default NftMeme
