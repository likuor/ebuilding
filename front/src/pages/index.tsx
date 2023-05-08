import { GetServerSideProps } from "next";
import { IHouse, IHouseProps } from '../types/api/index';
import { fetchHouses } from "../helper/api";
import { Top } from "../components/pages/top/Top";

// SSR
export const getServerSideProps: GetServerSideProps<{ housesData: IHouse[] }> = async () => {
  const housesData = await fetchHouses();

  return {
    props: {
      housesData
    }
  }
};

export default function Home({ housesData }: IHouseProps) {

  return (
    <Top housesData={housesData} />
  )
}
