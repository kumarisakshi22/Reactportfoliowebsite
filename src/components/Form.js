import "./FormStyle.css";
import React from 'react'

const Form = () => {
    return (
        <div className="form">
            <form>
                <label >Your Name</label>
                <input type="text"></input>
                <label >Your Email</label>
                <input type="email"></input>
                <label >Subject</label>
                <input type=""></input>
                <label >Message</label>
                <textarea rows="6" placeholder="Type your msg herre" />
                <button className="btn">Submit</button>
            </form>


        </div>
    )
}

export default Form
