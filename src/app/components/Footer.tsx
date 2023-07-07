import Image from 'next/image'
import Link from 'next/link'
import { links } from '../constants/constants'


export function Footer () {
  return (

    <footer className="flex flex-row items-center justify-between gap-4 pt-36 px-12 pb-10 text-tertiary">
      <div className='flex flex-row gap-6'>
        {links.map((link, index) => {
          return (
            <Link key={index} href={link.href} target='blank'>
              <Image src={link.label} alt="search" width={15} height={15} />
            </Link>
          )
        })}
      </div>
      <div className='flex flex-col gap-2 text-sm'>
        <p>Esta es una página ficticia. Desarrollada por Lucas Brumatti.</p>
        <p>Clon para practicar mis skills © 2023</p>
      </div>
      
    </footer>

  )
}
