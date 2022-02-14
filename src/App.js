import { useState } from "react";
import { Header } from "./Components/Header";
import { IntroCard } from "./Components/IntroCard";

export const App = () => {
  return (
    <div className="App">
      <Header title="Conor Kelly | Oracle Consultant & Full Stack Developer" />
      <section>
        <IntroCard />
      </section>
    </div>
  );
};
