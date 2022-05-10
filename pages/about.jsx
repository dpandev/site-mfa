import React from 'react'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import Link from 'next/link'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.heading}>
          <h2>About</h2>
        </div>
        <div className={styles.text}>
          <span>Mayonnaise Farmers Alliance is an established firm committed to providing our clients, their employees, and our team members with a safe and healthy workplace. Our leaders have taken great pride in building their team of experienced and qualified team members, which make up the backbone of our company. Our work ethic is at the forefront of our brand, and our philosophy is to develop a unified partnership between each team member as well as with our clients.</span>
        </div>
        <Link href='/contact'>
          <a className={styles.button}>Contact Us</a>
        </Link>
      </div>
      <div className={`${styles.section} ${styles.marginTop}`}>
        <div className={styles.heading}>
          <h2>Our History</h2>
        </div>
        <div className={styles.text}>
          <span>MFA was founded in 1992 as an organization for farmers. We use farmer-led investigation and information sharing to help farmers practice an agriculture that benefits both the land and people. Our members have conventional and organic systems; employ diverse management practices; run operations of all sizes; and come from a range of backgrounds. These farmers come together, however, because they believe in nature as the model for agriculture and they are committed to moving their operations toward sustainability.</span>
        </div>
        <Link href='/services'>
          <a className={styles.button}>View Our Services</a>
        </Link>
      </div>
      <div className={styles.bottom}>
          <Image
            src='/../public/images/bg-farming.png'
            layout='responsive'
            width={200}
            height={100}
            className={styles.image}
          />
        </div>
    </div>
  )
}

export default About
