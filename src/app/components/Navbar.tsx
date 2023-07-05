import Link from 'next/link'
import Image from 'next/image'
import SearchIcon from './SearchIcon'

const links = [{
  label: 'Peliculas',
  route: '/'
},
{
  label: 'Movie',
  route: '/test'
}]

export function Navbar () {
  return (

    <header className='flex justify-between items-center px-10 py-6 text-secondary bg-black/90 fixed w-full z-50'>
        <div className='flex items-center gap-6'>
            <span className='hover:cursor-pointer'>
              <Image src="/hamburger-menu.svg" alt="hamburger-menu" width={30} height={30} className='hover:text-white ease-in-out duration-300' />
            </span>
            <ul className='flex items-center list-style-none gap-4'>
                { 
                links.map((link, index) => {
                    return (
                    <li key={index} className='hover:text-white ease-in-out duration-300'>
                        <Link href={link.route}>{link.label}</Link>
                    </li>
                    )
                })} 
            </ul>
        </div>
        <Image src='/hbo-logo2.png' alt="logo" width={130} height={20} className='hover:text-white ease-in-out duration-300' />
        <div className='flex items-center gap-6'>
            <span className='hover:cursor-pointer'>
              <Image src="/search.svg" alt="search" width={30} height={30} />
            </span>
            <button className='hover:text-white ease-in-out duration-300'>Inicie sesión</button>
        </div>
    </header>

  )
}
