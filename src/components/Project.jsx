import React from "react";

// Reusable project component for each of my highlighted projects.
const Project = (props) => {
    return (
        <div className="cell">
            <div className="card web-dev">
                <h4 className="card-divider"><a href={props.appLink} target="_blank" rel="noreferrer">{props.appName}</a></h4>
                <div className="card-section portfolio">
                    <img className="web-dev-photo" src={props.appGif} alt={props.gifAlt}></img>
                    <h5 className="github"><a href={props.githubLink} target="_blank" rel="noreferrer">Github Repo</a></h5>
                    <p>{props.appDescription}</p>
                </div>
            </div>
        </div>
    )
}

export default Project;