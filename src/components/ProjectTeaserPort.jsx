import React from "react";
import { Link } from "react-router-dom";

// Reusable project component for each of my highlighted projects.
const ProjectTeaserPort = (props) => {

    return (
        <section className="cell project">

            <section className="card web-dev portfolio">

                <h3 className="hidden-header">{props.appName}</h3>

                <img className="web-dev-photo" src={props.appGif} alt={props.appName + " Screen Recording Gif"}></img>

                <Link to={props.projectPage} id={props.appID} className="project-overlay">
                    <section id={props.appID} className="project-info-teaser">
                        <img id={props.appID} className="project-title" src={props.appHeader} alt={props.appName}></img>
                        <hr id={props.appID} className="project-teaser hr-1"/>
                        <p id={props.appID} className="project-description-teaser">{props.appDescription}</p>
                        <hr id={props.appID} className="project-teaser"/>
                        <p className="project-learn-more">Learn More</p>
                    </section>
                </Link>

            </section>

        </section>
    )
}

export default ProjectTeaserPort;