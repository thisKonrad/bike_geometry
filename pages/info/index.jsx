/* :::: Information :::: */
'use client'
import Header from '@/components/Header'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import styles from '@/styles/Home.module.css'
import InfoStyle from '@/styles/InfoStyle.module.css'



export default function Information() {
  return (<>
    <Header
  currentPageTitle={'Information'}>
  </Header>
  <main className={styles.main}>
    <section className={InfoStyle.accordeon_wrap}>
    <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        What harsh truths do you prefer to ignore?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Is free will real or just an illusion?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    </section>


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