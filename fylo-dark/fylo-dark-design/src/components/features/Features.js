import React from "react";
import "./Features.scss";
import allFeatures from "./all-features-data";

const Features = () => {
  return (
    <div className="features">
      {allFeatures.map((feature) => (
        <div className="feature">
          <img
            src={feature.logo}
            alt="desscription"
            className="feature--logo"
          />
          <h3 className="feature--title">{feature.title}</h3>
          <p className="feature--desc">{feature.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
