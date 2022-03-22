// Importing React and React Router.
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Importing static header and footer components
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"

// Importing page components for routing.
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import PortfolioDes from "./pages/PortfolioDes.jsx"
import PortfolioOpt from "./pages/PortfolioOpt.jsx"
import PortfolioDev from "./pages/PortfolioDev.jsx"
import ProjectPage from "./pages/ProjectPage.jsx"
import Contact from "./pages/Contact.jsx"

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/portfolio/design" component={PortfolioDes}/>
            <Route exact path="/portfolio/optimize" component={PortfolioOpt}/>
            <Route exact path="/portfolio/develop" component={PortfolioDev}/>
            <Route exact path={["/portfolio/traveler", "/portfolio/furlodge", "/portfolio/boredom-buster", "/portfolio/devour-da-burger", "/portfolio/budget-tracker", "/portfolio/fitness-tracker", "/portfolio/ultimate-business-quest", "/portfolio/sun-home-saunas", "/portfolio/code-of-entry", "/portfolio/dree", "/portfolio/water-automation", "/portfolio/chamber-media-mvp", "/portfolio/life-seasons-urinari-x", "/portfolio/capstone-payment-solutions", "/portfolio/access-heating", "/portfolio/chamber-media-cro", "/portfolio/sling-shot", "/portfolio/sun-shrimp"]} component={ProjectPage}/>
            <Route exact path="/contact" component={Contact}/>
          </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
