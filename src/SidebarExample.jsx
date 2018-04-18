import React, { Component } from "react";
import { withRouter } from 'react-router';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes = [
    {
        path: "/",
        exact: true,
        component: () => <div>home!</div>,
    },
    {
        path: "/campaigns/:id",
        component: ({match}) => <div>campaign {match.params.id}!</div>
    },
    {
        path: "/campaigns",
        component: () => <List url="/campaigns/" data={[1,2,3]}/>
    },
    {
        path: "/candidates/:id",
        component: ({match}) => <div>candidate {match.params.id}!</div>
    },
    {
        path: "/candidates",
        component: () => <List url="/candidates/" data={['fhOdj', 'Ksms3', 'Ld3md']}/>
    }
];

const List = ({ url, data }) => (
    <div>
        campaigns!
        <ul>
            {data.map(id => <li>
                <Link to={`${url}${id}`}>{id}</Link>
            </li>)}
        </ul>
    </div>
)

const NoMatch = ({ location }) => <h2>Not found "{location.pathname}".</h2>

const SidebarExample = () => (
    <Router>
        <div style={{ display: "flex" }}>
            <div
                style={{
                    padding: "10px",
                    width: "40%",
                    background: "#f0f0f0"
                }}
            >
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/campaigns">Campaigns</Link></li>
                    <li><Link to="/candidates">Candidates</Link></li>
                    <li><Link to="/not/match/location">Not match location</Link></li>
                </ul>
            </div>

            <Switch style={{ flex: 1, padding: "10px" }}>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                ))}
                <Route component={NoMatch} />
            </Switch>
        </div>
    </Router>
);

export default SidebarExample;
