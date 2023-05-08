import { useQuery } from "@tanstack/react-query";
import { fetchHouses } from '../../helper/api';
import { IHouseProps } from "../../types/api";

export const useFetchQuery = (houses: IHouseProps) => {
  const { isSuccess, isLoading, isError, error, data: housesData } = useQuery({
    queryKey: ['houses'],
    queryFn: fetchHouses,
    initialData: houses,
  })

  return { isSuccess, isLoading, isError, error, housesData }
}

