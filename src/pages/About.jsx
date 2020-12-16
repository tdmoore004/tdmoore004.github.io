import React from "react";

// Importing profile picture.
import profilePic from "../assets/images/profilepic-philippines-0015.jpg";

// Constant for rendering About page content.
const About = () => {
    return (
        <main className="card grid-container grid-x align-center about">

            {/* Headline introducing who I am. */}
            <h3 className="card-divider about">
                Full-Stack Web Developer &amp; Creative Design Thinker...
            </h3>

            <section className="card-section">

                {/* Profile picture */}
                <img id="profilePic" src={profilePic} alt="Tanner Moore Headshot" loading="lazy" />

                {/* Introduction to who I am and what I do. */}
                <p className="aboutMe">Capable of designing and developing a polished and responsive website to attract clients and a creative eye-catching logo to highlight your brand.</p>
                <p className="aboutMe">Worked my way through college, earning a Bachelor of Science in communication, with a minor in multi-disciplinary design from the University of Utah, later returning for a certificate in full-stack web development. Experienced with web development technologies such as HTML, CSS and JavaScript as well as design processes, practices and principles.</p>
                <p className="aboutMe">My passion for, and experience with, design, digital media and web development make me a valuable asset on any design or development team.</p>
                <p className="aboutMe">Learn more about my skills and experience <a className="resumeLink" href="/files/tanner-moore-resume.pdf">here</a>.</p>

            </section>
            
        </main>
    )
}

export default About;