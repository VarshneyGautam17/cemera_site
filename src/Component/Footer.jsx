import React from "react";
import "../Style/Footer.css";
import footer1 from "../Image/footer1.png"
import footer2 from "../Image/footer2.png"
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { FaGlobeAmericas } from "react-icons/fa";
import Footer1 from "./Footer1";

function Footer() {
  return (
<>
    <div className="footer_container">
      <div className="footer_container_subcon1">
        <h4>Google Map Direction</h4>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112148.51784117268!2d77.12681044335935!3d28.55050300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3ef1979c983%3A0xbf55ef5695bb5223!2sSamtech%20Comnet%20Pvt.Ltd.!5e0!3m2!1sen!2sin!4v1706505278724!5m2!1sen!2sin"
          width={200}
          height={200}
          style={{
            border: "1px solid white",
            borderRadius: "0.1rem",
            marginTop: "1rem",
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="footer_container_subcon2">
        <h4>Our Service</h4>
        <p>Biometric Fingerprint Device</p>
        <p>CCTV Repair & Installation Services</p>
        <p>EM Lock and Steel lock Setup</p>
        <p>Surveillance Security Systems</p>
        <p>EPABX Intercom Configuration</p>
      </div>
      <div className="footer_container_subcon3">
        <h4>Recent Post</h4>
        <div className="d-flex justify-content-center mt-3">
          <img src={footer1} className="footer_img" alt="image not load" />
          <div className="footer_para_text">
          <p>CCTV Maintenance Services near me in Delhi</p>
          <p>5 Sep, 2021</p>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <img src={footer2} className="footer_img" alt="image not load" />
          <div className="footer_para_text">
          <p>CCTV Installation Services in Delhi</p>
          <p>5 Sep, 2021</p>
          </div>
        </div>
      </div>
      <div className="footer_container_subcon4">
      <h4>Contact Us</h4>
      <p>Business it will frequently occur that some pleasures.</p>
      <p><FaLocationDot/> Near Dwarka, New Delhi, Delhi</p>
      <p><IoCallSharp/> 9650912345 / 9654123423</p>
      <p><FaGlobeAmericas/> kabitsolution@gmail.com</p>
      </div>
    </div>
    <Footer1 />
    </>
  );
}

export default Footer;
