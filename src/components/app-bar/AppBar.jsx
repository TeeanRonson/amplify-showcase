import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Auth, Cache } from 'aws-amplify';
// import '../stylesheets/style.scss';
import logo from '../images/logo.svg';
import ProfileIcon from '../ProfileIcon';
// import { fetchResourceData, fetchUserInfoWithEmail } from '../utils/API';
// import loadable from '@loadable/component';

const AppBar = props => {
    const [sideMenuClosed, setSideMenuClosed] = useState(true);
    const [searchTerm, setSearchTerm] = useState(
        props.match ? props.match.params.searchTerm || '' : ''
    );
    const [redirectUrl, setRedirectUrl] = useState('');

    const [showDropdown, setShowDropdown] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    const [userResource, setUserResources] = useState({});
    const { user, collapsed, component: Component } = props;
    const [createProjectModal, setCreateProjectModal] = useState(false);

    useEffect(() => {
        if (user) {
            // fetchUserInfoWithEmail(user.email, true).then(response => {
            //     response && setUserInfo(response);
            // });
            // fetchResourceData(user.email, true).then(response => {
            //     setUserResources(response);
            // });
        }
    }, [user]);

    const ROUTES = {
        home: {
            text: 'Home',
            link: '/home',
            icon: 'home'
        },
        profile: {
            text: 'Profile',
            link: '/profile/' + userInfo.username,
            icon: 'profile'
        },
        users: {
            text: 'Users',
            link: '/users',
            icon: 'user'
        },
        feedback: {
            text: 'Send Feedback',
            link: '/feedback',
            icon: 'message'
        }
    };
    const logout = () => {
        Auth.signOut().then(r => {
            Cache.clear();
            window.location.href = '/';
        });
    };

    const toggleSideMenu = () => {
        setSideMenuClosed(!sideMenuClosed);
        props.toggleSidemenu();
    };

    const newRoute = path => {
        window.location.href = path;
    };

    const handleUserSearchKeyDown = e => {
        if (e.key === 'Enter') {
            e.preventDefault();
            newRoute(`${ROUTES.users.link}/${searchTerm}`);
        }
    };

    return (
        <div
            className={`${
                user && !props.disableMenu
                    ? collapsed
                    ? 'cd-sidebar-collapsed'
                    : 'cd-sidebar-expanded'
                    : 'cd-no-sidebar'
            }`}
        >
            <header className="cd-main-header js-cd-main-header">
                <div
                    className={`sidebar-header ${
                        user && !props.disableMenu ? '' : 'white-background'
                    }`}
                >
                    <div onClick={toggleSideMenu} className="toogle-sidebar">
                        {collapsed ? (
                            <span className="icon icon-allignment-jusitify" />
                        ) : (
                            <span className="icon icon-arrow-left" />
                        )}
                    </div>
                    <div className="cd-logo-wrapper">
                        <Link to="/home" className="app-logo">
                            <img
                                className="margin-right-xxxs icon icon--md"
                                src={logo}
                                alt="Logo"
                            />
                            <span className="app-name text-bold text--md">showcase</span>
                            <span className="app-name-io text-bold text--md">io</span>
                        </Link>
                    </div>
                </div>

                <div className="cd-search js-cd-search">
                    {user && !props.disableMenu && (
                        <form>
                            <input
                                className="reset"
                                type="search"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                                onKeyPress={handleUserSearchKeyDown}
                            />
                        </form>
                    )}
                </div>
                {user && !props.disableMenu && (
                    <ul className="cd-nav__list js-cd-nav__list">
                        <li className="cd-nav__item cd-nav__item--has-children cd-nav__item--account js-cd-item--has-children">
                            <ProfileIcon
                                email={user.email}
                                avatarPictureUri={userResource.profileImage}
                            />
                            <span>
                {userInfo.firstName
                    ? `${userInfo.firstName} ${userInfo.lastName}`
                    : ''}
              </span>
                            <ul className="cd-nav__sub-list">
                                <li className="cd-nav__sub-item">
                                    <Link to="/profile">
                                        <span className="icon icon-profile" />
                                        Edit profile
                                    </Link>
                                </li>
                                <li className="cd-nav__sub-item">
                                    <Link to="/settings">
                                        <span className="icon icon-setting" />
                                        Settings
                                    </Link>
                                </li>
                                <li className="cd-nav__sub-item">
                                    <a href="#0" onClick={() => logout()}>
                                        <span className="icon icon-power" />
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                )}
            </header>

            <main className="cd-main-content">
                <div className={`nav-wrapper ${collapsed ? 'collapsed' : ''}`}>
                    <nav className="cd-side-nav">
                        {user && !props.disableMenu && (
                            <>
                                <ul className="cd-side-nav-list">
                                    {Object.keys(ROUTES).map((key, i) => {
                                        const route = ROUTES[key];
                                        return (
                                            <li
                                                className={`nav-list-item ${
                                                    window.location.pathname === route.link
                                                        ? 'selected'
                                                        : ''
                                                }`}
                                                key={i}
                                            >
                                                <Link to={route.link}>
                          <span className="icon-wrapper">
                            <span className={`icon icon-${route.icon}`} />
                          </span>
                                                    <span className="nav-list-item-text">
                            {route.text}
                          </span>
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                                <div className="separator" />
                                <ul className="cd-side-nav-list">
                                    <li
                                        className={`nav-list-item ${
                                            window.location.pathname === '/projects/new'
                                                ? 'selected'
                                                : ''
                                        }`}
                                    >
                                        <Link
                                            to={`/projects/new${props.location.search}`}
                                            onClick={event => {
                                                event.preventDefault();
                                                if (window.location.pathname !== '/projects/new') {
                                                    setCreateProjectModal(true);
                                                }
                                            }}
                                        >
                                            <span className="icon icon-project-add" />
                                            <span className="nav-list-item-text">New Project</span>
                                        </Link>
                                    </li>
                                </ul>
                            </>
                        )}
                    </nav>
                </div>
                <div className="cd-content-wrapper">
                    <Component {...props} />
                </div>
            </main>
        </div>
    );
};
export default AppBar;