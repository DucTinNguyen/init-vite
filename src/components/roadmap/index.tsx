import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

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
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <main
      ref={ref}
      id='roadmap'
      className='relative h-[1000px] w-full bg-[url(./assets/minigame/minigame.png)] bg-cover bg-no-repeat pt-6 lg:h-[1429px] lg:pt-[83px]'
    >
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
          className='text-center text-xl font-bold uppercase text-[#FFB800] lg:text-[60px] lg:leading-[60px]'
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
          className='text-center text-xs font-bold text-[#000] lg:text-[32px] lg:leading-[20px]'
        >
          What we’re going to do on our path to world domination
        </motion.p>
      </section>
      <section className='relative z-10 mx-auto mt-[42px] flex w-[350px] flex-col lg:w-[1200px]'>
        {roadmaps.map((item, index) => {
          return (
            <MileStone
              inView={inView}
              key={index}
              index={index}
              title={item.title}
              desc={item.desc}
              background={item.background}
            />
          )
        })}
      </section>
      <div className='overlay absolute left-0 top-1/2 h-full w-full bg-overlay_roadmap lg:top-0'></div>
    </main>
  )
}

interface IMileStone {
  title: string
  desc: String[]
  index: number
  background: string
  inView: boolean
}

const MileStone = ({ title, desc, index, background, inView }: IMileStone) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? 1000 : -1000
      }}
      animate={{
        opacity: inView ? 1 : 0,
        x: inView ? 0 : index % 2 === 0 ? 1000 : -1000,
        transition: {
          delay: 0.25 * index
        }
      }}
      viewport={{ once: true }}
      className={`${index % 2 === 0 ? 'items-start justify-end' : ' flex-row-reverse items-start justify-end'} flex h-fit space-x-4 lg:space-x-[52px]`}
    >
      <div className='flex h-[210px] w-5 flex-col items-center lg:h-[281px] lg:w-[74px]'>
        <p
          style={{ background }}
          className='h-5 w-5 rounded-[10px] border-[5px] border-[rgba(255,255,255,0.88)] lg:h-[74px] lg:w-[74px] lg:rounded-[37px] lg:border-[17px]'
        ></p>
        <p
          style={{
            borderStyle: index === roadmaps.length - 1 ? 'dashed' : 'solid',
            borderColor: background
          }}
          className='h-[calc(100%-20px)] border-2 lg:h-[calc(100%-74px)] lg:border-[10px]'
        ></p>
      </div>
      <div className='w-[149px] lg:w-[510px]'>
        <h3 className='text-base font-bold uppercase text-[#FFB800] lg:mb-5 lg:text-[40px] lg:leading-[60px]'>
          {title}
        </h3>
        <p className='text-xs font-bold text-[#000] lg:text-2xl lg:leading-6'>
          {desc.map((item, index) => {
            return <p key={index}>{item}</p>
          })}
        </p>
      </div>
    </motion.div>
  )
}

export default Roamap
