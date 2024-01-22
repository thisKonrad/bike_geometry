/* :::: DETAIL PAGE :::: */
'use client'
import Header from '@/components/Header/index.jsx';
import DetailCard from '@/components/DetailCard';
import { Audio } from 'react-loader-spinner'
import { useRouter } from 'next/router'
import useSWR from 'swr';
import styles from '@/styles/Home.module.css';


const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function DetailPage() {

    const router = useRouter();
    const { isReady } = router;
    const { id } = router.query;
    const { data, isLoading, error } = useSWR(`/api/details/${id}`, fetcher);
    //const { data, isLoading, error } = useSWR(id ? `/api/${id}` : null);


    if (!isReady || isLoading || error) {
        return (<div className={styles.loader}>
            <Audio
                height="160"
                width="220"
                radius="9"
                color="black"
                ariaLabel="three-dots-loading"
                wrapperStyle
                wrapperClass
            />
        </div>);
    }

    if (!data) {
        console.log('No ID DB Data!');
        return;
    }
    if (error) {
        console.log('error: ', error)
    }

    console.log('ID Details Data from DB: ', data);

    /* ::: DELETE :::: */
    async function deleteBikeById() {
        try {
            const response = await fetch(`/api/details/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Failed to delete bike");
            }
            router.push("/");
            console.log(`Bike with ID ${id} deleted successfully.`);
        } catch (error) {
            console.error("Error deleting bike:", error.message);
        }
    }


    return (<>
        <Header
            currentPageTitle={'Details'}>
        </Header>
        <main className={styles.main}>
            <DetailCard
                handleDelete={deleteBikeById}
                data={data}
            />
        </main>
    </>)
}