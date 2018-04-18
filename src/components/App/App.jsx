import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import AuthenticatedRoute from '../AuthenticatedRoute';
import './App.css';

const NoMatch = ({ location }) => <h2>Not found "{location.pathname}".</h2>

@inject('store')
@observer
class App extends Component {
    constructor(props) {
        super(props);

        this.store = props.store;
        this.state = {
            logged: this.store.auth.is.logged
        }
    }

    componentWillReceiveProps({ logged }) {
        if (this.state.logged !== logged) {
            this.setState({ logged });
        }
    }

    onLoggedChange(e) {
        const { login, logout } = this.store.auth;

        e.target.checked
            ? login()
            : logout();
    }

    render() {
        const { routes } = this.props;
        const { logged } = this.store.auth.is;

        return <Router>
            <div className='App'>
                <div className='App__menu'>
                    <ul className='Appp__menu-list'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/campaigns">Campaigns</Link> (needAuth)</li>
                        <li><Link to="/candidates">Candidates</Link> (needAuth)</li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/not/match/location">Not match location</Link></li>
                    </ul>
                    <div className="App__logged">
                        <input id="logged" type="checkbox"
                            onChange={this.onLoggedChange.bind(this)}
                            checked={logged} />
                        <label htmlFor="logged">Logged</label>
                    </div>
                </div>

                <Switch className='App__content'>
                    {routes.map((route, i) => {
                        const props = {
                            key: i,
                            ...route
                        };

                        return route.needAuth
                            ? <AuthenticatedRoute {...props } isLoggedIn={logged} />
                            : <Route {...props} />
                    })}
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </Router>
    }
}

export default App;
