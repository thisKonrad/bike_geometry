/* :::: Collection:::: */
'use client'
import Header from '@/components/Header/index.jsx';
import BikeCard from '@/components/BikeCard';
import useSWR from 'swr';
import styles from '@/styles/Home.module.css';


export default function Collection() {

  const { data, isLoading } = useSWR("/api");
  
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