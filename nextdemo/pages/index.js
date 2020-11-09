import Head from 'next/head'
// import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Jewel from './Jewel/index';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Demo</title>
        <link rel="icon" href="/necklace.png" />
      </Head>

      <Header />
      <Jewel />
      <Footer />
    </div>
  )
}
