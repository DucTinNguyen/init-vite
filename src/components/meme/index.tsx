import ClanMeme from './clan-meme'
import NftMeme from './nft-meme'

const Meme = () => {
  return (
    <main id='nft' className='nft_meme h-[860px] w-full bg-nft pt-8 lg:h-[1646px] lg:pt-[90px]'>
      <NftMeme />
      <ClanMeme />
    </main>
  )
}

export default Meme
