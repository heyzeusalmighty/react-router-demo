import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Ingredients from './components/Ingredients';
import Button from './components/Button';
// import { Recipes } from './components/Recipes';
import logo from './logo.svg';
import './App.css';


const Home = () => (
    <div><h2>You are Home</h2></div>
)

const Recipes = () => (
    <div><h2>Recipes</h2></div>
)


class App extends Component {



    render() {
        return (
            

            <div className="App">
            <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
            </div>

            <div>
            <Router>
            <div>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/recipes">Recipes</Link></li>
            <li><Link to="/ingredients">Ingredients</Link></li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/recipes" component={Recipes} />
            <Route path="/ingredients" component={Ingredients} />

            </div>
            </Router>
            <Button color="red" />

            </div>
            </div>


        );
    }
}

export default App;

//
