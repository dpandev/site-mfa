import Head from 'next/head'
import Image from 'next/image'
import MainSection from '../components/MainSection'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mayonnaise Farmers Alliance</title>
        <meta name="description" content="A Parter for the Mayonnaise Farmer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainSection />
    </div>
  )
}
