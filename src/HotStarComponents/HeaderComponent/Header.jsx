import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./HeaderStyles.css";

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <span className="bar-icon">
                        <i className="far fa-bars"></i>
                    </span>
                    <a className="navbar-brand" href="#">
                        <img src="disney-hotstar-logo-dark.svg" alt="logo" />
                    </a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">TV</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Movies</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sports</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">News</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Premium</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disney-block" href="#">
                                    <div>Disney+</div>
                                    <div>new</div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link kids-block" href="#">Kids</a>
                            </li>
                        </ul>

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <input type="text" className="form-control" placeholder="search" />
                                <span style={{ position: "relative" }}>
                                    <i className="fas fa-search" style={{ position: "absolute",  top: "-5px", right: "6px", color: "rgb(119, 119, 119)" }}></i>
                                </span>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link subscribe-block">subscribe</a>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link text-uppercase" style={{ color: "#ffffff99" }}>login</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </Fragment>
        );
    }
}

export default HeaderComponent;
