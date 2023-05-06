import { IHouse, IHouseAttribute } from "../types";
import { useQuery } from "@tanstack/react-query";
import { fetchHouses } from '../pages/api/api';

export const useFetchHouseQuery = () => {
  const { isLoading, isError, error, data: hosues } = useQuery(['houses'], fetchHouses)

  if (isLoading) return <h2>...Loading</h2>
  if (isError) return <pre>{JSON.stringify(error)}</pre>

  return (
    <>
      <h2>test</h2>
      {hosues.map((house: any) => {
        return <div key={house.id}>{house.name}</div>
      })}
    </>
  )

}