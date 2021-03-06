import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Thanks_page from "./pages/thanks_page";
import Cotizator from "./pages/cotizator";


function App() {
    return (
        <div className="App">      
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/thanks" component={Thanks_page} />
                    <Route exact path="/cotizator" component={Cotizator} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
