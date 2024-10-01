import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Main from "./Components/layout/Main";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from './Components/Services/Services';
import MyWork from './Components/MyWork/MyWork';
import Contact from "./Components/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
      },
      {
        path:'/about',
        element: <About></About>,
      },
      {
        path:'/services',
        element: <Services></Services>
      },
      {
        path:'/Portfolio',
        element:<MyWork></MyWork>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }


    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);