import React from "react";

// Importing style sheet for page.
import "./Portfolio.css"

// Importing Project component.
import ProjectTeaser from "../components/ProjectTeaser.jsx"

// Importing screen recording gifs and headers for each featured project.
import DesignDevelopHeader from "../assets/images/headers/design-development-header.png"
import TravelerHeader from "../assets/images/headers/traveler-header.png"
import FurlodgeHeader from "../assets/images/headers/furlodge-header.png"
import BoredomBusterHeader from "../assets/images/headers/boredom-buster-header.png"
import DevourBurgerHeader from "../assets/images/headers/burger-header.png"
import DevelopHeader from "../assets/images/headers/development-header.png"
import BudgetHeader from "../assets/images/headers/budget-tracker-header.png"
import FitnessTrackeHeader from "../assets/images/headers/fitness-tracker-header.png"
import TravelerGif from "../assets/images/project-screenshots/traveler-screenshot.jpg"
import FurLodgeGif from "../assets/images/project-screenshots/furlodge-screenshot.jpg";
import BoredomBusterGif from "../assets/images/project-screenshots/boredom-buster-screenshot.jpg";
import DevourBurgerGif from "../assets/images/project-screenshots/devour-da-burger-screenshot.jpg";
import BudgetGif from "../assets/images/project-screenshots/budget-tracker-screenshot.jpg";
import FitnessTrackerGif from "../assets/images/project-screenshots/fitness-tracker-screenshot.jpg"

const Portfolio = () => {
    return (
        <main className="card grid-container grid-x align-center portfolio">

            <h1 className="hidden-header">What I Do</h1>

            {/* Project Highlights */}
            <section className="card-section portfolio">

                <h2 className="hidden-header">Web Design &amp; Development</h2>

                <img className="design-develop-header" src={DesignDevelopHeader} alt="Web Design &amp; Development" loading="lazy" />

                {/* <hr className="portfolio-hr" /> */}
                <div className="grid-x grid-margin-x large-up-2">

                    <ProjectTeaser
                        appName="Traveler"
                        projectPage="/portfolio/traveler"
                        appLink="https://shrouded-brushlands-11149.herokuapp.com/"
                        appID="traveler"
                        appHeader={TravelerHeader}
                        appGif={TravelerGif}
                        gifAlt="Traveler Screen Recording"
                        frameLanguages="HTML | CSS | JavaScript | React | Foundation CSS | Node.js | Express.js | Mongoose | React Big Calendar | Passport | Bcrypt"
                        appDescription="Take the worry and stress out of traveling with Traveler. Keep track of all your flights, lodging, and activities in one convienant location available to access anytime, anywhere."
                    />

                    <ProjectTeaser
                        appName="Furlodge"
                        projectPage="/portfolio/furlodge"
                        appLink="https://glacial-gorge-49813.herokuapp.com/"
                        appID="furlodge"
                        appHeader={FurlodgeHeader}
                        appGif={FurLodgeGif}
                        gifAlt="FurLodge Screen Recording"
                        frameLanguages="HTML  | CSS | JavaScript | JQuery | Foundation CSS | Node.js | Express.js | Express Handlebars | Sequelize | Passport | Bcrypt"
                        appDescription="Give your furbabies the care they deserve while you are away, or busy, with FurLodge. Find a host that meets your needs and that will show them the same affection as you."
                    />

                    <ProjectTeaser
                        appName="Boredom Buster"
                        projectPage="/portfolio/boredom-buster"
                        appLink="https://tdmoore004.github.io/boredom-buster/index.html"
                        appID="boredom-buster"
                        appHeader={BoredomBusterHeader}
                        appGif={BoredomBusterGif}
                        gifAlt="Boredom Buster Screen Recording"
                        frameLanguages="HTML  | CSS | JavaScript | JQuery | Materialize CSS | Bored API | Google Books API"
                        appDescription="Are you bored and can not think of anything to do? Use Boredom Buster to find a random activity, or one based on your criteria, and some related books to keep you busy."
                    />

                    <ProjectTeaser
                        appName="Devour Da Burger"
                        projectPage="/portfolio/devour-da-burger"
                        appLink="https://glacial-gorge-49813.herokuapp.com/"
                        appID="devour-da-burger"
                        appHeader={DevourBurgerHeader}
                        appGif={DevourBurgerGif}
                        gifAlt="Devour Da Burger Screen Recording"
                        frameLanguages="HTML  | CSS | JavaScript | JQuery | Skeleton CSS | Node.js | Express.js | Sequelize"
                        appDescription="Keep track of the burgers you want to devour and those you already have with Devour Da Burger. Add the burger you want to devour or mark those you have eaten as devoured."
                    />

                </div>

                <h2 className="hidden-header">Web Development</h2>

                <img className="design-develop-header" src={DevelopHeader} alt="Web Development" loading="lazy" />

                {/* <hr className="portfolio-hr" /> */}
                <div className="grid-x grid-margin-x large-up-2">

                    <ProjectTeaser
                        appName="Budget Tracker"
                        projectPage="/portfolio/budget-tracker"
                        appLink="https://shrouded-brushlands-11149.herokuapp.com/"
                        appID="budget-tracker"
                        appHeader={BudgetHeader}
                        appGif={BudgetGif}
                        gifAlt="Budget Tracker Recording"
                        frameLanguages="HTML | JavaScript | JQuery | Node.js | Express.js | Sequelize"
                        appDescription="Whether you spent money on a new toy, went out to dinner with some friends, or just got paid you can keep track of all your expenses, both online and offline, with Budget Tracker."
                    />

                    <ProjectTeaser
                        appName="Fitness Tracker"
                        projectPage="/portfolio/fitness-tracker"
                        appLink="https://glacial-gorge-49813.herokuapp.com/"
                        appID="fitness-tracker"
                        appHeader={FitnessTrackeHeader}
                        appGif={FitnessTrackerGif}
                        gifAlt="Fitness Tracker Screen Recording"
                        frameLanguages="HTML | JavaScript | JQuery | Node.js | Express.js | Sequelize"
                        appDescription="Stay healthy and active! Keep track of your fitness with Fitness Tracker. Track the type of physical activity, the duration, and amount of resistance in one place."
                    />

                </div>

            </section>

        </main >
    )
}

export default Portfolio;