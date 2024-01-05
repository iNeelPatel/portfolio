import React from "react";

export default function NoiseBackground() {
  return (
    <div>
      <div className="ultra-gradient-wrapper-blur">
        <div className="ultra-gradient-wrapper">
          <div className="main-shapes-wrapper">
            <div className="shape-3"></div>
            <div className="shape-1"></div>
            <div className="shape-2"></div>
          </div>
          <div className="blending-group-wrapper">
            <div className="shape-8"></div>
            <div className="shape-9"></div>
            <div className="shape-4"></div>
            <div className="shape-5"></div>
            <div className="shape-7"></div>
            <div className="shape-6"></div>
          </div>
          <div className="background-noise"></div>
        </div>
      </div>
      <div className="noise-background-wrapper" />
    </div>
  );
}
