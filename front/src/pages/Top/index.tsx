import { GetServerSideProps } from "next";
import { fetchHouses } from '../api/api';
import { useQuery } from "@tanstack/react-query";
import { HouseCard } from "../../components/HouseCard";
import { IHouse } from "../../types/api";
import { AuthLayout } from "../../components/Layout/AuthLayout/AuthLayout";

export const Top = () => {
  const { isSuccess, isLoading, isError, error, data: houses } = useQuery(['houses'], fetchHouses)

  if (isLoading) return <h2>...Loading</h2>
  if (isError) return <pre>{JSON.stringify(error)}</pre>

  return (
    <AuthLayout>
      {isSuccess && houses?.map((house: IHouse) =>
        <HouseCard key={house.id} house={house.attributes} />
      )
      }
    </AuthLayout>
  )
}

