import React from 'react';
import me2 from "../images/me2.jpg";


function About() {
    return (
        <div id="about-section">
            <div className="container">
                <div className="about">
                    <div className="about-col-1">
                        <img className="me2" src={me2} alt="img of Adrian" />
                    </div>
                    <div className="about-text">
                        <h2 className="about-col-2">About Me</h2>
                        <p>I am Adrian, a creative web developer with a strong passion for coding and problem solving. As a former aircraft mechanic, I believe being a detail-oriented person is the fundamental of success at everything. I am fond of making interactive websites with an inline to user-friendly interface. I'm excited to make a leap and continue refining my skill set with the right company.</p>
                        <p>In my leisure time, I enjoy riding my bike and motorcycle around our town, and I'm also fond of engines. I love repairing my own things as it gives me more knowledge on something I never knew.</p>
                        <div className="about-row">
                            <div className="about-row-1">
                                <li>
                                    <h5>NAME</h5>
                                    <p>Adrian Miguel Arellano</p>
                                </li>
                                <li>
                                    <h5>E-MAIL</h5>
                                    <p>gel.adrian28@gmail.com</p>
                                </li>
                            </div>
                            <div className="about-row-2">
                                <li>
                                    <h5>EMPLOYMENT</h5>
                                    <p>Open</p>
                                </li>
                                <li>
                                    <h5>EDUCATION</h5>
                                    <p>BS Computer Science<br />(In Progress)</p>
                                    <p>BS Aircraft Maintenance<br />(2021)</p>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;