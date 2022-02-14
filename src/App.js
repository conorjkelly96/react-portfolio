import { useState } from "react";
import { Header } from "./Components/Header";
import { IntroCard } from "./Components/IntroCard";
import { MemojiCard } from "./Components/MemojiCard";
import { ToggleColorMode } from "./Components/DarkModeToggle";

export const App = () => {
  return (
    <div className="App">
      <Header title="Conor Kelly | Oracle Consultant & Full Stack Developer" />
      <ToggleColorMode />
      <section style={{ display: "flex" }}>
        <IntroCard />
        <MemojiCard />
      </section>
    </div>
  );
};
