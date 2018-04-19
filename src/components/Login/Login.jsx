import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';

import Button from '../Button';
import Input from '../Input';
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
            <Input name="username" ref={this.username} />
            <Input name="password" type="password" ref={this.password} />

            <Button type="submit" onClick={this.onSubmit.bind(this)}>Log In</Button>
        </form>
    }
}

export default Login;
