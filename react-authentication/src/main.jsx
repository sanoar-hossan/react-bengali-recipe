import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainlayout from './layout/Mainlayout.jsx';
import Home from './components/Home.jsx';
import ErrorPage from './components/ErrorPage';
import Login from './components/Login';
import Register from './components/Register';
import Blog from './components/Blog';
import Chefrecipe from './Chef-recipe/Chefrecipe';
import ChefrecipeDetails from './Chef-recipe/ChefrecipeDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
      path:"/",
      element:<Home></Home>,
      },
      {
        path:'login',
        element:<Login></Login>,
          },
          {
        path:'register',
        element:<Register></Register>,
          },
          {
        path:'blog',
        element:<Blog></Blog>,
          },
          {
            path:'chefrecipe',
            element:<Chefrecipe></Chefrecipe>
              },
    ],
  },
  
      {
        path:'chefrecipedetails',
        element:<ChefrecipeDetails></ChefrecipeDetails>,
          },
  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
