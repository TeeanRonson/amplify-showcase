import React from 'react';
import {
    withRouter,
    Switch,
    Route,
    Redirect,
    BrowserRouter as Router
} from 'react-router-dom';
import PrivateRoute from "./routers/PrivateRoute";
import PublicRoute from "./routers/PublicRoute";
import { Auth } from 'aws-amplify';
import loadable from '@loadable/component';

const DashBoard = loadable(() => import('./components/dashboard/Dashboard'));
const Login = loadable(() => import('./components/login'));
const Landing = loadable(() => import('./components/landing'));



class RouteWrapper extends React.Component {
    state = {
        loaded: false,
        isAuthenticated: false,
        showSidemenu: false,
        user: null
    };

    componentDidMount() {
        this.authenticate();
    }

    setShowSidemenu(value) {
        this.setState({
            showSidemenu: value
        });
    }

    authenticate() {
        Auth.currentUserInfo()
            .then(user => {
                this.setState({
                    loaded: true,
                    isAuthenticated: true,
                    user: {
                        email: user.attributes.email,
                        username: user.username
                    }
                });
                // }
            })
            .catch(() => {
                this.setState({ loaded: true, isAuthenticated: false });
            });
    }

    render() {
        if (!this.state.loaded) return null;
        const { component: Component, ...rest } = this.props;
        const { isAuthenticated } = this.state;
        return (!isAuthenticated &&
            (window.location.pathname === '/login' ||
        window.location.pathname.indexOf('/dashboard') == 0)) ? (
            <Route
                history={history}
                {...rest}
                render={props => (
                    <div>
                        {/*<AppBar*/}
                        {/*    {...props}*/}
                        {/*    showSidemenu={this.state.showSidemenu}*/}
                        {/*    collapsed={!this.state.showSidemenu}*/}
                        {/*    toggleSidemenu={() => {*/}
                        {/*        this.setShowSidemenu(!this.state.showSidemenu);*/}
                        {/*    }}*/}
                        {/*    component={Component}*/}
                        {/*    user={this.state.user}*/}
                        {/*/>*/}
                    </div>
                )}
            />
        ) : (
            <Redirect
                to={{
                    pathname: '/'
                }}
            />
        );
    }
}

RouteWrapper = withRouter(RouteWrapper);



const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Landing} />
                <PrivateRoute path="/dashboard" exact component={DashBoard} />
                <PublicRoute path="/login" component={Login} />
            </Switch>
        </Router>
    );
};

export { PrivateRoute, RouteWrapper, Routes };