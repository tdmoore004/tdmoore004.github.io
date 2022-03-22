import React, { useEffect } from "react";

// Importing style sheet for page.
import "./ProjectPage.css"

// Importing Project component.
import ProjectDev from "../components/ProjectDev.jsx"
import ProjectDes from "../components/ProjectDes.jsx"
import ProjectOpt from "../components/ProjectOpt.jsx"

// Importing screen recording gifs and headers for develop work
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

// Import headers and screenshots for design work
import BusinessQuestHeader from "../assets/images/headers/ultimate-business-quest-header.png"
import BusinessQuestGif from "../assets/images/project-screenshots/ultimate-business-quest-screenshot.jpg"
import BusinessQuestPage from "../assets/images/project-screenshots/ultimatebusinessquest-lp-desktop.png"
import SunHomesHeader from "../assets/images/headers/sun-home-header.png"
import SunHomesGif from "../assets/images/project-screenshots/sun-homes-screenshot.jpg"
import SunHomesPage from "../assets/images/project-screenshots/sunhome-lp-desktop.png"
import CodeOfEntryHeader from "../assets/images/headers/code-of-entry-header.png"
import CodeOfEntryGif from "../assets/images/project-screenshots/code-of-entry-screenshot.jpg"
import CodeOfEntryPage from "../assets/images/project-screenshots/codeofentry-lp-desktop.png"
import DreeHeader from "../assets/images/headers/dree-header.png"
import DreeGif from "../assets/images/project-screenshots/dree-screenshot.jpg"
import DreePage from "../assets/images/project-screenshots/dree-lp-desktop.png"
import WaterAutomationHeader from "../assets/images/headers/water-automation-header.png"
import WaterAutomationGif from "../assets/images/project-screenshots/water-automation-screenshot.jpg"
import WaterAutomationPage from "../assets/images/project-screenshots/waterautomation-lp-desktop.png"
import ChamberMVPHeader from "../assets/images/headers/chamber-media-header.png"
import ChamberMVPGif from "../assets/images/project-screenshots/chamber-mvp-screenshot.jpg"
import ChamberMVPPage from "../assets/images/project-screenshots/chamber-mvp-lp-desktop.png"

// Import headers and screenshots for optimize work
import LifeSeasonsHeader from "../assets/images/headers/life-seasons-header.png"
import LifeSeasonsGif from "../assets/images/project-screenshots/life-seasons-urinari-x-screenshot.jpg"
import LifeSeasonsPage from "../assets/images/project-screenshots/lifeseasons-urinarix-lp-desktop-mk4.png"
import CapstoneHeader from "../assets/images/headers/capstone-header.png"
import CapstoneGif from "../assets/images/project-screenshots/capstone-screenshot.jpg"
import CapstonePage from "../assets/images/project-screenshots/capstone-lp-desktop.png"
import AccessHeader from "../assets/images/headers/access-header.png"
import AccessGif from "../assets/images/project-screenshots/access-heating-screenshot.jpg"
import AccessPage from "../assets/images/project-screenshots/accessheating-lp-desktop.png"
import ChamberCROHeader from "../assets/images/headers/chamber-media-header.png"
import ChamberCROGif from "../assets/images/project-screenshots/chamber-landing-page-screenshot.jpg"
import ChamberCROPage from "../assets/images/project-screenshots/chamber-cro-lp-desktop.png"
import SlingShotHeader from "../assets/images/headers/sling-shot-header.png"
import SlingShotGif from "../assets/images/project-screenshots/sling-shot-screenshot.jpg"
import SlingShotPage from "../assets/images/project-screenshots/slingshot-lp-dekstop.png"
import SunShrimpHeader from "../assets/images/headers/sun-shrimp-header.png"
import SunShrimpGif from "../assets/images/project-screenshots/sun-shrimp-screenshot.jpg"
import SunShrimpPage from "../assets/images/project-screenshots/sunshrimp-lp-desktop.png"

const ProjectPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <main className="card grid-container grid-x align-center project">

            {/* Individual Project Information */}
            {window.location.pathname === "/portfolio/traveler" &&
                <ProjectDev
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
                <ProjectDev
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
                <ProjectDev
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
                <ProjectDev
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
                <ProjectDev
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
                <ProjectDev
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

            {window.location.pathname === "/portfolio/ultimate-business-quest" &&
                <ProjectDes
                    appName="Ultimate Business Quest"
                    appHeader={BusinessQuestHeader}
                    appScreenshot={BusinessQuestPage}
                    appGif={BusinessQuestGif}
                    frameLanguages="Built in Unbounce"
                    appDescription="Designed to inspire site visitors to download the Ultimate Business Quest app and start their quest with the first ever gamified app to help improve your business now."
                    appHistory="The goal for this page was to get downloads for the Ultimate Business Quest app on both the App Store and Google Play Store. With Ultimate Business Quest being a new concept, a gamified app designed to help you improve your business, we wanted to help those visiting the page to understand the benefits that can come from blurring fantasy with reality."
                    appFuture=""
                />
            }

            {window.location.pathname === "/portfolio/sun-home-saunas" &&
                <ProjectDes
                    appName="Sun Home Saunas"
                    appHeader={SunHomesHeader}
                    appScreenshot={SunHomesPage}
                    appGif={SunHomesGif}
                    frameLanguages="Built in Unbounce"
                    appDescription="Built to provide the important and necessary information on Sun Home Saunas Infrared Blankets and the benefits of buying a sauna in the compact portability of a blanket."
                    appHistory="Sun Home Sauna offers many great sauna options, including their Infrared Sauna Blanket. With many individuals wanting the benefits of a sauna but not having enough room in their home or wanting the ability to travel with it we wanted to help those individuals find Sun Home Saunas Infrared Sauna Blanket."
                    appFuture=""
                />
            }

            {window.location.pathname === "/portfolio/code-of-entry" &&
                <ProjectDes
                    appName="Code of Entry"
                    appHeader={CodeOfEntryHeader}
                    appScreenshot={CodeOfEntryPage}
                    appGif={CodeOfEntryGif}
                    frameLanguages="Built in Unbounce"
                    appDescription="Created to illustrate the services offered by Code of Entry and the benefits of hiring them to be on your team and help with whatever your needs may be."
                    appHistory="Code of Entry provides a variety of services to help businesses with their digital marketing needs. The goal of this page was to help individuals looking for those services see what Code of Entry can provide and how they can be trusted and generate leads for Code of Entry."
                    appFuture=""
                />
            }

            {window.location.pathname === "/portfolio/dree" &&
                <ProjectDes
                    appName="Dree"
                    appHeader={DreeHeader}
                    appScreenshot={DreePage}
                    appGif={DreeGif}
                    frameLanguages="Built in Unbounce"
                    appDescription="Designed to drive sign-ups for Dree peer-to-peer laundry services by providing information on the process, benefits, and frequently asked questions for their services."
                    appHistory="With Dree's peer-to-peer laundry service being a fairly new concept we wanted to provide the necessary information to put peoples minds at ease regarding any questions or concerns they may have regarding the process and overall service offered."
                    appFuture=""
                />
            }

            {window.location.pathname === "/portfolio/water-automation" &&
                <ProjectDes
                    appName="Water Automation"
                    appHeader={WaterAutomationHeader}
                    appScreenshot={WaterAutomationPage}
                    appGif={WaterAutomationGif}
                    frameLanguages="Built in Unbounce"
                    appDescription="Built to help create awareness around toilet leaks and the benefits of purchasing an aquaHALT to have in your own home or property to protect from potential water damage."
                    appHistory="Water damage from leaky toilets can cause big problems for both home owners and property owners. Water Automation created the aquaHALT to help with these issues and with this page we wanted to provide the general information regarding how the aquaHALT works as well as the benefits that come with using it to encourage individuals to purchase the device for their home or property."
                    appFuture=""
                />
            }

            {window.location.pathname === "/portfolio/chamber-media-mvp" &&
                <ProjectDes
                    appName="Chamber Media MVP"
                    appHeader={ChamberMVPHeader}
                    appScreenshot={ChamberMVPPage}
                    appGif={ChamberMVPGif}
                    frameLanguages="Built in Unbounce"
                    appDescription="Created to show what is offered in the MVP package offered by Chamber Media and show potential clients what can be done for them and the benefits that come with."
                    appHistory="The goal of this page was to illustrate one of the many packages offered by Chamber Media in the realm of digital media and advertising and generate leads. Case studies and everything included in the package was added to help individuals understand the benefit of the MVP package."
                    appFuture=""
                />
            }
            
            {window.location.pathname === "/portfolio/life-seasons-urinari-x" &&
                <ProjectOpt
                    appName="LifeSeasons Urinari-X"
                    appHeader={LifeSeasonsHeader}
                    appScreenshot={LifeSeasonsPage}
                    appGif={LifeSeasonsGif}
                    frameLanguages="Built in Unbounce"
                    appDescription="Built and optimized to provide the necessary information on LifeSeasons Urinari-X product and the urinary tract support it can provide those who use it."
                    appHistory="Through multiple rounds of A/B testing we worked to optimize the content and layout of this page. We worked to optimize the content to best illustrate the contents of Urinari-X and the benefits that can come from using it. Additionally, we worked to ensure that individuals could see the savings that they would get if purchasing a monthly shipment or a package of 3."
                    appFuture=""
                />
            }

            {window.location.pathname === "/portfolio/capstone-payment-solutions" &&
                <ProjectOpt
                    appName="Capstone Payment Solutions"
                    appHeader={CapstoneHeader}
                    appScreenshot={CapstonePage}
                    appGif={CapstoneGif}
                    frameLanguages="Built in Unbounce"
                    appDescription="Optimized and designed to generate leads by showing businesses the payment solutions that Capstone can offer and the benefits that come with those solutions."
                    appHistory="With Capstone Payment Solutions being new to the realm of payment processing services our goal with this page was to generate leads for potential clients by showing what set Capstone apart from other payment processing services and the various offerings that they had available."
                    appFuture=""
                />
            }

            {window.location.pathname === "/portfolio/access-heating" &&
                <ProjectOpt
                    appName="Access Heating &amp; Air"
                    appHeader={AccessHeader}
                    appScreenshot={AccessPage}
                    appGif={AccessGif}
                    frameLanguages="Built in Unbounce"
                    appDescription="Optimized to provide information on the services provided by Access Heating &amp; Air in a condensced format to help generate leads for interested clients."
                    appHistory="With the number of services that Access Heating &amp; Air offers we wanted to provide enough information on all of the offerings on this page in a condensed form in order to generate leads for consultations."
                    appFuture=""
                />
            }

            {window.location.pathname === "/portfolio/chamber-media-cro" &&
                <ProjectOpt
                    appName="Chamber Media CRO"
                    appHeader={ChamberCROHeader}
                    appScreenshot={ChamberCROPage}
                    appGif={ChamberCROGif}
                    frameLanguages="Built in Unbounce"
                    appDescription="Designed and optimized to provide information and case studies on what Chamber Media offers as part of its conversion rate optimization package in order to generate leads."
                    appHistory="With the number of services offered by Chabmer Media, and Conversion Rate Optimization being a fairly new offering, we wanted to make people aware of how we could help them with their CRO needs. Through case studies and information on the process and what exactly was offered we wanted to get new clients looking for CRO help as well as generate leads."
                    appFuture=""
                />
            }

            {window.location.pathname === "/portfolio/sling-shot" &&
                <ProjectOpt
                    appName="Mark Bell Sling Shot"
                    appHeader={SlingShotHeader}
                    appScreenshot={SlingShotPage}
                    appGif={SlingShotGif}
                    frameLanguages="Built in Unbounce"
                    appDescription="Built to optimize and improve conversion rates from social media ad traffic by providing comparisons between the different Sling Shots and the benefits that come with."
                    appHistory="With ad and conversion performance declining the goal of this page was to improve and increase both. Our main concern with why the performance was declining was that individuals did not know which Sling Shot they should buy and so with that we wanted to provide a comparison on this page to provide individuals with the necessary information that was easy to understand and help them choose the right one for them."
                    appFuture=""
                />
            }

            {window.location.pathname === "/portfolio/sun-shrimp" &&
                <ProjectOpt
                    appName="Sun Shrimp"
                    appHeader={SunShrimpHeader}
                    appScreenshot={SunShrimpPage}
                    appGif={SunShrimpGif}
                    frameLanguages="Built in Unbounce"
                    appDescription="Created to help increase sales of Sun Shrimp's most popular offerings by illustrating the things that set Sun Shrimp apart from their competitors and why you should buy their shrimp."
                    appHistory="With ad and conversion performance struggling and a desire to increase conversion rates and purchase the goal of this page was to try and increase the key performance indicators that the client was looking for. Featuring the key factors that set Sun Shrimp aside from other shrimp distributors and including only the top selling items we wanted to optimize and improve conversions and purchases."
                    appFuture=""
                />
            }

        </main >
    )
}

export default ProjectPage;