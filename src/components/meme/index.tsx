import ClanMeme from './clan-meme'
import NftMeme from './nft-meme'

const Meme = () => {
  return (
    <main className='nft_meme h-[1646px] w-full bg-nft pt-[90px]'>
      <NftMeme />
      <ClanMeme />
    </main>
  )
}

export default Meme
