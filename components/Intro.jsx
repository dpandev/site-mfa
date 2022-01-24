import styles from '../styles/Intro.module.css'
import Image from 'next/image'
import Circle from './Circle'

const Intro = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor='#004976' top='-50vh' left='-50vh' />
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}>United</span> We Stand
        </h1>
        <p className={styles.description}>Bringing together mayonnaise farmers across the globe to empower the cultivation and distribution of mayonnaise in every world market.</p>
        <button className={styles.button}>Discover</button>
      </div>
      <div className={styles.card}>
        <Image src='/images/mayo-can.png' 
          alt='' 
          width='100%' 
          height='100%' 
          layout='responsive'
          objectFit='contain'
        />
      </div>
    </div>
  )
}

export default Intro
