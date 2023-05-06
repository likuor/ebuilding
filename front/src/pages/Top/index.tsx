import { GetServerSideProps } from "next";
import { fetchHouses } from '../api/api';
import { useQuery } from "@tanstack/react-query";
import { HouseCard } from "../../components/HouseCard";
import { IHouse } from "../../types/api";
import { Layout } from "../../components/Layout/Layout";

export const Top = () => {
  const { isSuccess, isLoading, isError, error, data: houses } = useQuery(['houses'], fetchHouses)

  if (isLoading) return <h2>...Loading</h2>
  if (isError) return <pre>{JSON.stringify(error)}</pre>

  return (
    <Layout>
      {isSuccess && houses?.map((house: IHouse) =>
        <HouseCard key={house.id} house={house.attributes} />
      )
      }
    </Layout>
  )
}

