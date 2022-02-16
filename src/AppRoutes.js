import { Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route exact={true} path="/contact-me" element={<h1>Contact Me</h1>} />
      <Route exact={true} path="/about-me" element={<h1>About Me</h1>} />
      <Route exact={true} path="/projects" element={<h1>Projects</h1>} />
      <Route exact={true} path="/" element={<h1>Home</h1>} />
    </Routes>
  );
};
