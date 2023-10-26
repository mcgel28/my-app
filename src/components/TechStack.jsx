import React from "react";
import html from "../techlogo/html.png"
import css from "../techlogo/css.png"
import javascript from "../techlogo/javascript.png"
import bootstrap from "../techlogo/bootstrap.png"
import react from "../techlogo/react.png"
import tailwind from "../techlogo/tailwind.png"


function TechStack() {
    return (
            <div id="tech-stack">
                    <div className="container">
                    <div className="tech-img">
                        <ul><img className="tech" src={html} alt="hypertext"/><p>HTML</p></ul>
                        <ul><img className="tech" src={css} alt="cascade"/><p>CSS</p></ul>
                        <ul><img className="tech" src={javascript} alt="javascript img"/><p>JavaScript</p></ul>
                        <ul><img className="tech" src={bootstrap} alt="bootstrap img"/><p>BootStrap</p></ul>
                        <ul><img className="tech" src={react} alt="react img"/><p>React JS</p></ul>
                        <ul><img className="tech" src={tailwind} alt="tailwind img"/><p>Tailwind CSS</p></ul>
                    </div>
                </div>
            </div>
     
    )
}

export default TechStack;