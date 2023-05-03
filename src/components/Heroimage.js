import "./Heroimagestyles.css";
import React from 'react'
import IntroImg from "../assests/bg3.png";
import { Link } from "react-router-dom";
const Heroimage = () => {
    return (

        <div className="hero">

            <div className="mask">
                <img className="into-img" src={IntroImg} alt="IntroImg" />

            </div>
            <div className="content">
                <div className="pic">
                    <img src="https://media.licdn.com/dms/image/C4E03AQEAiTqPsgi46Q/profile-displayphoto-shrink_400_400/0/1658498999410?e=1688601600&v=beta&t=VVtE4bgqLveVrjuZ9PK0bn6JIZ12kgj1M2xw-E2gN0E" alt="mypic" /></div>
                <p>KUMARI SAKSHI</p>
                <h1>React Developer</h1>
                <div className="page">
                    <Link to="/project" className="btn">Projects
                    </Link>
                    <Link to="/contact" className="btn btn-light">Contact
                    </Link>
                </div>
            </div>



        </div>
    )
}

export default Heroimage
