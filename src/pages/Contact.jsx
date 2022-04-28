import React, { useEffect } from "react";
import { Experiment, Variant } from "react-optimize";

// Importing style sheet for page.
import "./Contact.css"

// Importing Let's Connect Header
import letsConnectHeader from "../assets/images/headers/lets-connect-header.png"

// Contact page content.
const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <Experiment id="yPOaljvQRxG9GMx5tySY0w">
            <Variant id="0">
                <main className="card grid-container grid-x align-center contact">

                    <h1 className="hidden-header">Let's Connect</h1>

                    {/* Page header */}
                    <img className="connect-header" src={letsConnectHeader} alt="Let's Connect" loading="lazy" />

                    <hr className="contactMe"/>

                    {/* Contact information. Future home for contact form. */}
                    <section className="card-section contact">
                        <h5 className="contactMe">Contact form coming soon!</h5>
                        <div className="grid-x grid-margin-x medium-up-2">
                            <p className="contactMe cell">Email: <a className="contactInfo" href="mailto:tdmoore004@gmail.com">tdmoore004@gmail.com</a></p>
                            <p className="contactMe cell">Phone: <a className="contactInfo" href="tel:3852457184">(385) 245-7184</a></p>
                        </div>
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
                        <h5 className="contactMe">Contact form coming post haste!</h5>
                        <div className="grid-x grid-margin-x medium-up-2">
                        </div>
                    </section>

                </main>
            </Variant>
        </Experiment>
    )
}

export default Contact;