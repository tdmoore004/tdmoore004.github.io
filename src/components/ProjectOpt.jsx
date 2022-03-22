import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";

// Reusable project component for each project page.
const ProjectOpt = (props) => {

    return (
        <section className="project">

            <section className="card project">

                <Link to={props.appScreenshot} target="_blank">
                    <img className="web-dev-photo project-gif" src={props.appGif} alt={props.appName + " Screen Recording Gif"}></img>
                </Link>

                <section className="project-info">

                    <section className="grid-x grid-margin-x">
                        <h1 className="hidden-header">{props.appName}</h1>
                        <img className="cell medium-6 project-title-header" src={props.appHeader} alt={props.appName}></img>
                    </section>

                    <hr className="project-hr" />

                    <section className="grid-x grid-margin-x">

                        <section className="cell medium-5">
                            <p className="app-language-frameworks">{props.frameLanguages}</p>
                        </section>

                        <section className="cell medium-7">
                            <p className="project-description">{props.appDescription}</p>
                            <p className="project-history">{props.appHistory}</p>
                            <p className="project-future">{props.appFuture}</p>
                        </section>

                    </section>

                    <hr className="project-hr" />

                </section>

                <section className="back-to-work">
                    <Link to="/portfolio/optimize" className="back-to-work">
                        <FontAwesomeIcon className="fas fa-double-angle-left" icon={faAngleDoubleLeft} />
                        Web Optimization Work
                    </Link>
                </section>

            </section>

        </section>
    )
}

export default ProjectOpt;