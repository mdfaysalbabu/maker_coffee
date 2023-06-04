import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import AddCoffee from './Components/AddCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:()=>fetch("https://coffe-store-server-hazel.vercel.app/coffee")
    
  },
  {
    path:'addCoffee',
    element:<AddCoffee></AddCoffee>
  },
  {
    path:"updateCoffee/:id",
    element:<UpdateCoffee></UpdateCoffee>,
    loader:({params})=>fetch(`https://coffe-store-server-hazel.vercel.app/coffee/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
