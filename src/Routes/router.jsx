import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../Layout/Home";
import CategoryNews from "../Pages/CategoryNews";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children:[
        {
          path:'/',
          element:<Navigate to={"/category/01"}></Navigate>,
        },
        {
          path:'/category/:id',
          element:<CategoryNews></CategoryNews>,
          loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
        },
      ],
    },
    {
      path: "/auth",
      element: <div>hello auth</div>,
    },
    {
      path: "/news",
      element: <div>Hello lates news!</div>,
    },
  ]);

export default router;