import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Importing style sheet for page.
import "./Home.css"

// Importing headers for intro paragraph.
import introHeader from "../assets/images/headers/main-header-who-i-am.png"
import introHeaderMobile from "../assets/images/headers/main-header-who-i-am-mobile-1.png"
import exploreMoore from "../assets/images/headers/explore-moore.png"
import jobTitle from "../assets/images/headers/position.png"
import companyName from "../assets/images/headers/company.png"

// Importing for description section.
import uxDesignHeader from "../assets/images/headers/ux-design-header.png"
import croHeader from "../assets/images/headers/cro-header.png"
import developerHeader from "../assets/images/headers/full-stack-web-developer-header.png"
import uxDesignHeaderMobile from "../assets/images/headers/ux-design-header-mobile.png"
import croHeaderMobile from "../assets/images/headers/cro-header-mobile.png"
import developerHeaderMobile from "../assets/images/headers/full-stack-web-developer-header-mobile.png"
import exploreMooreSection from "../assets/images/headers/explore-moore-sections.png"
import checkMark from "../assets/images/other/check.png"

// Importing Project Teaser component and necessary resources.
import ProjectTeaserHome from "../components/ProjectTeaserHome.jsx"
import BusinessQuestHeader from "../assets/images/headers/ultimate-business-quest-header.png"
import BusinessQuestGif from "../assets/images/project-screenshots/ultimate-business-quest-screenshot.jpg"
import BusinessQuestGifMobile from "../assets/images/project-screenshots/ultimate-business-quest-screenshot-mobile.jpg"
import UrinariXHeader from "../assets/images/headers/life-seasons-urinari-x-header.png"
import UrinariXGif from "../assets/images/project-screenshots/life-seasons-urinari-x-screenshot.jpg"
import UrinariXGifMobile from "../assets/images/project-screenshots/life-seasons-urinari-x-screenshot-mobile.jpg"
import TravelerHeader from "../assets/images/headers/traveler-header.png"
import TravelerGif from "../assets/images/project-screenshots/traveler-screenshot.jpg"
import TravelerGifMobile from "../assets/images/project-screenshots/traveler-screenshot-mobile.jpg"

// Constant for rendering About page content.
const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        window.addEventListener("scroll", handleOverlayTransition);
        return () => {
            window.removeEventListener("scroll", handleOverlayTransition);
        };
    });

    let handleOverlayTransition = () => {

        let whoIAmSectionHeightFourth = document.getElementById("profile-pic-home").scrollHeight / 6;

        // Fading in and out about "Who I Am" heading
        if (window.scrollY < whoIAmSectionHeightFourth) {
            document.getElementById("portfolio-overlay-home").style.opacity = 1;
            document.getElementById("portfolio-overlay-home").style.opacity = 1;
        } else if (window.scrollY > whoIAmSectionHeightFourth && window.scrollY < (whoIAmSectionHeightFourth * 2)) {
            document.getElementById("portfolio-overlay-home").style.opacity = 1 - ((window.scrollY - whoIAmSectionHeightFourth) / ((whoIAmSectionHeightFourth * 2) - whoIAmSectionHeightFourth));
            document.getElementById("portfolio-overlay-home").style.opacity = 1 - ((window.scrollY - whoIAmSectionHeightFourth) / ((whoIAmSectionHeightFourth * 2) - whoIAmSectionHeightFourth));
        } else if (window.scrollY > (whoIAmSectionHeightFourth * 2)) {
            document.getElementById("portfolio-overlay-home").style.opacity = 0;
            document.getElementById("portfolio-overlay-home").style.opacity = 0;
        }
    }

    return (
        <main>
            
            <section className="portfolio-bg-home"></section>

            <section id="profile-pic-home" className="profile-pic-home">

                <section id="portfolio-overlay-home" className="portfolio-overlay">

                    <section className="intro-overlay">
                        <img className="intro-heading" src={introHeader} alt="Designer. Optimizer. Developer." />
                        <img className="intro-heading-mobile" src={introHeaderMobile} alt="Designer. Optimizer. Developer." />
                        <p className="intro-paragraph">Hacking at and creating top notch user experiences that elevate conversion rate.</p>
                        <p className="intro-paragraph">
                            <img className="job-title" src={jobTitle} alt="UX/CRO Specialist"/>
                            on the team at&nbsp;
                            <img className="company-name" src={companyName} alt="Chamber Media"/>
                        </p>
                        <p className="intro-paragraph">Simple man trying to make his way in the world.</p>
                        <Link to="#explore-moore">
                            <img className="explore-moore" src={exploreMoore} alt="Explore Moore..." />
                        </Link>
                    </section>

                </section>
                
                <h1 className="hidden-header">Who I Am</h1>

            </section>

            <section id="explore-moore" className="card grid-container grid-x about">

                <section className="card-section">

                    <section className="grid-x headline">

                        <h2 className="hidden-header">User Experience Design</h2>

                        {/* Design Headline. */}
                        <section className="cell large-7">
                            <img className="about-header" src={uxDesignHeader} alt="User Experience Design" loading="lazy" />
                            <img className="about-header-mobile" src={uxDesignHeaderMobile} alt="User Experience Design" loading="lazy" />
                            <ul className="card-section aboutMe design">
                                <img className="about-check" src={checkMark} alt="Checkmark" loading="lazy" />
                                <p className="aboutMe-bullet">Understanding of design principles necessary to ensure a pleasant experience for users.</p>
                                <img className="about-check" src={checkMark} alt="Checkmark" loading="lazy" />
                                <p className="aboutMe-bullet">Capable of combining the creative and analytical sides of user eperience design.</p>
                                <img className="about-check" src={checkMark} alt="Checkmark" loading="lazy" />
                                <p className="aboutMe-bullet">Experienced with a variety of web design tool, technologies, and systems.</p>
                            </ul>
                            <Link to="/portfolio/design">
                                <img className="explore-moore-section" src={exploreMooreSection} alt="Explore Moore..." />
                            </Link>
                        </section>

                        <section className="cell large-5 project-teaser">
                            <ProjectTeaserHome
                                appName="Ultimate Business Quest"
                                projectPage="/portfolio/ultimate-business-quest"
                                appLink="https://shrouded-brushlands-11149.herokuapp.com/"
                                appID="ultimate-business-quest"
                                appHeader={BusinessQuestHeader}
                                appGif={BusinessQuestGif}
                                gifAlt="Ultimate Business Quest Screenshot"
                                frameLanguages="Unbounce"
                                appDescription="Take the worry and stress out of traveling with Traveler."
                            />
                        </section>

                        <section className="cell large-5 project-teaser mobile">
                            <ProjectTeaserHome
                                appName="Traveler"
                                projectPage="/portfolio/traveler"
                                appLink="https://shrouded-brushlands-11149.herokuapp.com/"
                                appID="traveler"
                                appHeader={BusinessQuestHeader}
                                appGif={BusinessQuestGifMobile}
                                gifAlt="Traveler Screen Recording"
                                frameLanguages="HTML | CSS | JavaScript | React | Foundation CSS | Node.js | Express.js | Mongoose | React Big Calendar | Passport | Bcrypt"
                                appDescription="Take the worry and stress out of traveling with Traveler."
                            />
                        </section>

                    </section>

                    <section className="grid-x headline">

                        <section className="cell large-5 project-teaser top">
                            <ProjectTeaserHome
                                appName="Traveler"
                                projectPage="/portfolio/traveler"
                                appLink="https://shrouded-brushlands-11149.herokuapp.com/"
                                appID="traveler"
                                appHeader={UrinariXHeader}
                                appGif={UrinariXGif}
                                gifAlt="Traveler Screen Recording"
                                frameLanguages="HTML | CSS | JavaScript | React | Foundation CSS | Node.js | Express.js | Mongoose | React Big Calendar | Passport | Bcrypt"
                                appDescription="Avoid figuring out the right antibiotics for urinary tract support."
                            />
                        </section>

                        <h2 className="hidden-header">Conversion Rate Optimization</h2>

                        {/* Conversion Headline. */}
                        <section className="cell large-7 cro">
                            <img className="about-header" src={croHeader} alt="Conversion Rate Optimization" loading="lazy" />
                            <img className="about-header-mobile" src={croHeaderMobile} alt="Conversion Rate Optimization" loading="lazy" />
                            <ul className="card-section aboutMe develop">
                                <img className="about-check" src={checkMark} alt="Checkmark" loading="lazy" />
                                <p className="aboutMe-bullet">Knowledge of user experience design principles to best optimize for conversions.</p>
                                <img className="about-check" src={checkMark} alt="Checkmark" loading="lazy" />
                                <p className="aboutMe-bullet">Experienced with A/B testing to determine best areas for conversion optimizations.</p>
                                <img className="about-check" src={checkMark} alt="Checkmark" loading="lazy" />
                                <p className="aboutMe-bullet">Able to utilize conversion tracking tools to understand entire conversion funnel.</p>
                            </ul>
                            <Link to="/portfolio/optimize">
                                <img className="explore-moore-section" src={exploreMooreSection} alt="Explore Moore..." />
                            </Link>
                        </section>

                        <section className="cell large-5 project-teaser bottom">
                            <ProjectTeaserHome
                                appName="Traveler"
                                projectPage="/portfolio/traveler"
                                appLink="https://shrouded-brushlands-11149.herokuapp.com/"
                                appID="traveler"
                                appHeader={UrinariXHeader}
                                appGif={UrinariXGif}
                                gifAlt="Traveler Screen Recording"
                                frameLanguages="HTML | CSS | JavaScript | React | Foundation CSS | Node.js | Express.js | Mongoose | React Big Calendar | Passport | Bcrypt"
                                appDescription="Avoid figuring out the right antibiotics for urinary tract support."
                            />
                        </section>

                        <section className="cell large-5 project-teaser mobile">
                            <ProjectTeaserHome
                                appName="Traveler"
                                projectPage="/portfolio/traveler"
                                appLink="https://shrouded-brushlands-11149.herokuapp.com/"
                                appID="traveler"
                                appHeader={UrinariXHeader}
                                appGif={UrinariXGifMobile}
                                gifAlt="Traveler Screen Recording"
                                frameLanguages="HTML | CSS | JavaScript | React | Foundation CSS | Node.js | Express.js | Mongoose | React Big Calendar | Passport | Bcrypt"
                                appDescription="Avoid figuring out the right antibiotics for urinary tract support."
                            />
                        </section>

                    </section>

                    <section className="grid-x headline">

                        <h2 className="hidden-header">Full-Stack Web Development</h2>

                        {/* Design Headline. */}
                        <section className="cell large-7">
                            <img className="about-header" src={developerHeader} alt="Full-Stack Web Developer" loading="lazy" />
                            <img className="about-header-mobile" src={developerHeaderMobile} alt="Full-Stack Web Developer" loading="lazy" />
                            <ul className="card-section aboutMe design">
                                <img className="about-check" src={checkMark} alt="Checkmark" loading="lazy" />
                                <p className="aboutMe-bullet">Experienced with various web development languages, frameworks, and technologies.</p>
                                <img className="about-check" src={checkMark} alt="Checkmark" loading="lazy" />
                                <p className="aboutMe-bullet">HTML, CSS, JavaScript, React, Express.js, Mongoose, Sequelize, and more.</p>
                                <img className="about-check" src={checkMark} alt="Checkmark" loading="lazy" />
                                <p className="aboutMe-bullet">Able to implement web designs and develop a polished and responsive website.</p>
                            </ul>
                            <Link to="/portfolio/develop">
                                <img className="explore-moore-section" src={exploreMooreSection} alt="Explore Moore..." />
                            </Link>
                        </section>

                        <section className="cell large-5 project-teaser">
                            <ProjectTeaserHome
                                appName="Traveler"
                                projectPage="/portfolio/traveler"
                                appLink="https://shrouded-brushlands-11149.herokuapp.com/"
                                appID="traveler"
                                appHeader={TravelerHeader}
                                appGif={TravelerGif}
                                gifAlt="Traveler Screen Recording"
                                frameLanguages="HTML | CSS | JavaScript | React | Foundation CSS | Node.js | Express.js | Mongoose | React Big Calendar | Passport | Bcrypt"
                                appDescription="Take the worry and stress out of traveling with Traveler."
                            />
                        </section>

                        <section className="cell large-5 project-teaser mobile">
                            <ProjectTeaserHome
                                appName="Traveler"
                                projectPage="/portfolio/traveler"
                                appLink="https://shrouded-brushlands-11149.herokuapp.com/"
                                appID="traveler"
                                appHeader={TravelerHeader}
                                appGif={TravelerGifMobile}
                                gifAlt="Traveler Screen Recording"
                                frameLanguages="HTML | CSS | JavaScript | React | Foundation CSS | Node.js | Express.js | Mongoose | React Big Calendar | Passport | Bcrypt"
                                appDescription="Take the worry and stress out of traveling with Traveler."
                            />
                        </section>

                    </section>

                </section>

            </section>

        </main>
    )
}

export default Home;