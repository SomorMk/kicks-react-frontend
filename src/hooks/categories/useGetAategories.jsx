import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../axios/useAxiosPublic";

export default function useGetCategories() {
  const axiosPublic = useAxiosPublic();

  const {
    data: categoriesList,
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axiosPublic.get("/categories");
      return res?.data;
    },
  });

  return { categoriesList, isCategoriesLoading, isCategoriesError };
}
