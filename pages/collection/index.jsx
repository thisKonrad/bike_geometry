/* :::: Collection:::: */
'use client'
import Header from '@/components/Header/index.jsx';
import BikeCard from '@/components/BikeCard';
import useSWR from 'swr';
//import {useEffect} from 'react';
import styles from '@/styles/Home.module.css';



const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Collection() {

    const { data, isLoading } = useSWR("/api", fetcher);
    if (isLoading) {
    return <h1>Bikes are Loading...</h1>;
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



{/* <DeleteButton id={bike._id} mutate={mutate} />
<FaEdit
  size="1rem"
  color="black"
  onClick={() => {
    setEditBike(note._id);
    setAllEditBikes((toggle) => !toggle);
  }}
/>
<favouriteButton /> */}