/* :::: Collection:::: */
'use client'
import Header from '@/components/Header/index.jsx';
import BikeCard from '@/components/BikeCard';
import useSWR from 'swr';
import { Audio } from 'react-loader-spinner';
import styles from '@/styles/Home.module.css';


const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Collection() {

    const { data, isLoading } = useSWR("/api", fetcher);
    if (isLoading) {
    return (<div className={styles.loader}>
    <Audio
    height="160"
    width="220"
    radius="9"
    color={`var(--accentColor)`}
    ariaLabel="three-dots-loading"
    wrapperStyle
    wrapperClass
    />
    </div>)
  }
  if (!data) {
    console.log('No DB Data!')
    return;
  } 
 console.log('Data from DB: ', data);


  return (<>
    <Header
    currentPageTitle={'Collection'}>
    </Header>
    <main className={styles.main}>
    <BikeCard
    data={data}
    />
    </main>
  </>)
}
