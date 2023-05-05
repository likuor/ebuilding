import { fetchHouses } from './api/api';
import { useQuery, useMutation } from "@tanstack/react-query";
import { HouseCard } from "../components/HouseCard";
import { IHouse } from "./../types";


type house = {
  name: string,
  description: string,
  price: number,
}[]

// export const getStaticProps = async () => {
//   const houses = await fetchHouses();
//   return {
//     props: {
//       houses
//     },
//   }
// }

// SSR
export const getServerSideProps = async () => {
  const houses = await fetchHouses();
  return {
    props: {
      houses
    },
  }
};

export default function Home({ houses }: any) {
  console.log('here', houses);

  const houseQuery = useQuery({
    queryKey: ['house'],
    queryFn: () => [...houses]
  })

  if (houseQuery.isLoading) return '...Loading'
  if (houseQuery.isError) return <pre>{JSON.stringify(houseQuery.error)}</pre>

  return (
    <main>
      <div className='container mx-auto px-4'>
        <h1 className='text-2xl font-bold px-2 py-2'>Ebuilding</h1>
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-3'>
          {houses?.map((house: any, index: number) =>
            <div key={index}>
              <HouseCard key={index} house={house.attributes} />
            </div>
          )
          }
        </div>
      </div>
    </main>
  )
}
