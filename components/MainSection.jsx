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
        <button className={`${styles.grow} ${styles.button}`}>Learn More</button>
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
        <div className={styles.cardAlt}>
          <h2 className={styles.subheading}>Partners with the best mayonnaise producers in the world</h2>
          <p className={styles.description}>Mayonnaise Farmers Alliance brings 1300+ years of industry experience and empowers mayonnaise farmers to unleash the full potential of thier crop.</p>
          <button className={`${styles.grow} ${styles.button}`}>Learn More</button>
        </div>
      </div>
      <div className={styles.eventBanner}>
        <h2>Checkout this year's Mayonnaise Festivals!</h2>
        <button className={styles.grow}>View Events</button>
      </div>
      <div className={styles.thirdSection}>
        <div className={styles.cardAlt}>
          <h2 className={styles.subheading}>Meet the Farmers</h2>
          <p className={styles.description}>Meet our growers from far and wide that have jumped on board to partner with us.</p>
          <button className={`${styles.grow} ${styles.button}`}>Learn More</button>
        </div>
        <div className={styles.card}>
          <Image 
            src='/images/farmer.png' 
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
