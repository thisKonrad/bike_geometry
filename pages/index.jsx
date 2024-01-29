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
        <p>Lets start a new bike project.
        Here you can achieve the basic 
        geometry datas for a new bike.
        You only need your inner leg length,
        also known as inside leg.</p>
        <br></br>
        First go to the information page where all 
        the measurements are well explained to you.
        Also how to take the inner leg length.
        When you got it, go to the ergonomic calculator and pass your inner leg length.
        After that you can go to the collection where you can see
        a overview of all your bikes.
        When you click on one of these bike cards you can 
        see all the values on your detail page.
        And if you want you can find some related parts for your new bike project
        @ google when you hit the search buttons beneath the values.
        </p>
      </article>
    </section>
    </main>
    </div>
    </>)
}