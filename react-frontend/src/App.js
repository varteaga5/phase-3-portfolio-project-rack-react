import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CATEGORIES } from "./data";
import DisplayTask from "./components/DisplayTask";
import NavBar from "./components/NavBar";

function App() {
  return (
    // nestles all components in Router
    <Router>
      <div className="App">
        <NavBar />
        {/* switch is optional, switch and exact go together, finds first match and then stops, renders one at a time */}
        <Switch>
          {/* route that goes home */}
          <Route exact path="/">
            <Home />
          </Route>
          {/* route that goes to FoodList */}
          <Route path="/FoodList">
            <FoodList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
