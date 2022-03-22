import React, { useEffect } from "react";

// Importing style sheet for page.
import "./About.css"

// Importing profile picture.
import DesignHeader from "../assets/images/headers/design-header.png"
import OptimizeHeader from "../assets/images/headers/optimize-header.png"
import DevelopHeader from "../assets/images/headers/develop-header.png"
import exploreMoore from "../assets/images/headers/explore-moore.png"

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
            document.getElementById("portfolio-overlay-about").style.opacity = 1;
            document.getElementById("portfolio-overlay-about").style.opacity = 1;
        } else if (window.scrollY > whoIAmSectionHeightFourth && window.scrollY < (whoIAmSectionHeightFourth * 2)) {
            document.getElementById("portfolio-overlay-about").style.opacity = 1 - ((window.scrollY - whoIAmSectionHeightFourth) / ((whoIAmSectionHeightFourth * 2) - whoIAmSectionHeightFourth));
            document.getElementById("portfolio-overlay-about").style.opacity = 1 - ((window.scrollY - whoIAmSectionHeightFourth) / ((whoIAmSectionHeightFourth * 2) - whoIAmSectionHeightFourth));
        } else if (window.scrollY > (whoIAmSectionHeightFourth * 2)) {
            document.getElementById("portfolio-overlay-about").style.opacity = 0;
            document.getElementById("portfolio-overlay-about").style.opacity = 0;
        }
    }

    return (
        <main>

            <section className="portfolio-bg-about"></section>

            <section id="profile-pic-about" className="profile-pic-about">

                <section id="portfolio-overlay-about" className="portfolio-overlay">

                    <section className="intro-overlay-about">
                        <p className="intro-paragraph">
                            <img className="intro-header" src={DesignHeader} alt="Designer." />
                            <p>With a passion for design, and understanding of design principles I can create and build a clean user friendly website to provide users, customers, or clients a top notch experience while getting the information that they need.</p>
                        </p>
                        <p className="intro-paragraph">
                            <img className="intro-header" src={OptimizeHeader} alt="Optimizer." />
                            <p>With experience in conversion rate optimization and user experience design I can design and optimize a website or landing page for product and service sales or lead generation or help to optimize and improve an existing site or page.</p>
                        </p>
                        <p className="intro-paragraph">
                            <img className="intro-header" src={DevelopHeader} alt="Developer." />
                            <p>With experience and understanding of full-stack web development I can work on customization and management in site builders, such as WordPress or Unbounce, or work on general building and developement.</p>
                        </p>
                        {/* <a href="#explore-moore"><img className="explore-moore" src={exploreMoore} alt="Explore Moore..." /></a> */}
                    </section>

                </section>

            </section>

        </main>
    )
}

export default About;