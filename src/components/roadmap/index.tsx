import { motion } from 'framer-motion'

const roadmaps = [
  {
    title: 'Play Airdrop - Q2 2024',
    desc: ['Introduce and Launch the Play-to-Airdrop game version'],
    background: '#FFB800'
  },
  {
    title: 'Play Airdrop - Q2 2024',
    desc: ['Start selling NFT Gardens', 'Start special Airdrop event for NFT Garden', 'Owners in 15 days'],
    background: '#FA7B7B'
  },
  {
    title: 'Play Airdrop - Q2 2024',
    desc: [
      'End Play-to-Airdrop campaign',
      'Announce TOP Leaderboard Winners',
      'Announce Airdrop',
      'Announce schedule to grant Airdrop rewards',
      'Start selling NFT Plants',
      'Announce schedule for Token listing and LP adding'
    ],
    background: '#F87BFA'
  },
  { title: 'Play Airdrop - Q2 2024', desc: ['Introduce Official GameFi version'], background: '#7BFAF3' }
]

const Roamap = () => {
  return (
    <main className='relative h-[1429px] w-full overflow-x-hidden bg-[url(./assets/minigame/minigame.png)] bg-cover bg-no-repeat pt-[83px]'>
      <section className='mx-auto w-full lg:w-[779px]'>
        <motion.h2
          initial={{
            opacity: 0,
            y: 70
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          className='text-center text-[60px] font-bold text-[#FFB800]'
        >
          MEME dance ROADMAP
        </motion.h2>
        <motion.p
          initial={{
            opacity: 0,
            y: 70
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.25
            }
          }}
          className='text-center text-[32px] font-bold leading-[20px] text-[#000]'
        >
          What we’re going to do on our path to world domination
        </motion.p>
      </section>
      <section className='relative z-10 mx-auto mt-[42px] flex w-[1200px] flex-col'>
        {roadmaps.map((item, index) => {
          return (
            <MileStone key={index} index={index} title={item.title} desc={item.desc} background={item.background} />
          )
        })}
      </section>
      <div className='overlay absolute left-0 top-0 h-full w-full bg-overlay_roadmap'></div>
    </main>
  )
}

interface IMileStone {
  title: string
  desc: String[]
  index: number
  background: string
}

const MileStone = ({ title, desc, index, background }: IMileStone) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? 1000 : -1000
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.25 * index
        }
      }}
      viewport={{ once: true }}
      className={`${index % 2 === 0 ? 'items-start justify-end' : ' flex-row-reverse items-start justify-end'} flex space-x-[52px]`}
    >
      <div className='flex h-[281px] w-[74px] flex-col items-center'>
        <p
          style={{ background }}
          className='h-[74px] w-[74px] rounded-[37px] border-[17px] border-[rgba(255,255,255,0.88)]'
        ></p>
        <p
          style={{
            borderWidth: 10,
            borderStyle: index === roadmaps.length - 1 ? 'dashed' : 'solid',
            borderColor: background
          }}
          className='h-[calc(100%-74px)]'
        ></p>
      </div>
      <div className='w-[510px]'>
        <h3 className='mb-5 text-[40px] font-bold uppercase leading-[60px] text-[#FFB800]'>{title}</h3>
        <p className='text-2xl font-bold leading-6 text-[#000]'>
          {desc.map((item, index) => {
            return <p key={index}>{item}</p>
          })}
        </p>
      </div>
    </motion.div>
  )
}

export default Roamap
