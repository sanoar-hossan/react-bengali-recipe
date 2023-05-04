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

import AuthProvider from './providers/Authprovider';


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
            path:'chefrecipe/:id',
            element:<Chefrecipe></Chefrecipe>,
            loader:({params})=>fetch(`https://recipe-server-sanoar-hossan.vercel.app/recipedetails/${params.id}`)
              },
    ],
  },
  
  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
