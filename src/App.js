// Importing React and React Router.
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Importing static header and footer components
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"

// Importing page components for routing.
import About from "./pages/About.jsx"
import Portfolio from "./pages/Portfolio.jsx"
import Contact from "./pages/Contact.jsx"

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
          <Switch>
            <Route exact path="/" component={About}/>
            <Route exact path="/portfolio" component={Portfolio}/>
            <Route exact path="/contact" component={Contact}/>
          </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
