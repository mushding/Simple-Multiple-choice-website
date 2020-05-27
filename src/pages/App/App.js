// /src/App.js
import React, { Component } from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
// import HomePage from '../HomePage/HomePage';
// import QuizPage from '../QuizPage/QuizPage';
import PixiTestPage from '../PixiTestPage/PixiTestPage'
import "./styles.css"
class App extends Component {
    render() {
        return (
          <div>
            <HashRouter>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to="/pixi"/>} />
                    {/* <Route path="/home" component={HomePage} />
                    <Route path="/quiz" component={QuizPage} /> */}
                    <Route path="/pixi" component={PixiTestPage} />
                </Switch>
            </HashRouter>
          </div>
        );
    }
}

export default App;