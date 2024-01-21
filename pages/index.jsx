import Header from '@/components/Header'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Header
    currentPageTitle={'Bike Calculator'}>
    </Header>
    <main className={styles.main}>
      <section className={styles.jumbo}>
      <article className={styles.article}>
        <h1>Welcome Cyclists!</h1>
        <p>
        Lets get your fitful personal bicycle measurements.
        Here you can achieve the basic geometry datas for your new bike project.
        You need only one measurement.
        The famous inner leg length also known as "Inside Leg"
        When you got it, go to the ergonomic calculator and pass your values.
        After that you can go to the collection where you can see
        all bike geometries and click on a bike card for your bike details.</p>
      </article>
    </section>
    </main>
    </>)
}
