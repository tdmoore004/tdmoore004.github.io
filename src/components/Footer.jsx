import React from "react";

// Importing style sheet for page.
import "./Footer.css"

// Importing Tanner Moore Productions logo.
import Logo from "../assets/images/logos/tannermoore_productions.png";

// Importing Font Awesome icons.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons"


const Footer = () => {
    return (
        <footer className="callout large secondary">

            {/* <section className="topFooter grid-container grid-x">

                <nav className="large-2 cell adobePortfolio">
                    <a className="adobePortfolioSmall" href="https://tannerdmoore.myportfolio.com" target="_blank" rel="noreferrer" >
                        Adobe Portfolio
                    </a>
                </nav>

                <nav className="large-10 cell adobe">
                    <a className="adobePortfolio" href="https://tannerdmoore.myportfolio.com" target="_blank" rel="noreferrer" >
                        Adobe Portfolio
                    </a>
                    <a className="educationPortfolio" href="https://tannerdmoore.myportfolio.com/work" target="_blank" rel="noreferrer" >
                        Education
                    </a>
                    <a className="professionalPortfolio" href="https://tannerdmoore.myportfolio.com/work-1" target="_blank" rel="noreferrer" >
                        Professional
                    </a>
                    <a className="studioPortfolio" href="https://tannerdmoore.myportfolio.com/work-1" target="_blank" rel="noreferrer" >
                        Studio
                    </a>
                </nav>

                <nav className="large-2 cell resume">
                    <a className="resumeLink" href="https://drive.google.com/file/d/1xrJ4oOABmqfRWVFPXkkLp7KaW7QW4MIv/view?usp=sharing" target="_blank" rel="noreferrer" >
                        Resume
                    </a>
                </nav>

            </section> */}

            <section className="bottomFooter grid-container grid-x">

                {/* Footer social icons (only shows on medium or smaller screens). */}
                <nav className="large-8 cell logo-links hidden-large">
                    <a className="footer-links" href="https://www.linkedin.com/in/tdmoore004/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon className="fab fa-linkedin-in" icon={faLinkedinIn} />
                    </a>
                    <a className="footer-links" href="https://github.com/tdmoore004" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon className="fab fa-github" icon={faGithub} />
                    </a>
                    <a className="footer-links" href="https://www.instagram.com/exploremoore004/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon className="fab fa-instagram" icon={faInstagram} />
                    </a>
                </nav>

                {/* Logo and copyright. */}
                <figure className="large-4 cell copyright">
                    <img className="footer-logo" src={Logo} alt="Tanner Moore Productions">
                    </img>
                        <figcaption className="copyright">
                            Copyright &#169; 2021 All Rights Reserved
                        </figcaption>
                </figure>

                    {/* Footer social icons (only shows on large or bigger screens). */}
                    <nav className="large-8 cell logo-links hidden-medium">
                        <a className="footer-links" href="https://www.linkedin.com/in/tdmoore004/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className="fab fa-linkedin-in" icon={faLinkedinIn} />
                        </a>
                        <a className="footer-links" href="https://github.com/tdmoore004" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className="fab fa-github" icon={faGithub} />
                        </a>
                        <a className="footer-links" href="https://www.instagram.com/exploremoore004/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className="fab fa-instagram" icon={faInstagram} />
                        </a>
                    </nav>
                    
            </section>
            
        </footer>
    )
}

export default Footer;