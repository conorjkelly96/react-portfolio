import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";
import { ContactMe } from "./pages/ContactMe";
import { ResumePage } from "./pages/ResumePage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/portfolio" element={<Portfolio />} exact={true}></Route>
      <Route path="/contact-me" element={<ContactMe />} exact={true}></Route>
      <Route path="/resume" element={<ResumePage />} exact={true}></Route>
      <Route path="/*" element={<Home />}></Route>
    </Routes>
  );
};
