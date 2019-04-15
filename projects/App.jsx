import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import'./App.css';

const Links = () => (
    <nav>
        <Link to="/home">Home</Link>
        <Link to="/menu">Menu</Link>
    </nav>
);

const Menu = () => (
    <div className="menu">
    <h1>Menu</h1>
        <nav>                                                                                                                                                                                               
            <Link to="/menu/food">Food</Link>
            <Link to="/menu/drinks">Drinks</Link>
            <Link to="/menu/sides">Sides</Link>
        </nav>
        
        <Route path="/menu/:page" render={({match}) => 
            <div>{match.params.page}</div> } />
    </div>
);

const App = () => (
<Router>
    <div>
        <Links />
        <Route exact path="/" render={() => <h1>Home</h1>} />
        <Route path="/menu" component={Menu} />
    </div>
</Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
