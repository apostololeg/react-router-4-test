import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import AuthenticatedRoute from '../AuthenticatedRoute';
import List from '../List';
import Checkbox from '../Checkbox';
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
        const menuData = routes
            .filter(item => item.title)
            .concat([{
                title: 'No match location',
                path: '/not/match/location'
            }]);

        return <Router>
            <div className='App'>
                <div className='App__menu'>
                    <List className='Appp__menu-list'
                        size="small"
                        bordered
                        dataSource={menuData}
                        renderItem={({ path, title }) => <List.Item>
                            <Link to={path}>{title}</Link>
                        </List.Item>}
                    />
                    <div className="App__logged">
                        <Checkbox
                            onChange={this.onLoggedChange.bind(this)}
                            checked={logged}>
                            Logged
                        </Checkbox>
                    </div>
                </div>

                <Switch className='App__content'>
                    {routes.map((route, i) => {
                        const props = {
                            key: i,
                            ...route
                        };

                        return route.needAuth
                            ? <AuthenticatedRoute {...props} isLoggedIn={logged} />
                            : <Route {...props} />
                    })}
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </Router>
    }
}

export default App;
