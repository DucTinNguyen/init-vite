import logo from '~/assets/header/logo.png'
import BtnPlayDance from '../button/btn-dance'

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

const Header = () => {
  return (
    <header className='fixed left-0 top-0 w-full bg-[rgba(11,11,11,0.7)]'>
      <section className='mx-auto flex h-[75px] w-full items-center justify-between lg:max-w-[1200px]'>
        <figure className='w-[168px]'>
          <img src={logo} alt='logo' />
        </figure>
        <nav className='flex items-center gap-x-8'>
          <ul className='flex items-center gap-8'>
            {menus.map((menu) => (
              <li key={menu.id}>
                <a href={menu.href} className={`px-3 py-6 text-xl font-bold capitalize leading-[64px] text-[#EA9517]`}>
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
          <BtnPlayDance className='h-[50px] w-[214px] text-[32px]' />
        </nav>
      </section>
    </header>
  )
}

export default Header
