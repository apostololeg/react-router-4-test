import React from "react";
import { Link } from 'react-router-dom';

import List from '../components/List';
import Login from '../components/Login';

export default [
    {
        title: 'Home',
        path: "/",
        exact: true,
        component: () => <h2>Welcome Home!</h2>,
    },
    {
        title: 'About',
        path: "/about",
        component: () => <h2>About page!</h2>,
    },
    {
        path: "/login",
        component: props => <Login {...props} />,
    },
    {
        path: "/campaigns/:id",
        component: ({ match }) => <h2>Campaign {match.params.id}!</h2>,
        needAuth: true
    },
    {
        title: 'Campaigns',
        path: "/campaigns",
        component: () => <List
            header={<h2>Campaigns</h2>}
            dataSource={[1,2,3]}
            renderItem={id => <List.Item>
                <Link to={`/campaigns/${id}/`}>{id}</Link>
            </List.Item>} />,
        needAuth: true
    },
    {
        path: "/candidates/:id",
        component: ({ match }) => <h2>Candidate {match.params.id}!</h2>,
        needAuth: true
    },
    {
        title: 'Candidates',
        path: "/candidates",
        component: () => <List
            header={<h2>Candidates</h2>}
            dataSource={['fhOdj', 'Ksms3', 'Ld3md']}
            renderItem={id => <List.Item>
                <Link to={`/candidates/${id}/`}>{id}</Link>
            </List.Item>} />,
        needAuth: true
    }
];
