import mockup from "./Images/mockup.png";
import sunIcon from "./Images/icon-sun.png";
import "./App.css";
import Button from "./Components/Button";
import CourseTopicCard from "./Components/CourseTopicCard";
import "./Components/styles.css";
import NavigationBar from "./Components/NavigationBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Apply from "./Pages/Apply";
import Apps from "./Pages/Apps";
import Courses from "./Pages/Courses";
import Home from "./Pages/Home";
import Support from "./Pages/Support";
import Team from "./Pages/Team";

function App() {
    return (
        <Router>
            <NavigationBar />
            <div style={{ height: "59px" }}></div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/apply" exact component={Apply} />
                <Route path="/apps" exact component={Apps} />
                <Route path="/courses" exact component={Courses} />
                <Route path="/support" exact component={Support} />
                <Route path="/team" exact component={Team} />
            </Switch>
        </Router>
    );
}

export default App;
