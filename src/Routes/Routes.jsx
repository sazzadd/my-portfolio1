import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import ProjectDetails from "../components/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/project/:id",
    element: <ProjectDetails></ProjectDetails>,
    loader: () => fetch("/project.json"),
  },
]);
