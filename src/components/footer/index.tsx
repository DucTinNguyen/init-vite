import logo from '~/assets/header/logo.png'

const menus = [
  {
    id: 1,
    title: 'home',
    href: '#'
  },
  {
    id: 2,
    title: 'about',
    href: '#about'
  },
  {
    id: 3,
    title: 'nft',
    href: '#nft'
  },
  {
    id: 4,
    title: 'tokenomics',
    href: '#tokenomics'
  },
  {
    id: 5,
    title: 'roadmap',
    href: '#roadmap'
  },
  {
    id: 6,
    title: 'whitepaper',
    href: '#whitepaper'
  }
]

const Footer = () => {
  return (
    <footer className='flex  h-[75px] items-center justify-center bg-[#421C5A]'>
      <ul className='mx-auto hidden w-full items-center justify-center gap-8 lg:flex lg:w-[1200px]'>
        {menus.map((menu) => (
          <li key={menu.id}>
            <a href={menu.href} className={`px-3 py-6 text-xl font-bold capitalize leading-[64px] text-[#EA9517]`}>
              {menu.title}
            </a>
          </li>
        ))}
      </ul>
      <figure className='mx-auto block h-[28px] w-[83px] lg:hidden'>
        <img src={logo} alt='logo' />
      </figure>
    </footer>
  )
}

export default Footer
