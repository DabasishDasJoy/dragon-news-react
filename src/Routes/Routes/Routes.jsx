import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout>Main</MainLayout>,
    children: [
      {
        path: "/",
        element: <h1>Children</h1>,
      },
    ],
  },
]);
