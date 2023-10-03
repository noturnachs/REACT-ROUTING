import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home"
import Profile from "./components/Profile"
import Settings from "./components/Settings"



const router = createBrowserRouter([
  {
  path: "/Home",
  element: <Home/>
},{
  path: "/Profile",
  element: <Profile />
},{
  path: "/Settings",
  element: <Settings/>
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
