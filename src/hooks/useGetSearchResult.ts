import { useMemo } from "react";
import { useQuery } from "react-query";
import fetchCharacters from "../services/search.service";

interface Query {
  search?: string;
}

const useGetSearchResult = ({ search }: Query) => {
  const queryKey = useMemo(() => ["search", search], [search]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return useQuery<any, Error>({
    queryKey: queryKey,
    queryFn: async () => {
      if (search) {
        const data = await fetchCharacters(search);
        return data;
      }
      return null;
    },
    enabled: !!search && search?.length > 1,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });
};

export default useGetSearchResult;
