import React from "react";
import { Link } from "react-router-dom";

// Importing style sheet for page.
import "./Home.css"

// Importing profile picture.
import profilePicDesktop from "../assets/images/other/profilepic-philippines-0015-home.jpg";
import profilePicMobile from "../assets/images/other/profilepic-philippines-0015-mobile-home.jpg";
import whatIDoDesktop from "../assets/images/other/what-i-do-home.png"
import whatIDoMobile from "../assets/images/other/what-i-do-home-mobile.png"
import webDevelopmentWork from "../assets/images/other/what-i-do-web-development.png"
import letsConnect from "../assets/images/other/contact-me-lets-connect.png"
import codingLanguagesMobile from "../assets/images/other/coding-languages-home.png"
import mtnLogo from "../assets/images/other/mtn-logo-home.png"

// Constant for rendering About page content.
const Home = () => {
    return (
        <main>

            <h1 className="hidden-header">Tanner Moore: Who I Am &amp; What I Do.</h1>

            <section className="card grid-container grid-x align-center home">

                <section className="grid-x grid-margin-x homeMenu">
                    {/* Home menu. */}
                    <div className="cell home">
                        <div className="card web-dev portfolio">
                            <img className="web-dev-photo desktop" src={profilePicDesktop} alt="Tanner Moore–Who I Am"></img>
                            <img className="web-dev-photo mobile" src={profilePicMobile} alt="Tanner Moore–Who I Am" loading="lazy" />
                            <Link to="/about" className="home-overlay about">
                                <img className="web-dev-photo desktop" src={whatIDoDesktop} alt="Creative Design Thinker &amp; Full-Stack Developer"></img>
                                <img className="web-dev-photo mobile" src={whatIDoMobile} alt="Creative Design Thinker &amp; Full-Stack Developer"></img>
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="grid-x grid-margin-x medium-up-2 homeMenu">
                    <div className="cell home">
                        <div className="card web-dev portfolio">
                            <img className="web-dev-photo-home" src={codingLanguagesMobile} alt="What I Do–Coding Languages"></img>
                            <Link to="/portfolio" className="home-overlay work">
                                <img className="web-dev-photo desktop" src={webDevelopmentWork} alt="Web Design &amp; Development"></img>
                            </Link>
                        </div>
                    </div>
                    <div className="cell home">
                        <div className="card web-dev portfolio">
                            <img className="web-dev-photo-home" src={mtnLogo} alt="Get in Touch–Mountain Logo"></img>
                            <Link to="/contact" className="home-overlay connect">
                                <img className="web-dev-photo desktop" src={letsConnect} alt="Let's Connect"></img>
                            </Link>
                        </div>
                    </div>
                </section>

            </section>

        </main>
    )
}

export default Home;