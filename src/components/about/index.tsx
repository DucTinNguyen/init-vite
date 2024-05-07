import bgAbout from '~/assets/about/bg-about.png'
import icPepe from '~/assets/about/pepe-coin.svg'
import icFloki from '~/assets/about/floki-coin.svg'
import icTamadoge from '~/assets/about/tamadoge.webp.svg'
import icDogeKiller from '~/assets/about/doge-killer.webp.svg'
import icDogeCoin from '~/assets/about/doge-coin.webp.svg'
import icArb from '~/assets/about/arbdoge-ai.webp.svg'
import icMilady from '~/assets/about/milady-coin.webp.svg'
import icMona from '~/assets/about/mona-coin.webp.svg'

import Heading from '../common/heading'
import Marquee from 'react-fast-marquee'

const list = [
  {
    icon: icPepe,
    title: 'Pepe Coin'
  },
  {
    icon: icFloki,
    title: 'Floki Coin'
  },
  {
    icon: icTamadoge,
    title: 'Tamadoge'
  },
  {
    icon: icDogeKiller,
    title: 'Doge Killer'
  },
  {
    icon: icDogeCoin,
    title: 'Dogecoin'
  },
  {
    icon: icArb,
    title: 'Arbdoge AI'
  },
  {
    icon: icMilady,
    title: 'Milady Coin'
  },
  {
    icon: icMona,
    title: 'Mona Coin'
  }
]

const About = () => {
  return (
    <main className='about h-[929px] w-full bg-[url(./assets/about/bg-about.png)] py-10'>
      <section className='mx-auto w-[1037px]'>
        <Heading className='mx-auto w-[540px]' subtitle='Hello' title='meme dance' />
        <div className='mt-[55px] flex flex-col gap-5'>
          <p className='text-center text-xl font-normal leading-[30px] text-[#fff]'>
            Welcome to <b>Meme Dance,</b> the innovative Telegram Mini App where finance meets fun in a vibrant virtual
            ecosystem. This groundbreaking Telegram Mini App is fully compatible with the TON ecosystem, ensuring
            seamless integration and unparalleled accessibility for users worldwide. From seasoned investors to
            newcomers exploring the world of cryptocurrency, <b>Meme Dance,</b> offers an engaging platform where
            everyone can thrive.
          </p>
          <p className='text-center text-xl font-normal leading-[30px] text-[#fff]'>
            What sets <b>Meme Dance,</b> apart are its three key advantages: simplicity, beginner-friendliness, and
            viral social features. With an intuitive interface and straightforward gameplay mechanics, players of all
            skill levels can easily navigate the world of <b>Meme Dance,</b> and start earning rewards from day one.
            Additionally, the game's viral social features enable players to connect with friends, form alliances, and
            compete for glory on the global stage, fostering a sense of camaraderie and community among players.
          </p>
          <p className='text-center text-xl font-normal leading-[30px] text-[#fff]'>
            Join the <b>Meme Dance,</b> revolution today and embark on an exciting journey where financial success and
            entertainment collide in the palm of your hand.
          </p>
        </div>
      </section>
      <section className='mt-[163px] flex flex-col gap-y-[10px]'>
        <Marquee
          style={{
            width: '1600px',
            margin: 'auto'
          }}
        >
          {list.map(({ icon, title }, index) => (
            <li key={index} className='mr-10 flex items-center gap-3'>
              <figure className='h-12 w-12 min-w-12'>
                <img src={icon} alt={title} />
              </figure>
              <span className='name_coin text-[#EBF3F4]'>{title}</span>
            </li>
          ))}
        </Marquee>
        <Marquee
          style={{
            width: '1600px',
            margin: 'auto'
          }}
          delay={1}
        >
          {list.map(({ icon, title }, index) => (
            <li key={index} className='mr-10 flex items-center gap-3'>
              <figure className='h-12 w-12 min-w-12'>
                <img src={icon} alt={title} />
              </figure>
              <span className='name_coin text-[#EBF3F4]'>{title}</span>
            </li>
          ))}
        </Marquee>
      </section>
    </main>
  )
}

export default About
