import React from "react";

// Importing style sheet for page.
import "./ProjectPage.css"

// Importing Project component.
import Project from "../components/Project.jsx"

// Importing screen recording gifs and headers for each project.
import TravelerHeader from "../assets/images/headers/traveler-header.png"
import FurlodgeHeader from "../assets/images/headers/furlodge-header.png"
import BoredomBusterHeader from "../assets/images/headers/boredom-buster-header.png"
import DevourBurgerHeader from "../assets/images/headers/burger-header.png"
import BudgetHeader from "../assets/images/headers/budget-tracker-header.png"
import FitnessTrackeHeader from "../assets/images/headers/fitness-tracker-header.png"
import TravelerGif from "../assets/images/project-screenshots/traveler-screen-recording.gif"
import FurLodgeGif from "../assets/images/project-screenshots/furlodge-screen-recording.gif";
import BoredomBusterGif from "../assets/images/project-screenshots/boredom-buster-screen-recording.gif";
import DevourBurgerGif from "../assets/images/project-screenshots/devour-da-burger-screen-recording.gif";
import BudgetGif from "../assets/images/project-screenshots/budget-tracker-screen-recording.gif";
import FitnessTrackerGif from "../assets/images/project-screenshots/fitness-tracker-screen-recording.gif"

const ProjectPage = () => {

    console.log(window.location.pathname);

    return (
        <main className="card grid-container grid-x align-center project">

            {/* Individual Project Information */}
            {window.location.pathname === "/portfolio/traveler" &&
                <Project
                    appName="Traveler"
                    appLink="https://shrouded-brushlands-11149.herokuapp.com/"
                    appHeader={TravelerHeader}
                    appGif={TravelerGif}
                    github="https://github.com/tdmoore004/traveler"
                    frameLanguages="HTML | CSS | JavaScript | React | Foundation CSS | Node.js | Express.js | Mongoose | Passport | Bcrypt | React Big Calendar"
                    appDescription="Take the worry and stress out of traveling with Traveler. Keep track of all your flights, lodging, and activities in one convienant location. Access the information anytime, anywhere, online or offline."
                    loginInfo="Username: explore@traveler.com | Password: Travel10Test"
                    appHistory="The idea behind this application was to create a singular place for an individual to store all of the information they may need for any of their travels, business or pleasure. In partnership with another student, this application, both front-end and back-end, was designed and developed from the ground up as a final project for my full-stack coding bootcamp. Together we worked on both the front-end and back-end functionality of this application to ensure a viable product in the end."
                    appFuture="Ideas for future development include the ability to delete trips and events, have trips and events delete automatically after they have passed, the ability to click on the calendar to add or update a trip or event, and much more."
                />
            }

            {window.location.pathname === "/portfolio/furlodge" &&
                <Project
                    appName="FurLodge"
                    appLink="https://glacial-gorge-49813.herokuapp.com/"
                    appHeader={FurlodgeHeader}
                    appGif={FurLodgeGif}
                    github="https://github.com/tdmoore004/fur-lodge"
                    frameLanguages="HTML  | CSS | JavaScript | JQuery | Foundation CSS | Node.js | Express.js | Express Handlebars | Sequelize | Passport | Bcrypt"
                    appDescription="Give your furbabies the care they deserve while you are away, or busy, with FurLodge. Enter the criteria for the care you are looking for and find a host that will show them the same affection as you."
                    loginInfo="Username: host@furlodge.com | Password: Host10Test"
                    appHistory="The idea behind this application was to create a AirBnB like app where pet owners could find other animal lovers to provide the same loving care for their pets as they do. Working with a team of 3 other students from my coding bootcamp, the front and back end of this application were designed and developed from the ground up. My primary duties focused on the front-end functionality, but I provided assistance elsewhere when needed."
                    appFuture="Ideas for future development include a messaging service to connect hosts with those they are hosting, ability to provide a user profile picture, the ability to see a calendar of availability for a host, and much more."
                />
            }

            {window.location.pathname === "/portfolio/boredom-buster" &&
                <Project
                    appName="Boredom Buster"
                    appLink="https://tdmoore004.github.io/boredom-buster/index.html"
                    appHeader={BoredomBusterHeader}
                    appGif={BoredomBusterGif}
                    github="https://github.com/tdmoore004/boredom-buster"
                    frameLanguages="HTML  | CSS | JavaScript | JQuery | Materialize CSS | Bored API | Google Books API"
                    appDescription="Are you bored and and can not think of anything to do? Use Boredom Buster to find a completely random activity, or one based on your criteria, and some related books to keep you busy."
                    loginInfo="No Login Needed"
                    appHistory="This application was designed and developed in the thick of COVID-19 and so was designed to help people who may be bored think of something to do. Working with 2 other students, this application was the first project for my coding bootcamp. It was intended to be focused on front-end work, with connections to 3rd party APIs. We utilized the Bored API to generate the activities and the Google Books API to generate related books."
                    appFuture="Ideas for future development include adding in back-end server capabilities and login information to allow users to store their activities and keep track of what they have not done yet, more possible activities and criteria for searching for activities, the ability to connect with friends through the application, and more."
                />
            }

            {window.location.pathname === "/portfolio/devour-da-burger" &&
                <Project
                    appName="Devour Da Burger"
                    appLink="https://glacial-gorge-49813.herokuapp.com/"
                    appHeader={DevourBurgerHeader}
                    appGif={DevourBurgerGif}
                    github="https://github.com/tdmoore004/devour-da-burger"
                    frameLanguages="HTML  | CSS | JavaScript | JQuery | Skeleton CSS | Node.js | Express.js | Sequelize"
                    appDescription="Keep track of all the burgers you want to devour and those that you already have with Devour Da Burger. Just add the burger you want to devour and then mark as devoured when it has been devoured."
                    loginInfo="No Login Needed"
                    appHistory="This was an individual homework assignment from my coding bootcamp designed to help us connect what we had learned regarding front-end and back-end development. This was the first application I built from the ground up that included both front and back-end work."
                    appFuture="Future development ideas include adding the ability to take pictures of the burgers you want to eat and the ones that you have already eaten, the ability to connect with APIs to locate where you could possibly eat some of the burgers on your list, the ability to find or add recipes for burgers you could make on your own, and more."
                />
            }

            {window.location.pathname === "/portfolio/budget-tracker" &&
                <Project
                    appName="Budget Tracker"
                    appLink="https://shrouded-brushlands-11149.herokuapp.com/"
                    appHeader={BudgetHeader}
                    appGif={BudgetGif}
                    github="https://github.com/tdmoore004/progressive-budget-offline"
                    frameLanguages="HTML | JavaScript | JQuery | Node.js | Express.js | Sequelize"
                    appDescription="Whether you spent money on a new toy, went out to dinner with some friends, or just got paid you can keep track of all your expenses, both online and offline, with the Budget Tracker."
                    loginInfo="No Login Needed"
                    appHistory="This application was part of a homework assignment designed to test what we had learned regarding offline applications, while focusing primarily on the back-end work. The front-end functionality was already in place and only the work to create a server and connect it to the back-end with offline capabilities was needed."
                    appFuture="Ideas for future development include adding in the ability to see more of your past transactions, seperating out your transactions to income and spending, adjusting the styling of the site to help with identifing income compared to spending, and more."
                />
            }

            {window.location.pathname === "/portfolio/fitness-tracker" &&
                <Project
                    appName="Fitness Tracker"
                    appLink="https://glacial-gorge-49813.herokuapp.com/"
                    appHeader={FitnessTrackeHeader}
                    appGif={FitnessTrackerGif}
                    github="https://github.com/tdmoore004/workout-tracker"
                    frameLanguages="HTML | JavaScript | JQuery | Node.js | Express.js | Sequelize"
                    appDescription="Stay healthy and active and keep track of your fitness with the Fitness Tracker. Keep track of all your physical activity in one place, simply enter the type of exercise, the duration, and the resistance."
                    loginInfo="No Login Needed"
                    appHistory="This application was one of the last homework assignments as we learned about the back-end for my coding bootcamp. We were given the code and functionality for the front-end and were tasked with creating a server and connecting the back-end allowing individuals to record an exercise for a workout and continue or start a new workout."
                    appFuture="Future development ideas include updating the user interface and experience to allow for a mobile friendly exprience, adding functionality for the application to work offline, and more."
                />
            }
            
        </main >
    )
}

export default ProjectPage;