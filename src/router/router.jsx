import MainLayout from "@/layout/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "@/pages/ErrorPage";
import HomePage from "@/pages/HomePage";

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
    ],
  },
]);

export default router;
