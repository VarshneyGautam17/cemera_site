import React from "react";
import "../Style/Header.css";
import { FaEnvelope } from "react-icons/fa";
import logo1 from "../Image/logo.png";
import { IoIosCall } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Header1 from "./Header1";
import Header2 from "./Header2";
import { FaWhatsapp } from "react-icons/fa6";
function Header() {
  return (
    <>
      {/* <Header1 /> */}
      <div className="heder_continer">
        <div className="header_continer_subcon1">
          <img src={logo1} alt="image not load" />
          <h3>SAMTECH COMNET</h3>
        </div>
        <div className="header_continer_subcon4">
          <div className="header_continer_subcon4_icon-div1">
            <FaFacebookF className="header_continer_subcon4_icon-div1_icon" />
          </div>
          <div className="header_continer_subcon4_icon-div2">
            <IoGlobeOutline className="header_continer_subcon4_icon-div2_icon" />
          </div>
          <div className="header_continer_subcon4_icon-div3">
            <FaXTwitter className="header_continer_subcon4_icon-div3_icon" />
          </div>
          <div className="header_continer_subcon4_icon-div4">
            <FaInstagram className="header_continer_subcon4_icon-div4_icon" />
          </div>
        </div>
        <div className="header_continer_subcon2">
          <div>
            <div className="header_continer_subcon2_icon-div">
              <FaEnvelope className="header_continer_subcon2_icon1" />
            </div>
          </div>
          <div className="header_continer_subcon2_text">
            <h2>Email</h2>
            <p>kabitsolution@gmail.com</p>
          </div>
        </div>
        <div className="header_continer_subcon3">
          <div>
            <div className="header_continer_subcon3_icon-div">
              <FaWhatsapp className="header_continer_subcon3_icon1" />
            </div>
          </div>
          <div className="header_continer_subcon3_text">
            <h2>Call/WhatAapp</h2>
            <p>+91-9650123435</p>
          </div>
        </div>
      </div>
      <Header2 />
    </>
  );
}

export default Header;
