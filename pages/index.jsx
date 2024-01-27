/* :::: HOME :::: */
import Header from '@/components/Header'
import styles from '@/styles/Home.module.css'


export default function Home() {


  return (<>
    <div>
    <Header
    currentPageTitle={'Bike Calculator'}>
    </Header>
    <main className={styles.main}>
    <section className={styles.jumbo}>
      <article className={styles.article}>
        <h3>Welcome awesome cyclists!</h3>
        <p>
        Lets get your fitful personal bicycle measurements.
        Here you can achieve the basic geometry datas for your new bike project.
        You need only one measurement.
        The famous inner leg length also known as inside leg.
        When you got it, go to the ergonomic calculator and pass your values.
        After that you can go to the collection where you can see
        all bike geometries.
        Don't know how to measure the inside leg?
        Go to the info page where all measurements and values are explained for you.</p>
      </article>
    </section>
    </main>
    </div>
    </>)
}