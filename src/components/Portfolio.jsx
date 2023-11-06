import React from "react";
import wvdigital from "../imgportfolio/wvdigital.jpg"
import rentmoto2 from "../images/rentmoto2.jpg"


function Portfolio() {

    return (
        <div id="portfolio-section">
            <div className="portfolio">
               <h1 className="port-title">Portfolio</h1>
                <div className="port-row-1">
                    <div className="portoflio-col-1" >
                        <a href="https://mcgel28.github.io/rent-moto/">
<<<<<<< HEAD
                        <img className="portfolio-img" src={rentmoto2} alt="rent motorcycle" />
=======
                        <img className="portfolio-img" href="https://mcgel28.github.io/rent-moto/" src={rentmoto2} alt="rent motorcycle" />
>>>>>>> 1a105e11a924157702d66b23147aa4f2b012590f
                        </a>
                    </div>
                    <div className="portoflio-col-2" >
                        <a href="#">
                        <img className="portfolio-img" src={wvdigital} alt="wvdigital img"/>
                        </a>
                    </div>
                    <div className="portoflio-col-3" >
                        <a href="#">
                        <img className="portfolio-img" src={wvdigital} alt="wvdigital img"/>
                        </a>
                    </div>
                </div>

                <div className="port-row-2">
                    <div className="portoflio-col-1" >
                        <a href="#">
                        <img className="portfolio-img" src={wvdigital} alt="wvdigital img"/>
                        </a>
                    </div>
                    <div className="portoflio-col-2" >
                        <a href="#">
                        <img className="portfolio-img" src={wvdigital} alt="wvdigital img"/>
                        </a>
                    </div>
                    <div className="portoflio-col-3" >
                        <a href="#">
                        <img className="portfolio-img" src={wvdigital} alt="wvdigital img"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
