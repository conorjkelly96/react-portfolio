import React, { useState } from "react";
import { CareerTimeline } from "./CareerTimeline";
import "react-vertical-timeline-component/style.min.css";

import "./styles.css";

export const ResumePage = () => {
  //   state = {
  //     renderReport: false,
  //   };

  const [renderReport, setRenderReport] = useState(false);

  return (
    <div>
      <CareerTimeline />
    </div>
  );
};
