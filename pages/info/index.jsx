/* :::: Information :::: */
'use client'
import Header from '@/components/Header';
import Accordeon from '@/components/Accordeon/index.jsx';
import styles from '@/styles/Home.module.css';
import InfoStyle from '@/styles/InfoStyle.module.css';



export default function Information() {

  const measurementLegend=[
    {title: 'Inner Leg Measurement or Inside Leg',
    content: `The inner leg length is measured from crotch to floor, 
    where your true leg length is measured from the top of your legs to your ankles.
    You just need this measurement for the calculator here`},

    {title: 'Framesize',
    content: `Adult bikes are measured by their frame size. 
    Most manufacturers now measure the frame from the centre of the crank axle, 
    to the top of the seat tube.`},

    {title: 'Top Tube Length',
    content: `The length of your top tube is important for the relation between stack an
    reach and is a important measure to define your seat position.`},

    {title: 'Stack',
    content: `Stack defines the distance between the bracket ball bearing till
    the top tube measured from down till up in 90° degrees`},

    {title: 'Reach',
    content: `Reach is the horizontal distance between stack and the top ending
    of your steering tube`}, 

    {title: 'Stack to Reach STR',
    content: `The relation between stack and reach`},

    {title: 'Seattube Angle',
    content: `The angle of your seattube. This measurement defines your drive handling
    and your power take off from your legs to the whole bike.
    When you ride a lower angle you have a bike with a more comfortable 
    behaviour but less power take off. 
    Higher angles ending up in a more effective 
    power take off unit.`},

    {title: 'Saddle Height',
    content: `The measurement from bottom till the top edge of your saddle`},

    {title: 'Crank Length',
    content: `The length of your crank related to your inside leg length. 
    As easy explained:
    tall pesron ride a longer crank, small persons a shorter crank.
    Dependend from which ridestyle you prefer you should use 
    shorter cranks for agile handling and longer cranks 
    for speed and endurance.`},

  ];


  return (<>
    <Header
  currentPageTitle={'Information'}>
  </Header>
  <main className={styles.main}>
    <Accordeon
    items={measurementLegend}
    />
  </main>
</>)
}



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