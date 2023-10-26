import React from "react";
import handcoding from "../images/handcoding.png"

function Contact() {
    return (
        <div id="contact-section">
            <div className="container">
                <div className="contact-title">
                    <h1>Contact Me</h1>
                </div>
                <div className="contact"> 
                        <img className="handcoding" src={handcoding} alt="hand coding" />
                    <form className="input-info">
                        <input type="text" name="name" placeholder=" Enter your name"></input>
                        <input type="text" name="email" placeholder=" Enter your e-mail"></input>
                        <textarea type="text" rows="6" name="message" placeholder=" What is your message?"></textarea>
                        <div className="button-container">
                        <button type="submit" className="contact-button">Submit</button>
                        </div>
                    </form>
                </div>
            
            </div>
        </div>
    )
}

export default Contact;