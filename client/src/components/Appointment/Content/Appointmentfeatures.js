import React from "react";
import { Cards } from "../../../utils/Global/Cards/Cards";

import "./AppointmentFeatures.css";

export const Appointmentfeatures = () => {
  return (
    <div className="Appointment__features">
      <div className="Appointment__title">Appointment</div>
      <div className="Appointment__feature-cards">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};
