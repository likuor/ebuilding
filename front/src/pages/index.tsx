import { GetServerSideProps } from "next";
import { fetchHouses } from './api/api';
import { useQuery, useMutation } from "@tanstack/react-query";
import { HouseCard } from "../components/HouseCard";
import { IHouse } from "./../types";


type house = {
  name: string,
  description: string,
  price: number,
}[]

// SSG
// export const getStaticProps = async () => {
//   const houses = await fetchHouses();
//   return {
//     props: {
//       houses
//     },
//   }
// }

// SSR
// export const getServerSideProps: GetServerSideProps<{ houses: IHouse[] }> = async () => {
//   const houses = await fetchHouses();

//   return {
//     props: {
//       houses
//     }
//   }
// };

// export default function Home({ houses }: any) {
export default function Home() {
  const { isSuccess, isLoading, isError, error, data: houses } = useQuery(['houses'], fetchHouses)

  if (isLoading) return <h2>...Loading</h2>
  if (isError) return <pre>{JSON.stringify(error)}</pre>

  return (
    <main>
      <div className='container mx-auto px-4'>
        <h1 className='text-2xl font-bold px-2 py-2'>Ebuilding</h1>
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-3'>
          {isSuccess && houses?.map((house: IHouse) =>
            <HouseCard key={house.id} house={house.attributes} />
          )
          }
        </div>
      </div>
    </main>
  )
}
