import './App.css'
import About from './components/about'
import Banner from './components/banner'
import Community from './components/community'
import CommunityMobile from './components/community/comunity-mobile'
import Dance from './components/dance'
import Footer from './components/footer'
import Header from './components/header'
import Meme from './components/meme'
import MiniGame from './components/mini-game'
import Partners from './components/partners'
import Roamap from './components/roadmap'
import Technology from './components/technology'
import Tokenomics from './components/tokenomics'

function App() {
  return (
    <main className='overflow-x-hidden'>
      <Header />
      <Banner />
      <About />
      <MiniGame />
      <Dance />
      <Meme />
      <Tokenomics />
      <Roamap />
      <Partners />
      <Technology />
      <CommunityMobile />
      <Community />
      <Footer />
    </main>
  )
}

export default App
