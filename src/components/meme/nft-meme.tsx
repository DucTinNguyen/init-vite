import pepe from '~/assets/meme-nft/pepe-meme.png'
import duck from '~/assets/meme-nft/duck-meme.png'
import girl from '~/assets/meme-nft/girl-meme.png'
import doge from '~/assets/meme-nft/doge-meme.png'
import rabbit from '~/assets/meme-nft/rabbit-meme.png'

const memes = [pepe, duck, girl, doge, duck, rabbit, girl, doge]

const NftMeme = () => {
  return (
    <section className='mx-auto h-[900px] w-[1200px]'>
      <h2 className='text-center text-[60px] font-bold uppercase leading-[60px] text-[#FFB800]'>NFT meme</h2>
      <div className='mt-10 grid grid-cols-4 gap-6'>
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
