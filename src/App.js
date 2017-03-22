import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, browserHistory } from 'react-router-dom';

import Ingredients from './components/Ingredients';
import Recipes from './components/Recipes';
import logo from './logo.svg';
import './App.css';


const Home = () => (
    <div>
        <h2>You are Home</h2>
    </div>
)

const Cook = () => (
    <div className="cookie-jar">
        <h2>COOKIE</h2>
        <Link to="/cookie/choco">Chocolate Chip</Link>
        <Link to="/cookie/sugar">Sugar</Link>
        <Link to="/cookie/snickerdoodle">Snickerdoodle</Link>
        <Route path="/cookie/:section" render={({match}) => <h2>{match.params.section}</h2>} />
    </div>
)
//
// const Recipes = () => (
//     <div><h2>Recipes</h2></div>
// )


class App extends Component {



    render() {
        return (


            <div>
                <Router history={browserHistory}>
                    <div>
                        <div className="header">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/recipes">Recipes</Link></li>
                                <li><Link to="/ingredients">Ingredients</Link></li>
                                <li><Link to="/cookie">Cookie</Link></li>
                            </ul>
                        </div>

                        <hr />

                        <Route exact path="/" component={Home} />
                        <Route component={Recipes} />
                        <Route path="/ingredients" component={Ingredients} />
                        <Route path="/cookie" component={Cook} />

                    </div>
                </Router>
            </div>


        );
    }
}

export default App;

//
