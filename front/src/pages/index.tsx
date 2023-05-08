import { GetServerSideProps } from "next";
import { IHouse, IHouseProps } from '../types/api/index';
import { fetchHouses } from "../helper/api";
import { Top } from "../components/pages/top/Top";

// SSR
export const getServerSideProps: GetServerSideProps<{ houses: IHouse[] }> = async () => {
  const houses = await fetchHouses();

  return {
    props: {
      houses
    }
  }
};

export default function Home({ houses }: IHouseProps) {

  return (
    <Top houses={houses} />
  )
}
