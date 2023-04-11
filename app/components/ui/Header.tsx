import { useState } from 'react'
import { MenuIcon } from '../atoms'
import { Navbar } from '../molecules'

import header from '@/styles/Header.module.css'
import logo from '@/public/logo.svg'
import Image from 'next/image'

export const Header = () => {
   const [isMenuActive, setIsMenuActive] = useState(false)

   const handleActiveMenu = () => {
      setIsMenuActive(!isMenuActive)
      document.querySelector('body')?.classList.toggle('no-scroll')
   }

   return (
      <header className={`${header.Header}`}>
         <div className={`${header.Container}`}>
            <picture className={`${header.Logo}`}>
               <Image src={logo.src} width={150} height={10} alt="Gian Franco Peralta" />
            </picture>

            <MenuIcon setIsActive={handleActiveMenu} isActive={isMenuActive} type="hamburguer" />
            <Navbar isMenuActive={isMenuActive} />
            <div className={`${header.Overlay} ${isMenuActive && header.Overlay_active}`} onClick={handleActiveMenu} />
         </div>
      </header>
   )
}
