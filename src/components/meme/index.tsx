import ClanMeme from './clan-meme'
import NftMeme from './nft-meme'

const Meme = () => {
  return (
    <main id='nft' className='nft_meme h-[860px md:h-full] w-full bg-nft pt-8 md:pt-[90px] lg:h-[1646px]'>
      <NftMeme />
      <ClanMeme />
    </main>
  )
}

export default Meme
