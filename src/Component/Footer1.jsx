import React from "react";
import "../Style/Footer1.css";

function Footer1() {
  return (
    <div className="footer1_container">
      <div className="footer1_container_subcon1">
        <p className="m-0 p-0">
          Copyright 2012-23 ©{" "}
          <span style={{ color: "rgb(255, 128, 0)" }}> KAB IT SOLUTION </span>{" "}
          all rights reserved.
        </p>
      </div>
      <div className="footer1_container_subcon2">
        <span>FAQs</span>
        <span>Site Map</span>
        <span>Condition</span>
        <span>Privacy Policy</span>
        <span>Contact Us</span>
        <span>ROR/RSS</span>
      </div>
    </div>
  );
}

export default Footer1;
