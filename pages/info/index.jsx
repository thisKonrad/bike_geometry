/* :::: Information :::: */
'use client'
import Header from '@/components/Header';
import Accordeon from '@/components/Accordeon/index.jsx';
import STRAnimation from '@/components/STRAnimation';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import { FaInfoCircle } from "react-icons/fa";
import Popup from 'reactjs-popup';
import InfoStyles from '@/styles/InfoStyle.module.css';


export default function Information() {


  const measurementLegend=[
    {title: 'Inner Leg Measurement or Inside Leg',
      content:{
      text: `The inner leg length is measured from crotch to floor, 
      where your true leg length is measured from the top of your legs to your ankles.
      You just need the inner leg length for the calculator here`,
      image:
      <div >
      <Image 
      src='/innerleg_alpha.png'
      width={200}
      height={260}
      alt='inside leg measurement'
      className={InfoStyles.image}
      />
      </div>}
    },

    {title: 'Framesize',
    content:{
    text: `Adult bikes are measured by their frame size. 
    Most manufacturers now measure the frame from the centre of the crank axle, 
    to the top of the seat tube.`,
    }
    },

    {title: 'Top Tube Length',
    content: {text:`The length of your top tube is important for the relation between stack an
    reach and is a important measure to define your seat position.`,
    image:
    <div >
    <Image 
    src='/toptube.png'
    width={400}
    height={240}
    alt='reach'
    className={InfoStyles.image}
    />
    </div>}
    },

    {title: 'Stack',
    content:{text:
    `Stack defines the distance between the bracket ball bearing till
    the top tube measured from down till up in 90° degrees`,
    image:
    <div>
    <Image 
    src='/stack.png'
    width={400}
    height={240}
    alt='reach'
    className={InfoStyles.image}
    />
    </div>}
    },

    {title: 'Reach',
    content: {text:`Reach is the horizontal distance between stack and the top ending
    of your steering tube`,
    image:
      <div>
      <Image 
      src='/reach.png'
      width={400}
      height={240}
      alt='reach'
      className={InfoStyles.image}
      />
      </div>}
    }, 

    {title: 'STR Quotient',
    content: {text:`The stack to reach quotient is kind of a relation 
    between stack and reach. 
    It defines your basic seating position.
    Values are:
    comfort: over 1.55, sport: 1.45 till 1.55, race: under 1.45`,
    image:
    <>
    <Popup 
    trigger={<button 
      className={InfoStyles.popup_button}>
      <FaInfoCircle size={28}/> 
    </button>} 
    modal 
    overlayStyle={{background: 'var(--modalBackground)', 
    backdropFilter:'var(--modalBackDropFilter)'}}>
      {close => (
      <div className={InfoStyles.str_popup_wrap}>
        <button className={InfoStyles.str_popup_close_button} onClick={close}>
          &times;
        </button>
        <div className={InfoStyles.str_popup_headline}> STR Ranges </div>
        <STRAnimation/>
      </div>)}
    </Popup>
    </>}
    },

    {title: 'Seattube Angle',
    content: {text:`The angle of your seattube. 
    This measurement defines your drive handling
    and your power take off, from your legs to the whole bike.
    When you ride a lower angle you have a bike with a more 
    comfortable behaviour but less power take off. 
    Higher angles ending up in a more effective 
    power take off unit.`,
    image:
    <div>
    <Image 
    src='/seattubeangle.png'
    width={400}
    height={240}
    alt='reach'
    className={InfoStyles.image}
    />
    </div>}
    },

    {title: 'Saddle Height',
    content:{text: 
      `The measurement from bottom till the top edge of your saddle`}
    },

    {title: 'Crank Length',
    content: {text:`The length of your crank related to your inside leg length. 
    As easy explained:
    tall persons ride a longer crank, small persons a shorter crank.
    Dependend which ridestyle you prefer you should use 
    shorter cranks for agile handling and longer cranks 
    for speed and endurance.`}
    },
    
    {title: 'Wheelsize',
    content: {text:`Adult bikes have an wheelsize range between 26 inch and 29 inch. There are some other
    measurements for the wheelsize but for the basics, inch measurements are enough.
    Smaller wheels are better for agility, bigger ones are better for fast riders.`}
    },
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