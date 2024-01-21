/* :::: DETAIL PAGE :::: */
'use client'
import Header from '@/components/Header/index.jsx';
import DetailCard from '@/components/BikeCard';
import { useRouter } from 'next/router'
import useSWR from 'swr';
import styles from '@/styles/Home.module.css';


const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function DetailPage() {

    const router = useRouter();
    const { isReady } = router;
    const { id } = router.query;
    //const { data, isLoading, error } = useSWR("/api/[id].js", fetcher);
    const { data, isLoading, error } = useSWR(id ? `/api/${id}` : null);

    if (!isReady || isLoading || error) return <h2 className={styles.loader}>Details Loading...</h2>;

    /* if (isLoading) {`/api/places/${id}`
        return <h1 className={styles.loader}>Details are Loading...</h1>;
    } */
    if (!data) {
        console.log('No ID DB Data!');
        return;
    }
    if (error) {
        console.log('error: ', error)
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