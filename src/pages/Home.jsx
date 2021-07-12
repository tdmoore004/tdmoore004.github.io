import React, {  } from "react";
import { Link } from "react-router-dom";

// Importing style sheet for page.
import "./Home.css";

// Importing images for home page.
// import profilePicMobile from "../assets/images/other/profilepic-philippines-0015-mobile-home.jpg";
// import whoIAmOverlayDesktop from "../assets/images/other/who-i-am-home-overlay.png"
// import whatIDoOverlayDesktop from "../assets/images/other/what-i-do-home-overlay.png"
// import whatIDoPortfolioOverlayDesktop from "../assets/images/other/what-i-do-home-overlay-portfolio.png"
import whoIAmOverlayMobile from "../assets/images/other/who-i-am-home-overlay-mobile.png"
import whatIDoOverlayMobile from "../assets/images/other/what-i-do-home-overlay-mobile.png"
import whatIDoPortfolioOverlayMobile from "../assets/images/other/what-i-do-home-overlay-portfolio-mobile.png"
// import designDevelopmentDesktop from "../assets/images/other/creative-design-thinker-full-stack-web-developer.png"
import designDevelopmentMobile from "../assets/images/other/creative-design-thinker-full-stack-web-developer-mobile.png"
// import webDevelopmentDesktop from "../assets/images/other/web-design-and-development-desktop.png"
import webDevelopmentMobile from "../assets/images/other/web-design-and-development-mobile.png"

// Constant for rendering About page content.
const Home = () => {

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //     window.addEventListener("scroll", handleOverlayTransition);
    //     // window.addEventListener("scroll", handleBackgroundPosition);
    //     // document.getElementById("design-development-overlay").addEventListener("mouseover", aboutLinkMouseOver);
    //     // document.getElementById("coding-overlay").addEventListener("mouseover", portfolioLinkMouseOver);
    //     // document.getElementById("design-development-overlay").addEventListener("mouseout", aboutLinkMouseOut);
    //     // document.getElementById("coding-overlay").addEventListener("mouseout", portfolioLinkMouseOut);
    //     return () => {
    //         window.removeEventListener("scroll", handleOverlayTransition);
    //       };
    // });

    // Function for fading in and out overlay components.
    // let handleOverlayTransition = () => {

    //     let aboutSectionHeight = document.getElementById("about-container").scrollHeight;
    //     let aboutSectionFourth = (document.getElementById("about-container").scrollHeight / 4);
    //     let codingSectionHeight = document.getElementById("portfolio-container").scrollHeight;
    //     let codingSectionFourth = (document.getElementById("portfolio-container").scrollHeight / 4);

    //     console.log(aboutSectionHeight);
    //     console.log(aboutSectionFourth);

    //     // console.log(window.scrollY);
    //     // console.log(aboutSectionFourth);
    //     // console.log(aboutSectionHeight);
    //     // console.log(codingSectionFourth);
    //     // console.log(codingSectionHeight);

    //     // Fading in and out about "Who I Am" heading
    //     if (window.scrollY < (aboutSectionHeight +(codingSectionFourth * 2))) {
    //         // document.getElementById("who-i-am-overlay").style.opacity = 0.9;
    //         document.getElementById("who-i-am-overlay-mobile").style.opacity = 0.9;
    //     } else if (window.scrollY > (aboutSectionHeight + (codingSectionFourth * 2)) && window.scrollY < (aboutSectionHeight + (codingSectionFourth * 3))) {
    //         // document.getElementById("who-i-am-overlay").style.opacity = 0.9 - ((window.scrollY - (aboutSectionHeight + (codingSectionFourth * 2))) / aboutSectionFourth);
    //         document.getElementById("who-i-am-overlay-mobile").style.opacity = 0.9 - ((window.scrollY - (aboutSectionHeight + (codingSectionFourth * 2))) / aboutSectionFourth);
    //     } else if (window.scrollY > (aboutSectionHeight + (codingSectionFourth * 3))) {
    //         // document.getElementById("who-i-am-overlay").style.opacity = 0;
    //         document.getElementById("who-i-am-overlay-mobile").style.opacity = 0;
    //     }

    //     // Fading in and out about "What I Do" heading
    //     if (window.scrollY < aboutSectionFourth) {
    //         // document.getElementById("what-i-do-overlay").style.opacity = 0.9 - (window.scrollY / aboutSectionFourth);
    //         document.getElementById("what-i-do-overlay-mobile").style.opacity = 0.9 - (window.scrollY / aboutSectionFourth);
    //     } else if (window.scrollY > aboutSectionFourth) {
    //         // document.getElementById("what-i-do-overlay").style.opacity = 0;
    //         document.getElementById("what-i-do-overlay-mobile").style.opacity = 0;
    //     }

    //     // Fading in and out Design and Development link
    //     if (window.scrollY < aboutSectionFourth) {
    //         // document.getElementById("design-development-overlay").style.opacity = window.scrollY / aboutSectionFourth;
    //         document.getElementById("design-development-overlay-mobile").style.opacity = window.scrollY / aboutSectionFourth;
    //     } else if (window.scrollY > aboutSectionFourth && window.scrollY < (aboutSectionFourth * 3)) {
    //         // document.getElementById("design-development-overlay").style.opacity = 1
    //         document.getElementById("design-development-overlay-mobile").style.opacity = 1
    //     } else if (window.scrollY > (aboutSectionFourth * 3) && window.scrollY < aboutSectionHeight) {
    //         // document.getElementById("design-development-overlay").style.opacity = 1 - ((window.scrollY - (aboutSectionFourth * 3)) / aboutSectionFourth);
    //         document.getElementById("design-development-overlay-mobile").style.opacity = 1 - ((window.scrollY - (aboutSectionFourth * 3)) / aboutSectionFourth);
    //     } else if (window.scrollY > aboutSectionHeight) {
    //         // document.getElementById("design-development-overlay").style.opacity = 0
    //         document.getElementById("design-development-overlay-mobile").style.opacity = 0
    //     }

    //     // Setting the z-index so about link is not clickable when not visible.
    //     if (window.scrollY < 5) {
    //         // document.getElementById("design-development-overlay").style.zIndex = -1;
    //         document.getElementById("design-development-overlay-mobile").style.zIndex = -1;
    //     } else if (window.scrollY > 5 && window.scrollY < aboutSectionHeight) {
    //         // document.getElementById("design-development-overlay").style.zIndex = 5;
    //         document.getElementById("design-development-overlay-mobile").style.zIndex = 5;
    //     } else if (window.scrollY > aboutSectionHeight) {
    //         // document.getElementById("design-development-overlay").style.zIndex = -1;
    //         document.getElementById("design-development-overlay-mobile").style.zIndex = -1;
    //     }

    // //     // Fading in and out portfolio "What I Do" heading
    // //     if (window.scrollY < (aboutSectionHeight + (codingSectionFourth * 3))) {
    // //         document.getElementById("what-i-do-portfolio-overlay").style.opacity = 0;
    // //         document.getElementById("what-i-do-portfolio-overlay-mobile").style.opacity = 0;
    // //     } else if (window.scrollY > (aboutSectionHeight + (codingSectionFourth * 3)) && window.scrollY < ((codingSectionHeight * 2) - 25)) {
    // //         document.getElementById("what-i-do-portfolio-overlay").style.opacity = ((window.scrollY - (aboutSectionHeight + (codingSectionFourth * 3))) / codingSectionFourth);
    // //         document.getElementById("what-i-do-portfolio-overlay-mobile").style.opacity = ((window.scrollY - (aboutSectionHeight + (codingSectionFourth * 3))) / codingSectionFourth);
    // //         document.getElementById("what-i-do-portfolio-overlay").style.zIndex = 3;
    // //         document.getElementById("what-i-do-portfolio-overlay-mobile").style.zIndex = 3;
    // //     } else if (window.scrollY > ((codingSectionHeight * 2) - 25)) {
    // //         document.getElementById("what-i-do-portfolio-overlay").style.opacity = 0.9;
    // //         document.getElementById("what-i-do-portfolio-overlay-mobile").style.opacity = 0.9;
    // //         document.getElementById("what-i-do-portfolio-overlay").style.zIndex = 3;
    // //         document.getElementById("what-i-do-portfolio-overlay-mobile").style.zIndex = 3;
    // //     }

    // //     // Fading in and out "Web Development" link
    // //     if (window.scrollY < (codingSectionHeight * 2)) {
    // //         document.getElementById("coding-overlay").style.opacity = 0;
    // //         document.getElementById("coding-overlay-mobile").style.opacity = 0;
    // //     } else if (window.scrollY > (codingSectionHeight * 2) && window.scrollY < ((codingSectionHeight * 2) + codingSectionFourth)) {
    // //         document.getElementById("coding-overlay").style.opacity = ((window.scrollY - (codingSectionHeight * 2)) / codingSectionFourth);
    // //         document.getElementById("coding-overlay-mobile").style.opacity = ((window.scrollY - (codingSectionHeight * 2)) / codingSectionFourth);
    // //     } else if (window.scrollY > ((codingSectionHeight * 2) + codingSectionFourth) && window.scrollY < ((codingSectionHeight * 3) - codingSectionFourth)) {
    // //         document.getElementById("coding-overlay").style.opacity = 1;
    // //         document.getElementById("coding-overlay-mobile").style.opacity = 1;
    // //     } else if (window.scrollY > ((codingSectionHeight * 3) - codingSectionFourth)) {
    // //         document.getElementById("coding-overlay").style.opacity = 1 - ((window.scrollY - ((codingSectionHeight * 3) - codingSectionFourth)) / codingSectionFourth);
    // //         document.getElementById("coding-overlay-mobile").style.opacity = 1 - ((window.scrollY - ((codingSectionHeight * 3) - codingSectionFourth)) / codingSectionFourth);
    // //     }

    // //     // Setting the z-index so portfolio link is not clickable when not visible.
    // //     if (window.scrollY < (codingSectionHeight * 2)) {
    // //         document.getElementById("coding-overlay").style.zIndex = -1;
    // //         document.getElementById("coding-overlay-mobile").style.zIndex = -1;
    // //     } else if (window.scrollY > (codingSectionHeight * 2) && window.scrollY < (codingSectionHeight * 3)) {
    // //         document.getElementById("coding-overlay").style.zIndex = 5;
    // //         document.getElementById("coding-overlay-mobile").style.zIndex = 5;
    // //     } else if (window.scrollY > (codingSectionHeight * 3)) {
    // //         document.getElementById("coding-overlay").style.zIndex = -1;
    // //         document.getElementById("coding-overlay-mobile").style.zIndex = -1;
    // //     }
        
    // // };

    // // let handleBackgroundPosition = () => {

    // //     let aboutSectionHeight = document.getElementById("profile-pic-home-top").scrollHeight;
    // //     let codingSectionHeight = document.getElementById("coding-pic-home-top").scrollHeight;

    // //     console.log(aboutSectionHeight);
    // //     console.log(codingSectionHeight);
    // //     document.getElementById("profile-pic-home-top").scrollTop = 0;
    // //     // document.getElementById("coding-pic-home-top").scrollTop;

    // // }

    // // let aboutLinkMouseOver = () => {
    // //     document.getElementById("design-development-overlay").style.transform = "scale(1.025)";
    // // };

    // // let portfolioLinkMouseOver = () => {
    // //     document.getElementById("coding-overlay").style.transform = "scale(1.025)";
    // // };

    // // let aboutLinkMouseOut = () => {
    // //     document.getElementById("design-development-overlay").style.transform = "scale(1)";
    // // };

    // // let portfolioLinkMouseOut = () => {
    // //     document.getElementById("coding-overlay").style.transform = "scale(1)";
    // };

    return (
        <main>

            <h1 className="hidden-header">Tanner Moore: Who I Am &amp; What I Do.</h1>

            <section id="about-container" className="sticky-container-about">

                <section className="bg-main-about"></section>
                
                <section className="about-heading-parent-mobile">
                    
                    <img id="who-i-am-overlay-mobile" className="profile-overlay-home mobile" src={whoIAmOverlayMobile} alt="Tanner Moore–Who I Am" loading="lazy" />
                    <img id="what-i-do-overlay-mobile" className="profile-overlay-home mobile" src={whatIDoOverlayMobile} alt="Tanner Moore–Who I Am" loading="lazy" />
                
                </section>

                <section className="about-link-parent-mobile">

                    <Link to="/about" id="design-development-overlay-mobile" className="who-i-am-overlay mobile">
                        <img className="who-i-am-overlay mobile" src={designDevelopmentMobile} alt="Creative Design Thinker &amp; Full-Stack Developer"></img>
                    </Link>

                </section>
            
            </section>

            <section id="portfolio-container" className="sticky-container-portfolio">

                <section className="bg-main-portfolio"></section>
                
                <section className="portfolio-heading-parent-mobile">
                    
                    <img id="what-i-do-portfolio-overlay-mobile" className="coding-overlay-home mobile" src={whatIDoPortfolioOverlayMobile} alt="Tanner Moore–Who I Am" loading="lazy" />
                
                </section>

                <section className="about-link-parent-mobile">

                    <Link to="/portfolio" id="coding-overlay-mobile" className="coding-overlay mobile">
                        <img className="coding-overlay mobile" src={webDevelopmentMobile} alt="Web Design &amp; Development"></img>
                    </Link>

                </section>
            
            </section>

            {/* Heading overlay, "Who I am & What I do"
            <section id="profile-pic-home-top" className="profile-pic-home top">
                Desktop
                <img id="who-i-am-overlay" className="profile-overlay-home desktop" src={whoIAmOverlayDesktop} alt="Tanner Moore–Who I Am" loading="lazy" />
                <img id="what-i-do-overlay" className="profile-overlay-home desktop" src={whatIDoOverlayDesktop} alt="Tanner Moore–Who I Am" loading="lazy" />

                Mobile
                <section className="about-background-image"></section>

                <img id="who-i-am-overlay-mobile" className="profile-overlay-home mobile" src={whoIAmOverlayMobile} alt="Tanner Moore–Who I Am" loading="lazy" />
                <img id="what-i-do-overlay-mobile" className="profile-overlay-home mobile" src={whatIDoOverlayMobile} alt="Tanner Moore–Who I Am" loading="lazy" />
            </section>

            <section id="profile-pic-home-bottom" className="profile-pic-home bottom">
                <Link to="/about" id="design-development-overlay" className="who-i-am-overlay desktop">
                    <img className="who-i-am-overlay desktop" src={designDevelopmentDesktop} alt="Creative Design Thinker &amp; Full-Stack Developer"></img>
                </Link>

                <Link to="/about" id="design-development-overlay-mobile" className="who-i-am-overlay mobile">
                    <img className="who-i-am-overlay mobile" src={designDevelopmentMobile} alt="Creative Design Thinker &amp; Full-Stack Developer"></img>
                </Link>
            </section> */}

            {/* <section id="coding-pic-home-top" className="coding-pic-home">
                <img id="what-i-do-portfolio-overlay" className="coding-overlay-home desktop" src={whatIDoPortfolioOverlayDesktop} alt="Tanner Moore–Who I Am" loading="lazy" />

                <img id="what-i-do-portfolio-overlay-mobile" className="coding-overlay-home mobile" src={whatIDoPortfolioOverlayMobile} alt="Tanner Moore–Who I Am" loading="lazy" />
            </section>

            <section id="coding-pic-home-bottom" className="coding-pic-home">
                <Link to="/portfolio" id="coding-overlay" className="coding-overlay desktop">
                    <img className="coding-overlay desktop" src={webDevelopmentDesktop} alt="Web Design &amp; Development"></img>
                </Link>

                <Link to="/portfolio" id="coding-overlay-mobile" className="coding-overlay mobile">
                    <img className="coding-overlay mobile" src={webDevelopmentMobile} alt="Web Design &amp; Development"></img>
                </Link>
            </section> */}

            {/* <h1 className="hidden-header">Tanner Moore: Who I Am &amp; What I Do.</h1>

            <section className="card grid-container grid-x align-center home">

                <section className="grid-x grid-margin-x homeMenu">
                    Home menu.
                    <section className="cell home card web-dev portfolio">
                        <img className="web-dev-photo desktop" src={profilePicDesktop} alt="Tanner Moore–Who I Am"></img>
                        <img className="web-dev-photo mobile" src={profilePicMobile} alt="Tanner Moore–Who I Am" loading="lazy" />
                        <Link to="/about" className="home-overlay about">
                            <img className="web-dev-photo desktop" src={whatIDoDesktop} alt="Creative Design Thinker &amp; Full-Stack Developer"></img>
                            <img className="web-dev-photo mobile" src={whatIDoMobile} alt="Creative Design Thinker &amp; Full-Stack Developer"></img>
                        </Link>
                    </section>
                </section>

                <section className="grid-x grid-margin-x medium-up-2 homeMenu">
                    <section className="cell home card web-dev portfolio">
                        <img className="web-dev-photo-home" src={codingLanguagesMobile} alt="What I Do–Coding Languages"></img>
                        <Link to="/portfolio" className="home-overlay work">
                            <img className="web-dev-photo desktop" src={webDevelopmentWork} alt="Web Design &amp; Development"></img>
                        </Link>
                    </section>
                    <section className="cell home card web-dev portfolio">
                        <img className="web-dev-photo-home" src={mtnLogo} alt="Get in Touch–Mountain Logo"></img>
                        <Link to="/contact" className="home-overlay connect">
                            <img className="web-dev-photo desktop" src={letsConnect} alt="Let's Connect"></img>
                        </Link>
                    </section>
                </section>

            </section> */}

        </main>
    )
}

export default Home;