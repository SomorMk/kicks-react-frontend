import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../axios/useAxiosPublic";

export default function useGetProducts() {
  const axiosPublic = useAxiosPublic();

  const {
    data: products,
    isLoading: isProductsLoading,
    isError: isProductsError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosPublic.get("/products");
      return res?.data;
    },
  });

  return { products, isProductsLoading, isProductsError };
}
