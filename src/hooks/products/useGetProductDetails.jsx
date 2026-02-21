import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../axios/useAxiosPublic";

export default function useGetProductDetails(productId) {
  const axiosPublic = useAxiosPublic();

  const {
    data: productDetails,
    isLoading: isProductDetailsLoading,
    isError: isProductDetailsError,
  } = useQuery({
    queryKey: ["productDetails", productId],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products/${productId}`);
      return res?.data;
    },
    enabled: !!productId,
  });

  return { productDetails, isProductDetailsLoading, isProductDetailsError };
}
