import React from "react";
import List from '../components/List';
import Login from '../components/Login';

export default [
    {
        path: "/",
        exact: true,
        component: () => <div>home!</div>,
    },
    {
        path: "/about",
        component: () => <div>About page!</div>,
    },
    {
        path: "/login",
        component: props => <Login {...props} />,
    },
    {
        path: "/campaigns/:id",
        component: ({ match }) => <div>Campaign {match.params.id}!</div>,
        needAuth: true
    },
    {
        path: "/campaigns",
        component: () => <List
            title="Campaigns"
            url="/campaigns/"
            data={[1,2,3]} />,
        needAuth: true
    },
    {
        path: "/candidates/:id",
        component: ({ match }) => <div>Candidate {match.params.id}!</div>,
        needAuth: true
    },
    {
        path: "/candidates",
        component: () => <List
            title="Candidates"
            url="/candidates/"
            data={['fhOdj', 'Ksms3', 'Ld3md']} />,
        needAuth: true
    }
];
