/* :::: Information :::: */
'use client'
import Header from '@/components/Header';
import Accordeon from '@/components/Accordeon/index.jsx';
import styles from '@/styles/Home.module.css';


export default function Information() {

  const measurementLegend=[
    {title: 'Inner Leg Measurement or Inside Leg',
    content: `The inner leg length is measured from crotch to floor, 
    where your true leg length is measured from the top of your legs to your ankles.
    You just need the inner leg length for the calculator here`},

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

    {title: 'STR Quotient',
    content: `The stack to reach quotient is kind of a relation 
    between stack and reach. 
    It defines your basic seating position.
    Values are:
    comfort: over 1.55, sport: 1.45 till 1.55, race: under 1.45`},

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
    
    {title: 'Wheelsize',
    content: `Adult bikes have an wheelsize range between 26" and 29". There are some other
    measurements for the wheelsize but for the basics, inch measurements are enough.
    Smaller wheels are better for agility, bigger ones are better for fast riders.`},
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
