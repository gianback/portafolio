import Link from 'next/link'

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

export const Navbar = () => {
   return (
      <nav className="flex items-center gap-6">
         {menuList.map(({ label, url }) => (
            <Link key={label} href={url} className="font-medium text-lg">
               {label}
            </Link>
         ))}
      </nav>
   )
}
