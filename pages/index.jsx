import Header from '@/components/Header'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
    <Header
    currentPageTitle={'Bike Calculator'}>
    </Header>
    <main className={styles.main}>
      <article>
      <h1>Welcome</h1>
      <h3>Awesome Cyclist!</h3>
        <div>
          <p>Lets calculate your bike geometry here</p>
          <p>go over the menue bars to set your values</p>
          <p>if you like go to the profile page</p>
          <p>to store your personal</p>
          <p>geometry properyties</p>
        </div>
      </article>
    </main>
    </>)
}
