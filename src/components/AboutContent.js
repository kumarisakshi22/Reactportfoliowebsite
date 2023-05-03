import "./AboutContentStyle.css";
import React from 'react'
import { Link } from "react-router-dom";
import React1 from "../assests/react1.jpg";
import React2 from "../assests/react2.png";


const AboutContent = () => {
    return (
        <div className="about">
            <div className="left"><h1>Who I am
            </h1>
                <p>Hi! I am KUMARI SAKSHI ,A react front-end developer.An Undergrade student at NIET,GREATER NOIDA with CSE in data science Branch,
                This is my responsive portfolio website</p>
                
                <Link to="/contact">
                    <button className="btn">Contact</button></Link></div>

            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={React1} className="img" alt="true" />
                    </div>
                    <div className="img-stack bottom">
                        <img src={React2} className="img" alt="true" />
                    </div>
                </div></div>



        </div>
    )
}

export default AboutContent;