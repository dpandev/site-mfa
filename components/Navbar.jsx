import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <a href="/">Mayonnaise Farmers Alliance</a>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href='/'>Home</Link>
        </li>
        <li className={styles.listItem}>
          <Link href='/farmers'>Farmers</Link>
        </li>
        <li className={styles.listItem}>
          <Link href='/food/services'>Food Services</Link>
        </li>
        <li className={styles.listItem}>
          <Link href='/food/saftey'>Food Saftey</Link>
        </li>
        <li className={styles.listItem}>
          <Link href='/about'>About Us</Link>
        </li>
        <li className={styles.listItem}>
          <Link href='/contact'>Contact Us</Link>
        </li>
      </ul>
    </div>
  )
}
