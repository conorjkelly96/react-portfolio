import React, { useState } from "react";
import ReactDOM, { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { ProgressReport } from "./progressReport";
import { Spinner } from "./spinner";
import { Card } from "./card";
import "react-vertical-timeline-component/style.min.css";

import "./styles.css";

export const ResumePage = () => {
  //   state = {
  //     renderReport: false,
  //   };
  render();
  {
    let spinner;
    setTimeout(
      function () {
        this.setState({ renderReport: true });
      }.bind(this),
      2000
    );
    if (this.state.renderReport) {
      spinner = <Card />;
    } else {
      spinner = <Spinner />;
    }
    return (
      <div className="App">
        <Routes>
          <Route exact path="/" component={ProgressReport} />
          <Route path="/spinner" component={() => spinner} />
        </Routes>
      </div>
    );
  }
};
