import React from "react";
import ReactDOM from "react-dom/client";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import Home from "./Page/Home/Home";
import Add from "./Page/Add/Add";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/add",
        element:<Add/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(

    <RouterProvider router={router} />

);
