import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { NavLink } from "react-router-dom";
import "react-vertical-timeline-component/style.min.css";

export const CareerTimeline = () => {
  return (
    <div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2007 - 2010"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Aloha College</h3>
          <h4 className="vertical-timeline-element-subtitle">Malaga, Spain</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2013"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            St Benedict's Catholic High School
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Warwickshire, UK
          </h4>
          <p>
            10 GCSEs, A-C: As in Mathematics, English, Spanish, Geography &
            Business Studies
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2013 - 2015"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Alcester Grammar School
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Warwickshire, UK
          </h4>
          <p>
            A Levels: Business Studies (A), English Language (A), Spanish (C)
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2015 - 2019"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            University of Southampton | Business Management BSc
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Southampton UK</h4>
          <p>Grade: First Class Honours | 4.0 GPA</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017-2018"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            International Programme Managenent, Jaguar Land Rover
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Birmingham, UK</h4>
          <p>
            UK Lead for launching 18MY Flex Fuel Program for Discovery Sport /
            Range Rover Evoque Brazil | Chassis & Powertrain Engineering
            workstream lead for Ex-Tarifario project| Lead Analyst for Packaging
            Optimization workstream
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - present"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Senior Consultant, Oracle Corporation
          </h3>
          <h4 className="vertical-timeline-element-subtitle">London, UK</h4>
          <p>Creative Direction, User Experience, Visual Design</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        />
      </VerticalTimeline>
    </div>
  );
};
