import { Inter } from 'next/font/google'
import { fetchHouses } from './api/api';

const inter = Inter({ subsets: ['latin'] })

export const getStaticProps = async () => {
  const houses = await fetchHouses();
  return {
    props: {
      houses
    },
  }
}

export default function Home({ houses }: any) {
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
