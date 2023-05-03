import "./PricingCardsStyle.css";
import React from 'react'
import { Link } from "react-router-dom";
function PricingCard() {
    return (
        <div className="pricing">
            <div className="card-container">

                <div className="card">
                    <h3>-Responsive Portfolio Website -</h3>
                    <span className="bar"></span>
                    <p className="btc">$100
                    </p>
                    <p>- 2 Days -</p>
                    <p>- 4 Pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <a href="/" className="btn">CLICK HERE TO CHECK WEBSITE</a>
                    <Link to="/contact" className="btn">Click here to purchase </Link>


                </div>
                <div className="card">
                    <h3>-TextUtils Word Calculator-</h3>
                    <span className="bar"></span>
                    <p className="btc">$50
                    </p>
                    <p>- 2 Days -</p>
                    <p>- 2 Pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <a href="https://kumarisakshi22.github.io/MyPage/" className="btn">CLICK HERE TO CHECK</a>
                    <Link to="/contact" className="btn">Click here to purchase</Link>

                </div>

            </div>
        </div>






    )
}

export default PricingCard
