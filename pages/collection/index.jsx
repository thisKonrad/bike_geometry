/* :::: Profile :::: */
'use client'
import Header from '@/components/Header/index.jsx';
import useSWR from 'swr';
import styles from '@/styles/Home.module.css';
import BikeCardStyle from '../../styles/BikeCardStyle.module.css';

export default function Profile() {

  const { data, isLoading, mutate } = useSWR("/api");
  console.log("data from client", data);
    if (isLoading) {
    return <h1>Bikes are Loading...</h1>;
  }
  if (!data) {
    return;
  }
  if( data){
    mutate()
  }

  
  return (<>
    <Header
    currentPageTitle={'Collection'}>
    </Header>
    <main className={styles.main}>
      <section>
      {data && data.map((bike) => (
          <div
            key={bike._id}
            className={BikeCardStyle.bikecard}
          >
            <div className={BikeCardStyle.bikecard_fragment}>
              <p>{bike.bikeTitle}</p>
              <p>{bike.bikeType}</p>
              <p>{bike.userName}</p>
              <p>{bike.insideLeg}</p>
            </div>
            <div className={BikeCardStyle.bikecard_fragment}>
              <p>Title: {bike.bikeTitle}</p>
              <p>Type: {bike.bikeType}</p>
              <p>User Name: {bike.userName}</p>
              <p>Inside Leg: {bike.insideLeg}</p>
            </div>
            <div className={BikeCardStyle.bikecard_fragment}>
              <p>Frame size: {bike.frameSize}</p>
              <p>Top tube length: {bike.topTubeLength}</p>
              <p>Stack: {bike.stack}</p>
              <p>Reach: {bike.reach}</p>
              <p>Seattube angle: {bike.seatTubeangle}</p>
              <p>Saddle height:{bike.saddleHeight}</p>
              <p>Wheelsize: {bike.wheelsize}</p>
              <p>Crank length: {bike.crankLength}</p>
              <p>STR Quotient: {bike.strQuotient}</p>
              <p>Preffered STR value: {bike.comfortRange}</p>
            </div>
          </div>
        ))}
      </section>
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