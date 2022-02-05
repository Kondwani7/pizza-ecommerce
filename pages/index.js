import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Store</title>
        <meta name="description" content="Pizza ecommerce store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Layout/>
      
    </div>
  )
}
