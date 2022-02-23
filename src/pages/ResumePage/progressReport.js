import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { NavLink } from "react-router-dom";
import { render } from "react-dom";

export const ProgressReport = () => {
  render();
  {
    return (
      <div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="3 months ago"
            iconStyle={{ background: "transparent" }}
            icon={"PLACEHOLDER"}
          >
            <h3 className="vertical-timeline-element-title">Lorem Ipsum</h3>
            <h4 className="vertical-timeline-element-subtitle">New Orleans</h4>
            <p>
              <NavLink to="/spinner" exact>
                Circuit request created
              </NavLink>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2 months ago"
            iconStyle={{ background: "transparent" }}
            icon={"PLACEHOLDER"}
          >
            <h3 className="vertical-timeline-element-title">ipsum Lorem</h3>
            <h4 className="vertical-timeline-element-subtitle">Bahamas</h4>
            <p>Provision Circuit</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="1 month ago"
            iconStyle={{ background: "transparent" }}
            icon={"PLACEHOLDER"}
          >
            <h3 className="vertical-timeline-element-title">Lorem Ipsum</h3>
            <h4 className="vertical-timeline-element-subtitle">New Orleans</h4>
            <p>Confirm circuit provision (Y/N)</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2 weeks ago"
            iconStyle={{ background: "transparent" }}
            icon={"PLACEHOLDER"}
          >
            <h3 className="vertical-timeline-element-title">ipsum Lorem</h3>
            <h4 className="vertical-timeline-element-subtitle">India</h4>
            <p>Itemized Invoice created!</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="5 days ago"
            iconStyle={{ background: "transparent" }}
            icon={"PLACEHOLDER"}
          >
            <h3 className="vertical-timeline-element-title">Lorem Ipsum</h3>
            <h4 className="vertical-timeline-element-subtitle">New Orleans</h4>
            <p>DXC Auditor(querying the blockchain)</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="1 day ago"
            iconStyle={{ background: "transparent" }}
            icon={"PLACEHOLDER"}
            position="left"
          >
            <h3 className="vertical-timeline-element-title">Lorem Ipsum</h3>
            <h4 className="vertical-timeline-element-subtitle">
              DXC Network analyst
            </h4>
            <p>Exception between invoice and circuit</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="6 hours ago"
            iconStyle={{ background: "transparent" }}
            icon={"PLACEHOLDER"}
          >
            <h3 className="vertical-timeline-element-title">Lorem Ipsum</h3>
            <h4 className="vertical-timeline-element-subtitle">New Orleans</h4>
            <p>DXC Account Payble</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="few secons ago"
            iconStyle={{ background: "transparent" }}
            icon={"PLACEHOLDER"}
          />
        </VerticalTimeline>
      </div>
    );
  }
};
