import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';

import './Login.css';

@inject('store')
@observer
class Login extends Component {
    constructor(props) {
        super(props);

        this.store = props.store;
    }

    onSubmit(e) {
        const { login } = this.store.auth;

        e.preventDefault()
        login();
    }

    render() {
        const { location } = this.props;
        const { logged } = this.store.auth.is;

        if (logged) {
            const redirectTo = location.state.from || { pathname: '/' };

            return <Redirect to={redirectTo} />
        }

        return <form className="Login" onSubmit={this.onSubmit.bind(this)}>
            <input name="username" ref={this.username} />
            <input name="password" type="password" ref={this.password} />

            <button type="submit">Log In</button>
        </form>
    }
}

export default Login;
