import React from "react";
import { Link } from "react-router-dom";

import "./Style/Contact.scss";

export default function Contact() {
    return(
        <div className="contact-container">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2>Contact Page</h2>
                        <p>
                            You may use <Link to="/">Simple Contact Form</Link> to send email to your inbox.
                            You can modify and use this template for your website. Header image has a parallax effect. Total 3 HTML pages included in this template.
                        </p>
                    </div>
                    <div className="col-md-6 col-12 item">
                        <form className="form">
                            <input type="text " placeholder="Name" />
                            <input type="text " placeholder="Email" />
                            <textarea placeholder="Message" rows="5"></textarea>
                            <button>Send</button>
                        </form>
                    </div>
                    <div className="col-md-6 col-12 item">
                        <h4>Our Address</h4>
                        <p>180 Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus 10550</p>
                        <Link to="/" className="link"><i className="fas fa-phone"> </i> 080-090-0110</Link>
                        <Link to="/" className="link"><i className="fas fa-envelope"> </i> info@company.co</Link>
                        <div className="social">
                            <a href="https://www.facebook.com/"><i className="fab fa-facebook"> </i></a>
                           <a href="https://twitter.com/"><i className="fab fa-twitter"> </i></a>
                            <a href="https://www.instagram.com/"><i className="fab fa-instagram"> </i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}