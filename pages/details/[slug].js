/* :::: DETAIL PAGE :::: */
'use client'
import Header from '@/components/Header/index.jsx';
import DetailCard from '@/components/BikeCard';
//import { useRouter } from 'next/router'
import useSWR from 'swr';
import styles from '@/styles/Home.module.css';


const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function DetailPage() {

    /*    const router = useRouter()
       const { id } = router.query */

    const { data, isLoading } = useSWR("/api/[id].js", fetcher);
    if (isLoading) {
        return <h1 className={styles.loader}>Details are Loading...</h1>;
    }
    if (!data) {
        console.log('No ID DB Data!');
        return;
    }

    console.log('ID Data from DB: ', data);


    return (<>
        <Header
            currentPageTitle={'Details'}>
        </Header>
        <main className={styles.main}>
            <DetailCard
                data={data}
            />
        </main>
    </>)
}