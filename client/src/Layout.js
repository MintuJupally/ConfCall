import React, { useState, useEffect } from "react";

import Home from "./components/Home";
import Meeting from "./components/Meeting";

import { useNavigate, useLocation } from "react-router";

const Layout = () => {
  const location = useLocation();
  const [flag, setFlag] = useState(location.state);

  useEffect(() => {
    console.log(location.state);
    setFlag(location.state);

    if (location.state) window.history.replaceState({}, document.title);
  }, [location]);

  //   useEffect(() => {
  //     console.log(flag);
  //   }, []);

  const updateUser = (user) => {
    setFlag({ state: { user } });
  };

  if (!flag || !flag.user) return <Home updateFlag={updateUser} />;

  return <Meeting user={flag.user} />;
};

export default Layout;
