import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";

// Reusable project component for each project page.
const ProjectDev = (props) => {

    return (
        <section className="project">

            <section className="card project">

                <img className="web-dev-photo project-gif" src={props.appGif} alt={props.appName + " Screen Recording Gif"}></img>

                <section className="project-info">

                    <section className="grid-x grid-margin-x">
                        <h1 className="hidden-header">{props.appName}</h1>
                        <img className="cell medium-6 project-title-header" src={props.appHeader} alt={props.appName}></img>
                        <div className="cell medium-6 button-group align-right app-links">
                            <a href={props.appLink} className="button">View Site</a>
                            <a href={props.github} className="button">GitHub Repo</a>
                        </div>
                    </section>

                    <hr className="project-hr" />

                    <section className="grid-x grid-margin-x">

                        <section className="cell medium-5">
                            <p className="login-info">{props.loginInfo}</p>
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
                    <Link to="/portfolio/develop" className="back-to-work">
                        <FontAwesomeIcon className="fas fa-double-angle-left" icon={faAngleDoubleLeft} />
                        Web Development Work
                    </Link>
                </section>

            </section>

        </section>
    )
}

export default ProjectDev;