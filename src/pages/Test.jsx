import React, { useEffect } from "react";
import { Experiment, Variant } from "react-optimize";

// Importing style sheet for page.
import "./Contact.css"

// Importing Let's Connect Header
import letsConnectHeader from "../assets/images/headers/lets-connect-header.png"

// Contact page content.
const Test = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <Experiment id="iE1FtOM7RYalgf-IDdB0pA">
            <Variant id="0">
                <main className="card grid-container grid-x align-center contact">

                    <h1 className="hidden-header">Let's Connect</h1>

                    {/* Page header */}
                    <img className="connect-header" src={letsConnectHeader} alt="Let's Connect" loading="lazy" />

                    <hr className="contactMe"/>

                    {/* Contact information. Future home for contact form. */}
                    <section className="card-section contact">
                        <h5 className="contactMe">This is the original variant of my Google Optimize Test.</h5>
                    </section>

                </main>
            </Variant>
            <Variant id="1">
                <main className="card grid-container grid-x align-center contact">

                    <h1 className="hidden-header">Let's Connect</h1>

                    {/* Page header */}
                    <img className="connect-header" src={letsConnectHeader} alt="Let's Connect" loading="lazy" />

                    <hr className="contactMe"/>

                    {/* Contact information. Future home for contact form. */}
                    <section className="card-section contact">
                        <h5 className="contactMe">This is the variant 1 of my Google Optimize Test.</h5>
                    </section>

                </main>
            </Variant>
        </Experiment>
    )
}

export default Test;