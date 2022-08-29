import React from "react";
import Mike from "../../assets/michael.jpg";

const CTA = () => {
  return (
    <div className="cta">
      <a href={Mike} download className="btn">
        My Zoom BG
      </a>
      <a href="#contact" className="btn btn-primary">
        Say Hi!
      </a>
    </div>
  );
};

export default CTA;
