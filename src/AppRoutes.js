import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

// import ContactMe from "./pages/ContactMe";
// import AboutMe from "./pages/AboutMe";
// import Portfolio from "./pages/Portfolio";
// import Home from "./pages/Home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact={true} path="/portfolio" />
      <Route exact={true} path="/about-me" />
      <Route exact={true} path="/contact-me" />
    </Routes>
  );
};
