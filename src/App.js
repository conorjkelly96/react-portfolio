import { useState } from "react";
import { Header } from "./Components/Header";
import { IntroCard } from "./Components/IntroCard";
import { MemojiCard } from "./Components/MemojiCard";

export const App = () => {
  return (
    <div className="App">
      <Header title="Conor Kelly | Oracle Consultant & Full Stack Developer" />
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <IntroCard />
        <MemojiCard />
      </section>
    </div>
  );
};
