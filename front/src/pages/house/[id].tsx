import { GetServerSideProps } from "next";
import { IHouse, ISSRHouseProps } from '../../types/api/index';
import { fetchHouses } from "../../helper/api";
import House from "../../components/pages/house/House";

export const getServerSideProps: GetServerSideProps<{ houses: IHouse[] }> = async () => {
  const houses = await fetchHouses();

  return {
    props: {
      houses
    }
  }
};

export default function Index({ houses }: ISSRHouseProps) {
  return <House housesData={houses} />
}

