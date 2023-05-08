import { useQuery } from "@tanstack/react-query";
import { fetchHouses } from '../../helper/api';

export const useFetchQuery = (houses: any) => {
  const { isSuccess, isLoading, isError, error, data: housesData } = useQuery({
    queryKey: ['houses'],
    queryFn: fetchHouses,
    initialData: houses,
  })

  return { isSuccess, isLoading, isError, error, housesData }
}

