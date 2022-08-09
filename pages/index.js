import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Logo from './images/full.png'
import ResponsiveAppBar from './components/ResponsiveAppBar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>CriptoCars</title>
        <meta name="description" content="Versión beta de criptocars" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <ResponsiveAppBar/>
      
      <aside id="faQ"> 
      </aside>
        <div className={styles.container}>
          <footer className={styles.footer}>
            <a href="https://www.instagram.com/criptocars/" target="_blank" rel="noopener noreferrer">
            <Image src={Logo} alt="Logo" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>
            </a>
          </footer>
        </div>
    </div>
  )
}
