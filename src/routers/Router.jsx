import React from 'react';
import {
    withRouter,
    Switch,
    Route,
    Redirect,
    BrowserRouter as Router
} from 'react-router-dom';
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { Auth } from 'aws-amplify';
// import loadable from '@loadable/component';
import AppBar from "../components/app-bar";

const DashBoard = import('../components/dashboard/Dashboard');
const Login = import('../components/login');
const Landing =() => import('../components/landing/Landing');



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
                // eslint-disable-next-line no-restricted-globals
                history={history}
                {...rest}
                render={props => (
                    <div>
                        <AppBar
                            {...props}
                            showSidemenu={this.state.showSidemenu}
                            collapsed={!this.state.showSidemenu}
                            toggleSidemenu={() => {
                                this.setShowSidemenu(!this.state.showSidemenu);
                            }}
                            component={Component}
                            user={this.state.user}
                        />
                    </div>
                )}
            />
        ) : (
            <Redirect
                to={{
                    pathname: '/login'
                }}
            />
        );
    }
}

RouteWrapper = withRouter(RouteWrapper);



const Routes = () => {
    return (
        <div>
            "hehehe"
        <Router>
            <Switch>
                <Route path="/" exact component={Landing} />
                <PrivateRoute path="/dashboard" component={DashBoard} />
                <PublicRoute path="/login" component={Login} />
            </Switch>
        </Router>
        </div>
    );
};

export { PrivateRoute, RouteWrapper, Routes };