import ProductDetailSkeleton from "@/components/skeletons/ProductDetailSkeleton";
import ProductDetailsTop from "@/components/product/ProductDetailsTop";
import RelatedProducts from "@/components/product/RelatedProducts"; // Added import
import useGetProductDetails from "@/hooks/products/useGetProductDetails";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  // Product Id
  const productId = useParams()?.id;

  // Product Details Hook
  const { productDetails, isProductDetailsLoading, isProductDetailsError } =
    useGetProductDetails(productId);

  return (
    <>
      {isProductDetailsLoading && !isProductDetailsError ? (
        <ProductDetailSkeleton />
      ) : (
        <ProductDetailsTop productDetails={productDetails} />
      )}

      <RelatedProducts currentProductId={productId} />
    </>
  );
}
