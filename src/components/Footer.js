import "./Footerstyles.css";
import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>
                                133 NIET</p>
                            <p>Greater Noida</p></div>



                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />91-8936037694
                        </h4>

                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />kumarisakshi2210@gmail.com
                        </h4></div>

                </div>

                <div className="right">
                    <h4>About me</h4>
                    <p>This is Kumari Sakshi, currently pursuing Btech from Noida Institute of Engineering and technology,Greater Noida, i am Looking for various oppertunities to enhance my skills.</p>
                    <div className="social">

                        <a href="https://www.linkedin.com/in/kumari-sakshi-9b2517245/" ><FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
                        <a href="https://github.com/kumarisakshi22" ><FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Footer

