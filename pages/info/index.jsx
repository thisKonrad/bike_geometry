/* :::: Information :::: */
'use client'
import Header from '@/components/Header'
import styles from '@/styles/Home.module.css'


export default function Information() {
  return (<>
    <Header
  currentPageTitle={'Information'}>
  </Header>
  <main className={styles.main}>
    <section>
      <article>
        <h3>Whats cycling on here?</h3>
        <p>Hey Folks!</p>
        <p>Lets get your relative fitful personal bicycle measurements</p>
        <p>Here you can achieve the basic geometry datas for your new bike project</p>
        <p>You need only one measurement</p>
        <p>The famous Inner leg length also known as Inside Leg</p>
        <p>When you got it, go to the ergonomic calculator and pass your values</p>
        <p>After that you can go to the collection where you can see</p>
        <p>all bike geometries</p>
      </article>
    </section>
    <section>
      <article>
      <h3>Measure your Inner Leg Length</h3>
      <p>To measure your inside leg, stand with your legs approximately shoulder</p>
      <p>width apart with your shoes off, then measure from the ground</p>  
      <p>up into your groin. </p>
      <p>You can also use a pencil to mark your inside leg on a wall and measure it later.</p>
      </article>
    </section>
    <section>
      <article>

      </article>
    </section>
  </main>
</>)
}