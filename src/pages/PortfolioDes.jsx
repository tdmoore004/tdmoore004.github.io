import React, { useEffect } from "react";

// Importing style sheet for page.
import "./PortfolioDev.css"

// Importing Project component.
import ProjectTeaserPort from "../components/ProjectTeaserPort.jsx"

// Importing screen recording gifs and headers for each featured project.
import WebDesignHeader from "../assets/images/headers/web-design-header.png"
import BusinessQuestHeader from "../assets/images/headers/ultimate-business-quest-header.png"
import BusinessQuestGif from "../assets/images/project-screenshots/ultimate-business-quest-screenshot.jpg"
import SunHomesHeader from "../assets/images/headers/sun-home-header.png"
import SunHomesGif from "../assets/images/project-screenshots/sun-homes-screenshot.jpg"
import CodeOfEntryHeader from "../assets/images/headers/code-of-entry-header.png"
import CodeOfEntryGif from "../assets/images/project-screenshots/code-of-entry-screenshot.jpg"
import DreeHeader from "../assets/images/headers/dree-header.png"
import DreeGif from "../assets/images/project-screenshots/dree-screenshot.jpg"
import WaterAutomationHeader from "../assets/images/headers/water-automation-header.png"
import WaterAutomationGif from "../assets/images/project-screenshots/water-automation-screenshot.jpg"
import ChamberHeader from "../assets/images/headers/chamber-media-header.png"
import ChamberGif from "../assets/images/project-screenshots/chamber-mvp-screenshot.jpg"

const PortfolioDes = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <main className="card grid-container grid-x align-center portfolio">

            {/* Project Highlights */}
            <section className="card-section portfolio">

                <section className="heading">
                    
                    <h2 className="hidden-header">Web Development</h2>

                    <img className="develop-header" src={WebDesignHeader} alt="Web Development" loading="lazy" />

                    <hr className="dev-header"/>

                </section>

                {/* <hr className="portfolio-hr" /> */}
                <div className="grid-x grid-margin-x large-up-2">

                    <ProjectTeaserPort
                        appName="Ultimate Business Quest"
                        projectPage="/portfolio/ultimate-business-quest"
                        // appLink="https://shrouded-brushlands-11149.herokuapp.com/"
                        appID="ultimate-business-quest"
                        appHeader={BusinessQuestHeader}
                        appGif={BusinessQuestGif}
                        gifAlt="Ultimate Business Quest Screenshot"
                        frameLanguages="Built in Unbounce"
                        appDescription="Designed to inspire site visitors to download the Ultimate Business Quest app and start their quest with the first ever gamified app to help improve your business now."
                    />

                    <ProjectTeaserPort
                        appName="Sun Home Saunas Infrared Blanket"
                        projectPage="/portfolio/sun-home-saunas"
                        // appLink="https://glacial-gorge-49813.herokuapp.com/"
                        appID="sun-home-saunas"
                        appHeader={SunHomesHeader}
                        appGif={SunHomesGif}
                        gifAlt="Sun Home Saunas Screenshot"
                        frameLanguages="Built in Unbounce"
                        appDescription="Built to provide the important and necessary information on Sun Home Saunas Infrared Blankets and the benefits of buying a sauna in the compact portability of a blanket."
                    />

                    <ProjectTeaserPort
                        appName="Code of Entry"
                        projectPage="/portfolio/code-of-entry"
                        // appLink="https://tdmoore004.github.io/boredom-buster/index.html"
                        appID="code-of-entry"
                        appHeader={CodeOfEntryHeader}
                        appGif={CodeOfEntryGif}
                        gifAlt="Code of Entry Screenshot"
                        frameLanguages="Built in Unbounce"
                        appDescription="Created to illustrate the services offered by Code of Entry and the benefits of hiring them to be on your team and help with whatever your needs may be."
                    />

                    <ProjectTeaserPort
                        appName="Dree"
                        projectPage="/portfolio/dree"
                        // appLink="https://glacial-gorge-49813.herokuapp.com/"
                        appID="dree"
                        appHeader={DreeHeader}
                        appGif={DreeGif}
                        gifAlt="Dree Screenshot"
                        frameLanguages="Built in Unbounce"
                        appDescription="Designed to drive sign-ups for dree peer-to-peer laundry services by providing information on the process, benefits, and frequently asked questions for their services."
                    />

                    <ProjectTeaserPort
                        appName="Water Automation"
                        projectPage="/portfolio/water-automation"
                        // appLink="https://shrouded-brushlands-11149.herokuapp.com/"
                        appID="water-automation"
                        appHeader={WaterAutomationHeader}
                        appGif={WaterAutomationGif}
                        gifAlt="Water Automation Screenshot"
                        frameLanguages="Built in Unbounce"
                        appDescription="Built to help create awareness around toilet leaks and the benefits of purchasing an aquaHALT to have in your own home or property to protect from potential water damage."
                    />

                    <ProjectTeaserPort
                        appName="Chamber Media MVP"
                        projectPage="/portfolio/chamber-media-mvp"
                        // appLink="https://glacial-gorge-49813.herokuapp.com/"
                        appID="chamber-media-mvp"
                        appHeader={ChamberHeader}
                        appGif={ChamberGif}
                        gifAlt="Chamber Media MVP Screenshot"
                        frameLanguages="Built in Unbounce"
                        appDescription="Created to show what is offered in the MVP package offered by Chamber Media and show potential clients what can be done for them and the benefits that come with."
                    />

                </div>

            </section>

        </main >
    )
}

export default PortfolioDes;