import React from "react";
import Carousel from "react-bootstrap/Carousel";

import "../Style/Maincon.css";
import Maincon2 from "./Maincon2";

function Maincon() {
  return (
    <>
    <Carousel slide={false} className="carousel" controls={false}>
        <Carousel.Item interval={1200}>
        <div className="carousel_div3">
        <div className="carousel_div3_subcon1">
        <h1>All Time</h1>
            <h1>Keep Your Family</h1>
            <h1>Secure</h1>
            <p>World class CCTV camera systems installed by professional and customization complete CCTV Services systems. CCTV Camera Setup at office, school, home, shop Etc.</p>

        </div>
          <div className="carousel_div3_subcon2">

          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={1200}>
        <div className="carousel_div1">
          <div className="carousel_div1_subcon1">
            <h1>24/7</h1>
            <h1>Surveillance</h1>
            <h1>And Security</h1>
            <h1>Services</h1>
            <p>CCTV security cameras that are suitable for both your video surveillance needs and your budget. Surveillance systems monitor shoplifting to produce videos that automatically trigger alerts based on motion detection.</p>

          </div>
          <div className="carousel_div1_subcon2">

          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={1200}>
        <div className="carousel_div2">
        <div className="carousel_div2_subcon1">
            <h1>All Time</h1>
            <h1>Keep Your Family</h1>
            <h1>Secure</h1>
            <p>World class CCTV camera systems installed by professional and customization complete CCTV Services systems. CCTV Camera Setup at office, school, home, shop Etc.</p>
        </div>
          <div className="carousel_div2_subcon2">

          </div>
        </div>
      </Carousel.Item>
      
    </Carousel>
    <Maincon2 />
    </>
  );
}

export default Maincon;
