import React from "react";
import { Cards } from "../../../utils/Global/Cards/Cards";

import "./AppointmentFeatures.css";

export const Appointmentfeatures = () => {
  return (
    <div className="Appointment__features">
      <div className="Appointment__title">Appointment</div>
      <div className="Appointment__feature-cards">
        <Cards
          name={"Doctor"}
          quote={"Quote here"}
          content={"content here"}
          link={"#"}
          image={
            "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          }
        />
        <Cards
          name={"Doctor"}
          quote={"Quote here"}
          content={"content here"}
          link={"#"}
          image={
            "https://images.unsplash.com/photo-1612943680768-d82060323fd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
        />
        <Cards
          name={"Doctor"}
          quote={"Quote here"}
          content={"content here"}
          link={"#"}
          image={
            "https://images.unsplash.com/photo-1614579093335-b6ab37ddaace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          }
        />
      </div>
    </div>
  );
};
