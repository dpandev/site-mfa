import Link from 'next/link'
import styles from '../styles/404.module.css'

export default function FourOhFour() {
  return (
    <>
      <div className={styles.container}>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <Link href='/'>
          <a className={styles.button}>Go Home</a>
        </Link>
      </div>
    </>
  )
}