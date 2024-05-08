import React from 'react'

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
    <footer className='h-[75px]  bg-[#421C5A]'>
      <ul className='mx-auto flex w-full items-center justify-center gap-8 lg:w-[1200px]'>
        {menus.map((menu) => (
          <li key={menu.id}>
            <a href={menu.href} className={`px-3 py-6 text-xl font-bold capitalize leading-[64px] text-[#EA9517]`}>
              {menu.title}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer
