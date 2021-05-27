import "./App.css";
import React from "react";

import routes from "./routes";

import { useRoutes } from "react-router-dom";
import { SnackbarProvider, useSnackbar } from "notistack";

function App() {
  const routing = useRoutes(routes);

  return (
    <div className="App">
      <SnackbarProvider maxSnack={3}>{routing}</SnackbarProvider>
    </div>
  );
}

export default App;
