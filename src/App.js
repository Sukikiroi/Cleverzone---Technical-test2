import logo from "./logo.svg";
import "./App.css";
import Listofagencies from "./Frontend/List of agencies/Listofagencies";
import Login from "./Frontend/Login/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
       
          <Route path="/Agnecies">
            <Listofagencies />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
