import { motion } from 'framer-motion'

const clanItems = [
  {
    title: 'Manage clan',
    desc: 'Being a memelord, you’re in full control here: boss around until you’re out'
  },
  {
    title: 'Entry Fee',
    desc: 'Keep the feeble weaklings out by setting the entry requirements & fee'
  },
  {
    title: 'Attack Clans',
    desc: 'Your leadership shapes the world of gamefi: raid other clans to build up your treasury'
  },
  {
    title: 'Claim Rewards',
    desc: 'As a leader, you distribute rewards and take commission fees from winnings'
  }
]

const ClanMeme = () => {
  return (
    <section className='mx-auto mt-[60px] w-full lg:mt-[156px] lg:w-[1010px]'>
      <div className='mx-auto w-[221px] md:w-[294px] lg:w-[490px]'>
        <motion.h2
          initial={{
            opacity: 0,
            y: 70
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          className='text-center text-lg font-bold uppercase text-[#FFB800] md:text-[28px] lg:text-[60px] lg:leading-[60px]'
        >
          Clan MEME Dance
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
          className='mx-auto mt-[10px] w-full text-center text-xs font-bold text-[#fff] md:text-base lg:w-[441px] lg:text-2xl lg:leading-[25px]'
        >
          Get your rewards sky-high by becoming an all-powerful memelord
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
            y: 70
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.5
            }
          }}
          className='mx-auto flex w-[150px] items-center justify-between md:w-[200px] lg:mt-[30px] lg:w-[274px]'
        >
          <span
            style={{
              textShadow: ' 1px 0px 0px #925908'
            }}
            className='text-xs font-bold uppercase tracking-[1px] text-[#F3AE06] md:text-base lg:text-2xl'
          >
            Explore Whitepaper
          </span>
          <a className='cursor-pointer' href='#'>
            <svg
              width='26'
              height='26'
              viewBox='0 0 26 26'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='hidden lg:block'
            >
              <rect x='0.401367' y='0.500488' width='24.9972' height='24.999' rx='5' fill='#FFB800' />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M18.399 17.1763C18.4103 17.7285 18.867 18.167 19.4191 18.1557C19.9713 18.1444 20.4097 17.6876 20.3984 17.1354L20.185 6.69361C20.174 6.15731 19.7419 5.72517 19.2057 5.7142L8.76506 5.5007C8.21292 5.48941 7.75617 5.92791 7.74488 6.48011C7.73359 7.03231 8.17204 7.48911 8.72417 7.5004L16.8193 7.66594L5.69425 18.7923C5.30374 19.1828 5.30374 19.816 5.69425 20.2066C6.08475 20.5971 6.71788 20.5971 7.10838 20.2066L18.2335 9.08023L18.399 17.1763Z'
                fill='white'
              />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='18'
              height='17'
              viewBox='0 0 18 17'
              fill='none'
              className='block lg:hidden'
            >
              <rect x='0.5' width='17' height='17' rx='5' fill='#FFB800' />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M12.3 11.006C12.3068 11.3373 12.5809 11.6004 12.9122 11.5936C13.2436 11.5869 13.5067 11.3128 13.4999 10.9814L13.3718 4.71592C13.3652 4.39412 13.1059 4.13482 12.7841 4.12824L6.51859 4.00013C6.18724 3.99335 5.91314 4.25647 5.90637 4.58781C5.89959 4.91916 6.16271 5.19326 6.49405 5.20003L11.352 5.29936L4.67576 11.9756C4.44141 12.2099 4.44141 12.5899 4.67576 12.8243C4.91011 13.0586 5.29005 13.0586 5.5244 12.8243L12.2007 6.14799L12.3 11.006Z'
                fill='white'
              />
            </svg>
          </a>
        </motion.div>
      </div>

      <section className='mx-auto mt-10 grid grid-cols-2 gap-4 px-6 md:w-[500px] lg:w-full lg:grid-cols-4'>
        {clanItems.map((item, index) => {
          return <ClanItem key={index} title={item.title} desc={item.desc} />
        })}
        {clanItems.map((item, index) => {
          return <ClanItemMobile key={index} title={item.title} desc={item.desc} />
        })}
      </section>
    </section>
  )
}

interface IClanItem {
  title: string
  desc: string
}

const ClanItem = ({ title, desc }: IClanItem) => {
  return (
    <div className='item hidden flex-col justify-start gap-[10px] rounded-3xl bg-clan_dance px-5 pt-[96px] lg:flex'>
      <h2 className='text-center text-lg lg:text-2xl'>{title}</h2>
      <p className='text-center text-xs font-normal text-[#D6BFA9] lg:text-base lg:leading-[22px]'>{desc}</p>
    </div>
  )
}
const ClanItemMobile = ({ title, desc }: IClanItem) => {
  return (
    <div className='item flex h-[131px] w-full flex-col justify-start gap-[6px] rounded-tl-[20px] rounded-tr-[20px] bg-clan_mobile px-5 pt-8 shadow-[0_0.5px_0_0_#CCACF3] lg:hidden'>
      <h2 className='text-center text-lg lg:text-2xl'>{title}</h2>
      <p className='text-center text-xs font-normal text-[#D6BFA9] lg:text-base lg:leading-[22px]'>{desc}</p>
    </div>
  )
}

export default ClanMeme
