import Ton from './ton'
import cocos from '~/assets/technologies/cocos.png'
import ethereum from '~/assets/technologies/ethereum.png'
import firebase from '~/assets/technologies/firebase.png'
const Technology = () => {
  return (
    <main className='block bg-[#9EDE4E] py-4 lg:hidden'>
      <h2 className='text-center text-lg font-bold text-[#FFFFFF]'>TECHNOLOGY</h2>
      <section className='mt-4 flex flex-wrap items-center justify-center gap-[18px] px-7'>
        <Ton />
        <figure>
          <img src={cocos} alt='cocos' />
        </figure>
        <figure>
          <img src={ethereum} alt='cocos' />
        </figure>
        <figure>
          <img src={firebase} alt='cocos' />
        </figure>
      </section>
    </main>
  )
}

export default Technology
