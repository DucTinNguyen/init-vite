import './App.css'
import About from './components/about'
import Banner from './components/banner'
import Header from './components/header'
import MiniGame from './components/mini-game'
import NftMeme from './components/nft'
import Tokenomics from './components/tokenomics'

function App() {
  return (
    <main>
      <Header />
      <Banner />
      <About />
      <MiniGame />
      <NftMeme />
      <Tokenomics />
    </main>
  )
}

export default App
