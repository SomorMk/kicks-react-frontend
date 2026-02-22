import MainLayout from "@/layout/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "@/pages/ErrorPage";
import HomePage from "@/pages/HomePage";
import ProductPage from "@/pages/ProductPage";
import CartPage from "@/pages/CartPage";
import ThankYouPage from "@/pages/ThankYouPage";

const router = createBrowserRouter([
  // Error Page
  {
    path: "*",
    element: <ErrorPage />,
  },

  // Main Landing Pages with Layout
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/thank-you",
        element: <ThankYouPage />,
      },
    ],
  },
]);

export default router;
