import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const AuthenticatedRoute = (props) => {
    const { isLoggedIn, location } = props;

    if (!isLoggedIn) {
        return <Redirect to={{
            pathname: '/login',
            state: {
                from: location
            }
        }} />
    }

    return <Route {...props} />
};

AuthenticatedRoute.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    component: PropTypes.element
}

export default AuthenticatedRoute;
