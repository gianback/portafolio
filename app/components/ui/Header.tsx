import styles from '../../styles/Container.module.css'
import { Navbar } from '../molecules'

export const Header = () => {
   return (
      <header className={`${styles.Container} flex items-center justify-between py-8`}>
         <div>logo</div>
         <Navbar />
      </header>
   )
}
