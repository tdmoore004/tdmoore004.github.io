import React from "react";

// Importing Project component.
import Project from "../components/Project.jsx"

// Importing screen recording gifs for each featured project.
import FurLodgeGif from "../assets/images/furlodge-screen-recording.gif";
import BoredomBusterGif from "../assets/images/boredom-buster-screen-recording.gif";
import DevourBurgerGif from "../assets/images/devour-da-burger-screen-recording.gif";
import BudgetGif from "../assets/images/budget-tracker-screen-recording.gif";
import NoteTakerGif from "../assets/images/express-note-taker-screen-recording.gif"
import FitnessTrackerGif from "../assets/images/fitness-tracker-screen-recording.gif"

const Portfolio = () => {
    return (
        <main className="card grid-container grid-x align-center portfolio">

            {/* Page Header */}
            <h3 className="card-divider">
                Portfolio
            </h3>

            {/* Project Highlights */}
            <section className="card-section">
                <div className="grid-x grid-margin-x medium-up-2">
                    <Project
                        appLink="https://glacial-gorge-49813.herokuapp.com/"
                        appName="FurLodge"
                        appGif={FurLodgeGif}
                        gifAlt="FurLodge Screen Recording"
                        githubLink="https://github.com/tdmoore004/fur-lodge"
                        appDescription="Do you have a fur baby that you want the best personalized care for while you are out of town or busy? Check out FurLodge to find fellow fur baby lovers and owners who are willing to watch your beloved pet and give them the same personalized care you want for them."
                    />
                    <Project
                        appLink="https://tdmoore004.github.io/boredom-buster/"
                        appName="Boredom Buster"
                        appGif={BoredomBusterGif}
                        gifAlt="Boredom Buster Screen Recording"
                        githubLink="https://github.com/tdmoore004/boredom-buster"
                        appDescription="If you are bored and looking for something to do, Boredom Buster will help you quench that thirst for action. Use Boredom Buster to generate a random, or more specific, activity that you can do and save them for later if you need to keep your boredom organized."
                    />
                    <Project
                        appLink="https://ancient-garden-46972.herokuapp.com/"
                        appName="Devour Da Burger!"
                        appGif={DevourBurgerGif}
                        gifAlt="Devour Da Burger Screen Recording"
                        githubLink="https://github.com/tdmoore004/devour-da-burger"
                        appDescription="Do you love devouring all sorts of different burgers? Utilize Devour Da Burger to keep a list of any burger that you want to devour and mark of the ones that you have already eaten moving them to the 'devoured' list."
                    />
                    <Project
                        appLink="https://aqueous-plains-59839.herokuapp.com/"
                        appName="Progressive Budget Offline"
                        appGif={BudgetGif}
                        gifAlt="Progressive Budget Screen Recording"
                        githubLink="https://github.com/tdmoore004/progressive-budget-offline"
                        appDescription="Do you want to keep track of the money that you are spending but are not always online to do it? Well worry no more! With the Progressive Budget Offline app you can track all of your transactions whether you are connected to the internet or not."
                    />
                    <Project
                        appLink="https://floating-sands-65820.herokuapp.com/"
                        appName="Express Note Taker"
                        appGif={NoteTakerGif}
                        gifAlt="Express Note Taker Screen Recording"
                        githubLink="https://github.com/tdmoore004/express-note-taker"
                        appDescription="Need to keep track of your thoughts and feelings regarding different topics? Use the Express Note Taker to log those thoughts and feelings and save them for later. Whether it be notes on a class lecture, a breakthrough business idea that you had or a rough draft on a speech that you have to give."
                    />
                    <Project
                        appLink="https://cryptic-hollows-98760.herokuapp.com/"
                        appName="Fitness Tracker"
                        appGif={FitnessTrackerGif}
                        gifAlt="Fitness Tracker Screen Recording"
                        githubLink="https://github.com/tdmoore004/workout-tracker"
                        appDescription="Are you a physically active individual who wants to keep track of your fitness activity? Utilize this Fitness Tracker to log both your cardio and resistance workouts. Look back at your physical fitness and see the progress you are making."
                    />
                </div>
            </section>
            
        </main>
    )
}

export default Portfolio;