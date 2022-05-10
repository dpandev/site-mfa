import React from 'react'
import Image from 'next/image'
import styles from '../styles/Services.module.css'
import Link from 'next/link'

const Services = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstSection}>
        <div className={styles.card}>
          <Image 
            src='/images/mayo-can.png' 
            alt='' 
            width='100%' 
            height='100%' 
            layout='responsive'
            objectFit='contain'
            className={styles.cardImage}
          />
        </div>
        <div className={styles.cardAlt}>
          <h2 className={styles.subheading}>Produce Safety Program</h2>
          <p className={styles.description}>The MFA Produce Safety Program registers and inspects facilities that grow, harvest, pack or hold produce that is commonly consumed raw. Foodborne illnesses pose a serious health risk to individuals, and to the viability of businesses and industries impacted by an outbreak. The program inspects farms and facilities to ensure proper food safety practices, established through scientific methods, are followed and documented to help protect human health.</p>
        </div>
      </div>
      <div className={styles.thirdSection}>
        <div className={styles.cardAlt}>
          <h2 className={styles.subheading}>Agricultural Mediation</h2>
          <p className={styles.description}>The MFA Agricultural Mediation Program helps farmers and ranchers who are dealing with contentious issues. The program covers agricultural loans, regardless of whether the loans are made or guaranteed by USDA or a third party.</p>
        </div>
        <div className={`${styles.card} ${styles.noBottomPad}`}>
          <Image 
            src='/images/plant.png' 
            alt='' 
            width='100%' 
            height='100%' 
            layout='responsive'
            objectFit='contain'
          />
        </div>
      </div>
      <div className={styles.banner}>
        <h2>{"We're proud to take part in overseeing over 43 million acres!"}</h2>
        <button className={styles.grow}><Link href='/contact'>Contact Us</Link></button>
      </div>
      <div className={styles.secondSection}>
        <div className={styles.card}>
          <Image 
            src='/images/scale.png' 
            alt='' 
            width='100%' 
            height='100%' 
            layout='responsive'
            objectFit='contain'
            className={styles.cardImage}
          />
        </div>
        <div className={styles.cardAlt}>
          <h2 className={styles.subheading}>Measurement Standards Program</h2>
          <p className={styles.description}>The Measurement Standards Program provides consumer protection and promotes equity and integrity in the marketplace. Both buyer and seller rely on accurate measurement and pricing during commercial transactions. This program establishes and enforces the method of sale for a given commodity when an existing practice does not promote value comparison.</p>
        </div>
      </div>
    </div>
  )
}

export default Services
