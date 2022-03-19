import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./AppRoutes";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
};
