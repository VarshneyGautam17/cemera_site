import React from "react";
import "../Style/Maincon2.css";
import { FaCircleDot } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import img1 from "../Image/cemera_logo1.png";
import img2 from "../Image/cemera_logo2.png";
import img3 from "../Image/cemera_logo3.png";

function Maincon2() {
  return (
    <div className="maincon2_continer">
      <div className="maincon2_container_subcon1">
        <p id="maincon2_container_subcon1_head">Who Am I</p>
        <h1>CCTV Services in Delhi 10</h1>
        <h1>Years of Experiences</h1>
        <p>
          CCTV Services in Delhi was established in india the scorching summer
          of 2012 with team of CCTV professional.
        </p>
        <p>
          We are honored and blessed to be working on many large and technically
          challenging projects and serving clients with a national presence.
          This information and relationships with the world's most important
          brands allow us to provide you with the best value and the best room
          and security equipment for your home or office.
        </p>
        <p>
          <FaCircleDot className="maincon2_container_subcon1_head_icon" />&nbsp;&nbsp; Use
          High lavel tools and technology.
        </p>
        <p>
          <FaCircleDot className="maincon2_container_subcon1_head_icon" />&nbsp;&nbsp; 10
          Years Experience In Field.
        </p>
        <p>
          <FaCircleDot className="maincon2_container_subcon1_head_icon" /> &nbsp;&nbsp;CCTV
          Camera Mobile Setup.
        </p>
        <p>
          <FaCircleDot className="maincon2_container_subcon1_head_icon" /> &nbsp;&nbsp;24/7
          Hours Support.
        </p>
        <div className="d-flex justify-content-start align-item-start">
          <button
            className="btn btn-lg"
            style={{ backgroundColor: "rgb(255, 128, 0)", color: "white" }}
          >
            {" "}
            More About Us <GoArrowRight />
          </button>
        </div>
      </div>
      <div className="maincon2_container_subcon2">
        <div className="maincon2_container_subcon2_subcon1">
          <img src={img1} id="maincon2_container_subcon2_subcon1_image1" alt="image not load" />
        </div>

        <div className="maincon2_container_subcon2_subcon2">
          <div className="maincon2_container_subcon2_subcon2_sub1">
            <img src={img2} id="maincon2_container_subcon2_subcon2_image1"  alt="image not load" />
          </div>
          <div className="maincon2_container_subcon2_subcon2_sub2">
            <img src={img3} id="maincon2_container_subcon2_subcon2_image2" alt="image not load" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maincon2;
