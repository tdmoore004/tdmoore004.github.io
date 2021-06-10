import React from "react";
import { Link } from "react-router-dom";

// Reusable project component for each project page.
const Project = (props) => {

    return (
        <section className="project">

            <section className="card project">

                <img className="web-dev-photo project-gif" src={props.appGif} alt={props.appName + " Screen Recording Gif"}></img>

                <section className="project-info">

                    <section className="grid-x grid-margin-x">
                        <h1 className="hidden-header">{props.appName}</h1>
                        <img className="cell medium-6 project-title-header" src={props.appHeader} alt={props.appName}></img>
                        <div className="cell medium-6 button-group align-right app-links">
                            <a href={props.appLink} className="button">Check it Out</a>
                            <a href={props.github} className="button">Learn More</a>
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

                </section>

                <hr className="project-hr" />

                <section>
                    <Link to="/portfolio" className="back-to-work">
                        Back to my work
                    </Link>
                </section>

            </section>

        </section>
    )
}

export default Project;