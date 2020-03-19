import React from "react";
import {Auth} from "aws-amplify";
import {Redirect, Route, withRouter} from "react-router";
import NewAppBar from "../components/new-app-bar";

const guestOnlyRoute = [
    '/login'
];

// const publicRoute = ['/'];

class PublicRoute extends React.Component {
    state = {
        loaded: false,
        isAuthenticated: false,
        user: null
    };

    componentDidMount() {

    }

    componentWillUnmount() {
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
        const { loaded, isAuthenticated, user } = this.state;
        if (!loaded) return null;
        return (
            <Route
                {...rest}
                render={props => {
                    if (
                        !isAuthenticated ||
                        (isAuthenticated &&
                            !guestOnlyRoute.includes(window.location.pathname))
                    ) {
                        return (
                            <div>
                                <NewAppBar {...props} component={Component} user={user} />
                            </div>
                        );
                    } else {
                        return <Redirect to={{ pathname: '/dashboard' }} />;
                    }
                }}
            />
        );
    }
}
PublicRoute = withRouter(PublicRoute);

export default PublicRoute;