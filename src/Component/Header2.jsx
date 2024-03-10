import React from 'react';
import "../Style/Header2.css";
import { FaSearch } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

function Header2() {
  return (
    <div className='header2_container'>
        <div className='header2_container_subcon1'>
            <div className='header2_container_subcon1_subcon1'><FaSearch /></div>
        </div>
        <div className='header2_container_subcon2'>
            <ul className='d-flex flex-wrap'>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>SERVICE</li>
                <li>SECURITY SYSTEM</li>
                <li>SURVEILLANCE</li>
                <li>CONTACT</li>
                <li>BLOGS</li>
            </ul>

        </div>
        <div className='header2_container_subcon3'>
        <button className='header2_container_subcon3_button'>Contact Us <IoIosStar/><IoIosStar/><IoIosStar/><IoIosStar/><IoIosStar/></button>
        </div>
    </div>
  )
}

export default Header2