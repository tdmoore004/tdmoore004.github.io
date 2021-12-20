import React, { useEffect } from "react";

// Importing style sheet for page.
import "./About.css"

// Importing profile picture.
import profilePicDesktop from "../assets/images/other/profilepic-philippines-0015-home.jpg";
import profilePicMobile from "../assets/images/other/profilepic-philippines-0015-mobile-home.jpg";
import whoIAmOverlay from "../assets/images/other/who-i-am-what-i-do-overlay.png"
import whoIAmOverlayMobile from "../assets/images/other/who-i-am-what-i-do-overlay-mobile.png"
// import whatIDoOverlayMobile from "../assets/images/other/what-i-do-home-overlay-mobile.png"
// import whatIDoOverlayDesktop from "../assets/images/other/what-i-do-home-overlay.png"
import uxDesignHeader from "../assets/images/headers/ux-design-header.png"
import croHeader from "../assets/images/headers/cro-header.png"
import developerHeader from "../assets/images/headers/full-stack-web-developer-header.png"
import uxDesignHeaderMobile from "../assets/images/headers/ux-design-header-mobile.png"
import croHeaderMobile from "../assets/images/headers/cro-header-mobile.png"
import developerHeaderMobile from "../assets/images/headers/full-stack-web-developer-header-mobile.png"
// import mtnLogo from "../assets/images/logos/mtn-logo-white.png"
// import codingLanguagesMobile from "../assets/images/logos/coding-languages-mobile.png"
import designLogo from "../assets/images/logos/design-logo.png"
import developtmentLogo from "../assets/images/logos/development-logo.png"
import optimizationLogo from "../assets/images/logos/optimization-logo.png"
import checkMark from "../assets/images/other/check.png"

// Constant for rendering About page content.
const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        window.addEventListener("scroll", handleOverlayTransition);
        return () => {
            window.removeEventListener("scroll", handleOverlayTransition);
        };
    });

    let handleOverlayTransition = () => {

        let whoIAmSectionHeightFourth = document.getElementById("profile-pic-about").scrollHeight / 6;

        // Fading in and out about "Who I Am" heading
        if (window.scrollY < whoIAmSectionHeightFourth) {
            document.getElementById("portfolio-overlay").style.opacity = 1;
            document.getElementById("portfolio-overlay").style.opacity = 1;
        } else if (window.scrollY > whoIAmSectionHeightFourth && window.scrollY < (whoIAmSectionHeightFourth * 2)) {
            document.getElementById("portfolio-overlay").style.opacity = 1 - ((window.scrollY - whoIAmSectionHeightFourth) / ((whoIAmSectionHeightFourth * 2) - whoIAmSectionHeightFourth));
            document.getElementById("portfolio-overlay").style.opacity = 1 - ((window.scrollY - whoIAmSectionHeightFourth) / ((whoIAmSectionHeightFourth * 2) - whoIAmSectionHeightFourth));
        } else if (window.scrollY > (whoIAmSectionHeightFourth * 2)) {
            document.getElementById("portfolio-overlay").style.opacity = 0;
            document.getElementById("portfolio-overlay").style.opacity = 0;
        }
    }

    return (
        <main>

            <section id="profile-pic-about" className="profile-pic-about">

                <section className="portgolio-bg-main"></section>

                <section id="portfolio-overlay" className="portfolio-overlay">

                    <img id="who-i-am-what-i-do-overlay-desktop" className="who-i-am-overlay desktop" src={whoIAmOverlay} alt="Tanner Moore–Who I Am" loading="lazy" />

                    <img id="who-i-am-what-i-do-overlay-mobile" className="who-i-am-overlay mobile" src={whoIAmOverlayMobile} alt="Tanner Moore–Who I Am" loading="lazy" />

                </section>

                <img className="profilePic desktop hidden" src={profilePicDesktop} alt="Tanner Moore–Who I Am" loading="lazy" />
                <img className="profilePic mobile hidden" src={profilePicMobile} alt="Tanner Moore–Who I Am" loading="lazy" />

                <h1 className="hidden-header">Who I Am</h1>

            </section>

            <section className="card grid-container grid-x align-center about">

                <section className="card-section">

                    <section className="grid-x headline">

                        <h2 className="hidden-header">User Experience Design</h2>

                        {/* Design Headline. */}
                        <section className="cell medium-8">
                            <img className="about-header" src={uxDesignHeader} alt="User Experience Design" loading="lazy" />
                            <img className="about-header-mobile" src={uxDesignHeaderMobile} alt="User Experience Design" loading="lazy" />
                            <ul className="card-section aboutMe design">
                                <img className="about-check" src={checkMark} alt="Checkmark" loading="lazy" />
                                <p className="aboutMe-bullet">Knowledge of general design principles to ensure a pleasant experience for users.</p>
                                <img className="about-check" src={checkMark} alt="Checkmark" loading="lazy" />
                                <p className="aboutMe-bullet">Capable of combining the creative and analytical sides of user eperience design.</p>
                                <img className="about-check" src={checkMark} alt="Checkmark" loading="lazy" />
                                <p className="aboutMe-bullet">Experienced with a variety of web design tool, technologies, and systems.</p>
                            </ul>
                        </section>

                        <section className="cell medium-4 mtnLogo">
                            <img className="mtnLogo" src={designLogo} alt="Web Design Icon" loading="lazy" />
                        </section>

                    </section>

                    <section className="grid-x headline">

                        <section className="cell medium-4 codingLanguages top">
                            <img className="codingLanguagesTop" src={developtmentLogo} alt="Web Development Icon" loading="lazy" />
                        </section>

                        <h2 className="hidden-header">Full-Stack Web Developer</h2>

                        {/* Develop Headline. */}
                        <section className="cell medium-8">
                            <img className="about-header" src={developerHeader} alt="Web Development" loading="lazy" />
                            <img className="about-header-mobile" src={developerHeaderMobile} alt="Web Development" loading="lazy" />
                            <ul className="card-section aboutMe develop">
                                <img className="about-check" src={checkMark} alt="Checkmark" loading="lazy" />
                                <p className="aboutMe-bullet">Experienced with various web development languages, frameworks, and technologies.</p>
                                <img className="about-check" src={checkMark} alt="Checkmark" loading="lazy" />
                                <p className="aboutMe-bullet">HTML, CSS, JavaScript, React, Express.js, Mongoose, Sequelize, and more.</p>
                                <img className="about-check" src={checkMark} alt="Checkmark" loading="lazy" />
                                <p className="aboutMe-bullet">Able to implement web designs and develop a polished and responsive website.</p>
                            </ul>
                        </section>

                        <section className="cell medium-4 codingLanguages bottom">
                            <img className="codingLanguagesBottom" src={developtmentLogo} alt="Web Development Icon" loading="lazy" />
                        </section>

                    </section>

                    <section className="grid-x headline">

                        <h2 className="hidden-header">Conversion Rate Optimization</h2>

                        {/* Design Headline. */}
                        <section className="cell medium-8">
                            <img className="about-header" src={croHeader} alt="Conversion Rate Optimization" loading="lazy" />
                            <img className="about-header-mobile" src={croHeaderMobile} alt="Conversion Rate Optimization" loading="lazy" />
                            <ul className="card-section aboutMe design">
                                <img className="about-check" src={checkMark} alt="Checkmark" loading="lazy" />
                                <p className="aboutMe-bullet">Knowledge of user experience design principles to best optimize for conversions.</p>
                                <img className="about-check" src={checkMark} alt="Checkmark" loading="lazy" />
                                <p className="aboutMe-bullet">Experienced with A/B testing to determine best areas for conversion optimizations.</p>
                                <img className="about-check" src={checkMark} alt="Checkmark" loading="lazy" />
                                <p className="aboutMe-bullet">Able to utilize conversion tracking tools to understand entire conversion funnel.</p>
                            </ul>
                        </section>

                        <section className="cell medium-4 mtnLogo">
                            <img className="mtnLogo" src={optimizationLogo} alt="Web Optimizations Icon" loading="lazy" />
                        </section>

                    </section>

                    {/* <p className="aboutMe">Working my way through college, I earned a Bachelor of Science in communication, with a minor in multi-disciplinary design from the University of Utah, later returning for a certificate in full-stack web development. I believe that my passion for, and experience with design, digital media and web development make me a valuable asset in a variety of areas.</p> */}

                </section>

            </section>

        </main>
    )
}

export default About;