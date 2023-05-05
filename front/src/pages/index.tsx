import { Inter } from 'next/font/google'
import { fetchHouses } from './api/api';
import { useQuery, useMutation } from "@tanstack/react-query";

const inter = Inter({ subsets: ['latin'] })

// type house = {
//   name: string,
//   description: string,
//   price: number,
// }[]

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
  const houseQuery = useQuery({
    queryKey: ['house'],
    queryFn: () => [...houses]
  })

  if (houseQuery.isLoading) return '...Loading'
  if (houseQuery.isError) return <pre>{JSON.stringify(houseQuery.error)}</pre>

  return (
    <main
      className={`flex min-h-screen items-center justify-between p-24  bg-slate-500${inter.className}`}
    >
      {houses?.map((house: any, index: number) =>
        <div key={index}>
          <h1>{house.attributes.name}</h1>
          <p>{house.attributes.description}</p>
          <p>${house.attributes.price}</p>
        </div>
      )
      }
    </main>
  )
}
