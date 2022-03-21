import { Router } from "react-router-dom";

import { AppRoutes } from "./AppRoutes";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";

export const App = () => {
  return (
    <Router basename="/react-portfolio">
      <NavBar />
      <AppRoutes />
      <Footer />
    </Router>
  );
};
