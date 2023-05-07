// import { GetServerSideProps } from "next";
import { PageTop } from './Top/index';


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

  return (
    <PageTop />
  )
}
