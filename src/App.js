import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Consent from "./pages/consent";
import Task1a from "./pages/task1/task1a";
import Task1b from "./pages/task1/task1b";
import Task2a from "./pages/task2/task2a";
import Task2b from "./pages/task2/task2b";
import Task2c from "./pages/task2/task2c";
import Task2d from "./pages/task2/task2d";
import Task3a from "./pages/task3/task3a";
import Task3b from "./pages/task3/task3b";
import Task3c from "./pages/task3/task3c";
import Task3d from "./pages/task3/task3d";
import Task4a from "./pages/task4/task4a";
import Task4b from "./pages/task4/task4b";
import Task4c from "./pages/task4/task4c";
import Task4d from "./pages/task4/task4d";
import Task5a from "./pages/task5/task5a";
import Task5b from "./pages/task5/task5b";
import Task5c from "./pages/task5/task5c";
import Task5d from "./pages/task5/task5d";
import Thanks from "./pages/thanks";
import './App.css';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <Switch>
                        <Route path="/" exact component={Consent}/>
                        <Route path="/task1a" exact component={Task1a}/>
                        <Route path="/task1b" exact component={Task1b}/>
                        <Route path="/task2a" exact component={Task2a}/>
                        <Route path="/task2b" exact component={Task2b}/>
                        <Route path="/task2c" exact component={Task2c}/>
                        <Route path="/task2d" exact component={Task2d}/>
                        <Route path="/task3a" exact component={Task3a}/>
                        <Route path="/task3b" exact component={Task3b}/>
                        <Route path="/task3c" exact component={Task3c}/>
                        <Route path="/task3d" exact component={Task3d}/>
                        <Route path="/task4a" exact component={Task4a}/>
                        <Route path="/task4b" exact component={Task4b}/>
                        <Route path="/task4c" exact component={Task4c}/>
                        <Route path="/task4d" exact component={Task4d}/>
                        <Route path="/task5a" exact component={Task5a}/>
                        <Route path="/task5b" exact component={Task5b}/>
                        <Route path="/task5c" exact component={Task5c}/>
                        <Route path="/task5d" exact component={Task5d}/>
                        <Route path="/thanks" exact component={Thanks}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}