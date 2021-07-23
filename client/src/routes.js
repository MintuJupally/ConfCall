import React from "react";
import { Navigate } from "react-router-dom";

import Layout from "./Layout";

const routes = [
  {
    path: "/",
    // element: <Layout />,
    children: [
      { path: "/", element: <Layout /> },
      { path: "/:roomId", element: <Layout /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
];

export default routes;
