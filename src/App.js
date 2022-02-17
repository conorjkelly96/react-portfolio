import { BrowserRouter as Router } from "react-router-dom";

import { AppRoutes } from "./AppRoutes";
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";

export const App = () => {
  return (
    <Router>
      <NavBar />
      <AppRoutes />
      <Home />
    </Router>
  );
};
