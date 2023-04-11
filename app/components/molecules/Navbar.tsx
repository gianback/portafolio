import Link from 'next/link'
import navbar from '@/styles/Navbar.module.css'

const menuList = [
   {
      label: 'Inicio',
      url: '/',
   },
   {
      label: 'Proyectos',
      url: '/projects',
   },
   {
      label: 'Contacto',
      url: '/contact',
   },
]

interface NavbarProps {
   isMenuActive: boolean
}

export const Navbar = ({ isMenuActive }: NavbarProps) => {
   return (
      <nav className={`${navbar.Navbar} ${isMenuActive && navbar.Navbar_active}`}>
         {menuList.map(({ label, url }) => (
            <li key={label} className="font-medium text-lg">
               {label}
            </li>
         ))}
      </nav>
   )
}
