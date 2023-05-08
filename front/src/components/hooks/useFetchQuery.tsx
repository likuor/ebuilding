import { useQuery } from "@tanstack/react-query";
import { fetchHouses } from '../../helper/api';
import { IHouseProps } from "../../types/api";

export const useFetchQuery = ({ housesData }: IHouseProps) => {
  const { isSuccess, isLoading, isError, error, data: houses } = useQuery({
    queryKey: ['houses'],
    queryFn: fetchHouses,
  })

  return { isSuccess, isLoading, isError, error, houses }
}

