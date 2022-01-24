import styles from '../styles/MainSection.module.css'
import Image from 'next/image'

const MainSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstSection}>
        <h1 className={styles.title}>
          <span className={styles.brand}>United</span> We Stand
        </h1>
        <p className={styles.description}>Bringing together mayonnaise farmers across the globe to empower the cultivation and distribution of mayonnaise in every world market.</p>
        <button className={styles.button}>Learn More</button>
      </div>
      <div className={styles.secondSection}>
        <div className={styles.card}>
          <Image 
            src='/images/mayo-bowl.png' 
            alt='' 
            width='100%' 
            height='100%' 
            layout='responsive'
            objectFit='contain'
          />
        </div>
        <div className={styles.card}>
          <h2 className={styles.subheading}>A partner for the</h2>
          <p className={styles.description}>lorem ipsum</p>
          <button className={styles.button}>Learn</button>
        </div>
      </div>
      <div className={styles.thirdSection}>
        <div className={styles.cardAlt}>
          <h2 className={styles.subheading}>Meet the Farmers</h2>
          <p className={styles.description}>lorem ipsum</p>
          <button className={styles.button}>Learn</button>
        </div>
        <div className={styles.card}>
          <Image 
            src='/images/farmers.jpg' 
            alt='' 
            width='100%' 
            height='100%' 
            layout='responsive'
            objectFit='contain'
          />
        </div>
      </div>
    </div>
  )
}

export default MainSection
