import React from 'react';
import { Link } from 'react-router-dom';
import Mockup from '../images/mockup.png';
import Logo from '../images/logo.svg';
const Landing = () => {
    return (
        <div className="l-main landing-background">
            <div className="l-holder">
                <div className="l-content">
                    <div className="l-header">
                        <div className="container">
                            <div className="grid grid-gap-sm items-center">
                                <div className="col-6">
                                    <div className="l-logo-container flex items-center">
                                        <a className="l-logo-icon">
                                            <img src={Logo} />
                                        </a>
                                        <a className="l-logo-type">
                                            showcase<span>io</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="l-actions">
                                        <Link className="btn btn-p4 margin-right-xxs" to="/login">
                                            login
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="l-hero margin-top--xs">
                        <div className="container">
                            <div className="l-hero-txt ">
                                Showcasing Admin.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="l-m-img">
                    <img src={Mockup} />
                </div>
                <div className="l-footer">&copy; Showcase Creators Inc. 2019</div>
            </div>
        </div>
    );
};

export default Landing;