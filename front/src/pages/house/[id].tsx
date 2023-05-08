import { GetServerSideProps } from "next";
import { IHouse, IHouseProps } from '../../types/api/index';
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

export default function Index({ houses }: IHouseProps) {

  console.log(houses);

  return <House houses={houses} />
}

