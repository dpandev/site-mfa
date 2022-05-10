import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { React, useState } from 'react'

export const Navbar = () => {

  const [openMobileMenu, setopenMobileMenu] = useState(false)

  const toggleMobileMenu = () => {
    if (openMobileMenu) {
      setopenMobileMenu(false)
    } else {
      setopenMobileMenu(true)
    }
  }

  return (
    <div className={styles.main}>
      <header className={styles.stick}>
        <div className={styles.container}>
          <Link href='/'>
            <div className={styles.brandLogo}>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="761 551 209 109" width={100}>
                <g data-item-type="text" data-item="Business" id="logo__item--business" className="logo__item">
                  <g className="logo__item__inner" transform="translate(894.052001953125 622.2803353511731) scale(1 1) rotate(0 0 0)">
                  </g>
                </g>
                <g data-item-type="image" data-item="Image" data-logo-item="" id="logo__item--logo_0" className="logo__item">
                  <g className="logo__item__inner" transform="translate(755.023288392852 543.5) scale(1.3795477042885103 1.3795477042885103) rotate(0 0 0)">   
                    <g>
                      <path fill="#F8F0DF" d="M70.561,7.644c0,0,6.443,32.594-31.459,50.032c0,0,20.28-12.886,25.208-35.06   c0,0-16.488-9.475-36.577,3.982c-7.933,5.313-17.434,19.14-15.158,35.058c0,0,22.185,9.396,45.291-9.475   C66.83,44.854,79.469,24.511,70.561,7.644z" data-part-id="logo__item--logo_0__0"></path>
                      <path fill="#37B34A" d="M84.396,16.552c0,0,5.305,33.733-22.934,48.835C50.975,71,35.884,74.352,14.09,69.805l-1.139-4.418   c0,0,24.645,6.418,45.104-6.574C68.563,52.139,77.451,38.213,84.396,16.552z" data-part-id="logo__item--logo_0__1"></path>
                      <path fill="#37B34A" d="M93.492,31.902c0,0,0.197,36.543-30.891,47.756c-13.287,4.797-32.593,4.059-56.094-6.822v-2.463   c0,0,28.237,11.502,56.094,0.758C74.25,66.639,86.293,56.887,93.492,31.902z" data-part-id="logo__item--logo_0__2"></path>
                    </g>
                  </g>
                </g>
              </svg>
              <span>Mayonnaise Farmers Alliance</span>
            </div>
          </Link>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Link href='/'>Home</Link>
            </li>
            <li className={styles.listItem}>
              <Link href='/services'>Services</Link>
            </li>
            <li className={styles.listItem}>
              <Link href='/about'>About</Link>
            </li>
            <li className={styles.listItem}>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
        <nav className={styles.mobileContainer}>
          <div className={styles.mobileNavLeft}>
            <div className={`${styles.navHamburger} ${openMobileMenu ? styles.iconRotate : ''}`} onClick={toggleMobileMenu}>
              <svg xmlns='http://www.w3.org/2000/svg' className={styles.hamburgerIcon} width='16' height='16' viewBox='0 0 16 16' strokeWidth='2' stroke='#F8F0DF' fill='none'>
                <path stroke='none' d='M0 0h16v16H0z' fill='none'/>
                <g>
                  <line x1='0' y1='3' x2='15' y2='3' />
                  <line x1='0' y1='11' x2='15' y2='11' />
                </g>
              </svg>
            </div>
          </div>
          <div className={styles.mobileNavRight}>
            <a className={styles.mobileBrand}>
              <span>Mayonnaise Farmers Alliance</span>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="685 551 209 109" width={100}>
                <g data-item-type="text" data-item="Business" id="logo__item--business" className="logo__item">
                  <g className="logo__item__inner" transform="translate(894.052001953125 622.2803353511731) scale(1 1) rotate(0 0 0)">
                  </g>
                </g>
                <g data-item-type="image" data-item="Image" data-logo-item="" id="logo__item--logo_0" className="logo__item">
                  <g className="logo__item__inner" transform="translate(755.023288392852 543.5) scale(1.3795477042885103 1.3795477042885103) rotate(0 0 0)">   
                    <g>
                      <path fill="#F8F0DF" d="M70.561,7.644c0,0,6.443,32.594-31.459,50.032c0,0,20.28-12.886,25.208-35.06   c0,0-16.488-9.475-36.577,3.982c-7.933,5.313-17.434,19.14-15.158,35.058c0,0,22.185,9.396,45.291-9.475   C66.83,44.854,79.469,24.511,70.561,7.644z" data-part-id="logo__item--logo_0__0"></path>
                      <path fill="#37B34A" d="M84.396,16.552c0,0,5.305,33.733-22.934,48.835C50.975,71,35.884,74.352,14.09,69.805l-1.139-4.418   c0,0,24.645,6.418,45.104-6.574C68.563,52.139,77.451,38.213,84.396,16.552z" data-part-id="logo__item--logo_0__1"></path>
                      <path fill="#37B34A" d="M93.492,31.902c0,0,0.197,36.543-30.891,47.756c-13.287,4.797-32.593,4.059-56.094-6.822v-2.463   c0,0,28.237,11.502,56.094,0.758C74.25,66.639,86.293,56.887,93.492,31.902z" data-part-id="logo__item--logo_0__2"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </nav>
      </header>
      <div className={`${styles.mobileNavFullscreen} ${openMobileMenu ? '' : styles.displayNone} ${openMobileMenu ? styles.aboveThemAll : styles.belowThemAll}`}>
        <div className={styles.headerPush}></div>
        <div className={styles.mobileNavMenu}>
          <div className={styles.mobileNavList}>
            <Link href='/'><a onClick={toggleMobileMenu}>Home</a></Link>
            <Link href='/services'><a onClick={toggleMobileMenu}>Food Services</a></Link>
            <Link href='/about'><a onClick={toggleMobileMenu}>About Us</a></Link>
            <Link href='/contact'><a onClick={toggleMobileMenu}>Contact Us</a></Link>
          </div>
        </div>
      </div>
      <div className={styles.headerPush}></div>
    </div>
  )
}
