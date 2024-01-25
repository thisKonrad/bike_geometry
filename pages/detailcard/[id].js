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

    const { mutate } = useSWR(`/api/details/${id}`);


    /* :::: Loader Animation :::: */
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
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to delete bike');
            }
            router.push('/collection');
            console.log(`Bike with ID ${id} deleted successfully.`);
        } catch (error) {
            console.error('Error deleting bike:', error.message);
        }
    }

    async function deleteRemarkById(ID) {
        try {
            const response = await fetch(`/api/remarks/${ID}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                console.log('remark not deleted', ID)
                throw new Error('Failed to delete remark');
            }
            console.log(`::: Remark with ID: ${ID} ,deleted successfully :::`);
        } catch (error) {
            console.error('Error deleting Remark', error.message);
        }
        mutate()
    }


    async function updateRemarkByID(event) {

        event.preventDefault();
        /* :::: Form :::: */
        console.log(event.target)
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        try {
            const response = await fetch(`/api/details/${id}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Error!");
            }
            if (response.ok) {
                mutate();
            }
            console.log('Remark-Data: ', data)
            event.target.reset();

            mutate();


        } catch (error) {
            console.log("ERROR With Remarks!!");
        }


        console.log(`Remark added successfully...`);
    }


    return (<>
        <Header
            currentPageTitle={'Details'}>
        </Header>
        <main className={styles.main}>
            <DetailCard
                handleDelete={deleteBikeById}
                data={data}
                updateRemark={updateRemarkByID}
                deleteRemark={deleteRemarkById}
            />
        </main>
    </>)
}