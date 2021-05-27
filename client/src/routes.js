import React from "react";
import { Navigate } from "react-router-dom";

import Home from "./components/Home";
import Meeting from "./components/Meeting";

const routes = [
  {
    path: "/",
    // element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/:roomId", element: <Meeting /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
];

export default routes;
