import React from "react";

// Importing style sheet for page.
import "./About.css"

// Importing profile picture.
import profilePicDesktop from "../assets/images/other/profilepic-philippines-0015-home.jpg";
import profilePicMobile from "../assets/images/other/profilepic-philippines-0015-mobile-home.jpg";
import creativeHeader from "../assets/images/headers/creative-design-thinker-header.png"
import developerHeader from "../assets/images/headers/full-stack-web-developer-header.png"
import mtnLogo from "../assets/images/logos/mtn-logo-white.png"
import codingLanguagesMobile from "../assets/images/logos/coding-languages-mobile.png"

// Constant for rendering About page content.
const About = () => {
    return (
        <main>

            {/* Profile pictures (desktop and mobile) */}
            <img className="profilePic desktop fixed" src={profilePicDesktop} alt="Tanner Moore–Who I Am" loading="lazy" />
            <img className="profilePic mobile fixed" src={profilePicMobile} alt="Tanner Moore–Who I Am" loading="lazy" />

            {/* Hidden profile pictures for correct spacing */}
            <img className="profilePic desktop hidden" src={profilePicDesktop} alt="Tanner Moore–Who I Am" loading="lazy" />
            <img className="profilePic mobile hidden" src={profilePicMobile} alt="Tanner Moore–Who I Am" loading="lazy" />

            <h1 className="hidden-header">Who I Am</h1>
            
            <section className="card grid-container grid-x align-center about">

                <section className="card-section">

                    <section className="grid-x headline">

                        <h2 className="hidden-header">Creative Design Thinker</h2>

                        {/* Design Headline. */}
                        <section className="cell medium-8">
                            <img className="about-header" src={creativeHeader} alt="Creative Design Thinker" loading="lazy" />
                            <p className="card-section aboutMe design">
                                Capable of designing a professional, cutting edge website with a clean and friendly user experience and interface that will attract and inform your clients, no matter the products or services that you offer, through design processes, practices and principles.
                            </p>
                        </section>

                        <section className="cell medium-4 mtnLogo">
                            <img className="mtnLogo" src={mtnLogo} alt="Mountain Logo" loading="lazy" />
                        </section>

                    </section>

                    <section className="grid-x headline">

                        <section className="cell medium-4 codingLanguages top">
                            <img className="codingLanguagesTop" src={codingLanguagesMobile} alt="Coding Languages" loading="lazy" />
                        </section>

                        <h2 className="hidden-header">Full-Stack Web Developer</h2>

                        {/* Develop Headline. */}
                        <section className="cell medium-8">
                            <img className="about-header" src={developerHeader} alt="Web Development" loading="lazy" />
                            <p className="card-section aboutMe develop">
                                Experienced with development languages, frameworks, and technologies such as HTML, CSS, JavaScript, React, Foundation CSS, Express.js, Mongoose, Sequelize, and more with the ability to implement designs and develop a polished and responsive website.
                            </p>
                        </section>

                        <section className="cell medium-4 codingLanguages bottom">
                            <img className="codingLanguagesBottom" src={codingLanguagesMobile} alt="Coding Languages" loading="lazy" />
                        </section>
                        
                    </section>

                    <p className="aboutMe">Working my way through college, I earned a Bachelor of Science in communication, with a minor in multi-disciplinary design from the University of Utah, later returning for a certificate in full-stack web development. I believe that my passion for, and experience with design, digital media and web development make me a valuable asset in a variety of areas.</p>

                </section>

            </section>

        </main>
    )
}

export default About;