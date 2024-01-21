/* :::: Information :::: */
'use client'
import Header from '@/components/Header';
import Accordeon from '@/components/Accordeon/index.jsx';
import styles from '@/styles/Home.module.css';
import InfoStyle from '@/styles/InfoStyle.module.css';



export default function Information() {

  const measurementLegend=[
    {title: 'Framesize',
    content: 'The size of your frame.'},
    {title: 'Stack',
    content: 'The size of your frame.'},
    {title: 'Reach',
    content: 'The size of your frame.'},
  ];



  return (<>
    <Header
  currentPageTitle={'Information'}>
  </Header>
  <main className={styles.main}>
    <Accordeon
    items={measurementLegend}
    />

{/* <section className={InfoStyle.jumbo}>
      <article className={InfoStyle.article}>
        <h3>Whats cycling on here?</h3>
        <p>Hey Folks!
        Lets get your fitful personal bicycle measurements.
        Here you can achieve the basic geometry datas for your new bike project
        You need only one measurement.
        The famous Inner leg length also known as Inside Leg
        When you got it, go to the ergonomic calculator and pass your values
        After that you can go to the collection where you can see
        all bike geometries</p>
      </article>
    </section>
    <section>
    <img
        src="@/assets/inside_leg_white_002.webp"
        alt="how to measure the inner leg length"
        width="400"
        height="600"
        className={InfoStyle.image}
      />
    </section>
    <section className={InfoStyle.jumbo}>
      <article className={InfoStyle.article}>
      <h3>Measure your Inner Leg Length</h3>
      To measure your inside leg, stand with your legs approximately shoulder
      width apart with your shoes off, 
      then measure from the ground up into your groin. 
      You can also use a pencil to mark your inside leg on a wall and measure it later.
      </article>
    </section> */}
  </main>
</>)
}