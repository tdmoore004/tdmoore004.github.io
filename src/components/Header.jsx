import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Importing style sheet for page.
import "./Header.css"

// Importing name logo for header.
import nameLogo from "../assets/images/logos/tannermoore_name_white.png";

// Importing Font Awesome ellipsis for responsive navbar.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

// Importing jQuery for functional Foundation resonsiveness.
import $ from "jquery";

// Header content.
const Header = () => {

    // Initializing Foundation for JS functionality.
    useEffect(() => {
        $(document).foundation();
    });
    
    // Rendering the Header/Navbar.
        return (
            <header className="top-bar" id="mainNavigation">

                <figure className="top-bar-left">

                    {/* Name logo and link back to home. */}
                    <Link to="/">
                        <img id="logo" src={nameLogo} alt="Tanner Moore Mountain Logo" loading="lazy">
                        </img>
                    </Link>

                </figure>

                {/* Responsive navbar menu */}
                <nav className="title-bar" data-responsive-toggle="nav-menu" data-hide-for="medium">
                    <button type="button" data-toggle="nav-menu">
                        <FontAwesomeIcon className="fas fa-ellipsis-v" icon={faEllipsisV} />
                    </button>
                </nav>

                {/* Navbar menu */}
                <nav className="top-bar-right" id="nav-menu" data-responsive-toggle="nav-menu">
                    <ul className="dropdown vertical medium-horizontal menu" data-responsive-menu="accordion medium-dropdown">
                        <li><Link to="/" className="dropdown-menu-item" data-toggle="nav-menu">About</Link></li>
                        <li><Link to="/portfolio" className="dropdown-menu-item" data-toggle="nav-menu">Portfolio</Link></li>
                        <li><Link to="/contact" className="dropdown-menu-item" data-toggle="nav-menu">Contact</Link></li>
                    </ul>
                </nav>
                
            </header>
        )
    }

export default Header;