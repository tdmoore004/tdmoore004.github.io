import React from "react";
import { Link } from "react-router-dom";

// Reusable project component for each of my highlighted projects.
const ProjectTeaserHome = (props) => {

    return (
        <section className="cell project home">

            <section className="card web-dev home">

                <h3 className="hidden-header">{props.appName}</h3>

                <img className="web-dev-photo" src={props.appGif} alt={props.appName + " Screen Recording Gif"}></img>

                <Link to={props.projectPage} id={props.appID} className="project-overlay-home">
                    <section id={props.appID} className="project-info-teaser-home">
                        <img id={props.appID} className="project-title-home" src={props.appHeader} alt={props.appName}></img>
                        <hr id={props.appID} className="project-teaser-home hr-1"/>
                        <p className="project-learn-more-home">Learn More</p>
                    </section>
                </Link>

            </section>

        </section>
    )
}

export default ProjectTeaserHome;