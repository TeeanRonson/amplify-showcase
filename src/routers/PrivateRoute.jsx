import React from "react";
import {Auth} from "aws-amplify";
import {Redirect, Route, withRouter} from "react-router";
// import loadable from '@loadable/component';
const AppBar = import('../components/app-bar');

const guestOnlyRoute = [
    '/login',
    '/dashboard'
];

const disableMenuRoute = ['/'];

class PrivateRoute extends React.Component {
    state = {
        loaded: false,
        isAuthenticated: false,
        user: null,
        showSidemenu: false
    };

    componentDidMount() {
        const { isAuthenticated, showSidemenu } = this.state;
        this.authenticate();
        this.unlisten = this.props.history.listen(() => {
            Auth.currentUserInfo().catch(() => {
                if (isAuthenticated) this.setState({ isAuthenticated: false });
            });
        });
        window.addEventListener('resize', () => {
            if (!showSidemenu) return;
            const clientWidth = window.innerWidth;
            if (clientWidth > 1200) {
                this.setShowSidemenu(true);
            } else {
                this.setShowSidemenu(false);
            }
        });
    }

    componentWillUnmount() {
        this.unlisten();
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
        const { component: Component, ...rest } = this.props;
        const { loaded, isAuthenticated, user, showSidemenu } = this.state;
        if (!loaded) return null;
        return (
            <Route
                // eslint-disable-next-line no-restricted-globals
                history={history}
                {...rest}
                render={props => {
                    return isAuthenticated ? (
                        !guestOnlyRoute.includes(window.location.pathname) ? (
                            !disableMenuRoute.includes(window.location.pathname) ? (
                                <div>
                                    <AppBar
                                        {...props}
                                        collapsed={!showSidemenu}
                                        toggleSidemenu={() => {
                                            this.setShowSidemenu(!showSidemenu);
                                        }}
                                        component={Component}
                                        user={user}
                                    />
                                </div>
                            ) : (
                                <div>
                                    <AppBar
                                        {...props}
                                        disableMenu={true}
                                        component={Component}
                                        user={user}
                                    />
                                </div>
                            )
                        ) : (
                            <Redirect
                                to={{
                                    pathname: '/'
                                }}
                            />
                        )
                    ) : (
                        <Redirect
                            to={{
                                pathname: '/login'
                            }}
                        />
                    );
                }}
            />
        );
    }
}

PrivateRoute = withRouter(PrivateRoute);

export default PrivateRoute;