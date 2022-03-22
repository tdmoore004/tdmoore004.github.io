import React, { useEffect } from "react";

// Importing style sheet for page.
import "./PortfolioDev.css"

// Importing Project component.
import ProjectTeaserPort from "../components/ProjectTeaserPort.jsx"

// Importing screen recording gifs and headers for each featured project.
import WebOptimizationHeader from "../assets/images/headers/web-optimization-header.png"
import LifeSeasonsHeader from "../assets/images/headers/life-seasons-header.png"
import LifeSeasonsGif from "../assets/images/project-screenshots/life-seasons-urinari-x-screenshot.jpg"
import CapstoneHeader from "../assets/images/headers/capstone-header.png"
import CapstoneGif from "../assets/images/project-screenshots/capstone-screenshot.jpg"
import AccessHeader from "../assets/images/headers/access-header.png"
import AccessGif from "../assets/images/project-screenshots/access-heating-screenshot.jpg"
import ChamberHeader from "../assets/images/headers/chamber-media-header.png"
import ChamberGif from "../assets/images/project-screenshots/chamber-landing-page-screenshot.jpg"
import SlingShotHeader from "../assets/images/headers/sling-shot-header.png"
import SlingShotGif from "../assets/images/project-screenshots/sling-shot-screenshot.jpg"
import SunShrimpHeader from "../assets/images/headers/sun-shrimp-header.png"
import SunShrimpGif from "../assets/images/project-screenshots/sun-shrimp-screenshot.jpg"

const PortfolioOpt = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <main className="card grid-container grid-x align-center portfolio">

            <h1 className="hidden-header">What I Do</h1>

            {/* Project Highlights */}
            <section className="card-section portfolio">

                <section className="heading">
                    
                    <h2 className="hidden-header">Web Development</h2>

                    <img className="develop-header" src={WebOptimizationHeader} alt="Web Development" loading="lazy" />

                    <hr className="dev-header"/>

                </section>

                {/* <hr className="portfolio-hr" /> */}
                <div className="grid-x grid-margin-x large-up-2">

                    <ProjectTeaserPort
                        appName="LifeSeasons Urinari-X"
                        projectPage="/portfolio/life-seasons-urinari-x"
                        // appLink="https://shrouded-brushlands-11149.herokuapp.com/"
                        appID="life-seasons-urinari-x"
                        appHeader={LifeSeasonsHeader}
                        appGif={LifeSeasonsGif}
                        gifAlt="LifeSeasons Urinari-X Screenshot"
                        frameLanguages="Built in Unbounce"
                        appDescription="Built and optimized to provide the necessary information on LifeSeasons Urinari-X product and the urinary tract support it can provide those who use it."
                    />

                    <ProjectTeaserPort
                        appName="Capstone Payment Solutions"
                        projectPage="/portfolio/capstone-payment-solutions"
                        // appLink="https://glacial-gorge-49813.herokuapp.com/"
                        appID="capstone-payment-solutions"
                        appHeader={CapstoneHeader}
                        appGif={CapstoneGif}
                        gifAlt="Capstone Payment Solutions Screenshot"
                        frameLanguages="Built in Unbounce"
                        appDescription="Optimized and designed to generate leads by showing businesses the payment solutions that Capstone can offer and the benefits that come with those solutions."
                    />

                    <ProjectTeaserPort
                        appName="Access Heating &amp; Air"
                        projectPage="/portfolio/access-heating"
                        // appLink="https://tdmoore004.github.io/boredom-buster/index.html"
                        appID="access-heating"
                        appHeader={AccessHeader}
                        appGif={AccessGif}
                        gifAlt="Access Heating &amp; Air Screenshot"
                        frameLanguages="Built in Unbounce"
                        appDescription="Optimized to provide information on the services provided by Access Heating &amp; Air in a condensced format to help generate leads for interested clients."
                    />

                    <ProjectTeaserPort
                        appName="Chamber Media CRO"
                        projectPage="/portfolio/chamber-media-cro"
                        // appLink="https://glacial-gorge-49813.herokuapp.com/"
                        appID="chamber-media-cro"
                        appHeader={ChamberHeader}
                        appGif={ChamberGif}
                        gifAlt="Chamber Media CRO Screenshot"
                        frameLanguages="Built in Unbounce"
                        appDescription="Designed and optimized to provide information and case studies on what Chamber Media offers as part of its conversion rate optimization package in order to generate leads."
                    />

                    <ProjectTeaserPort
                        appName="Mark Bell Sling Shot"
                        projectPage="/portfolio/sling-shot"
                        // appLink="https://shrouded-brushlands-11149.herokuapp.com/"
                        appID="mark-bell-sling-shot"
                        appHeader={SlingShotHeader}
                        appGif={SlingShotGif}
                        gifAlt="Mark Bell Sling Shot Screenshot"
                        frameLanguages="Built in Unbounce"
                        appDescription="Built to optimize and improve conversion rates from social media ad traffic by providing comparisons between the different Sling Shots and the benefits that come with."
                    />

                    <ProjectTeaserPort
                        appName="Sun Shrimp"
                        projectPage="/portfolio/sun-shrimp"
                        // appLink="https://glacial-gorge-49813.herokuapp.com/"
                        appID="sun-shrimp"
                        appHeader={SunShrimpHeader}
                        appGif={SunShrimpGif}
                        gifAlt="Sun Shrimp Screenshot"
                        frameLanguages="Built in Unbounce"
                        appDescription="Created to help increase sales of Sun Shrimp's most popular offerings by illustrating the things that set Sun Shrimp apart from their competitors and why you should by their shrimp."
                    />

                </div>

            </section>

        </main >
    )
}

export default PortfolioOpt;