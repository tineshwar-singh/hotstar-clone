import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./Auth-Styles.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
  
    render() {
        return (
            <Fragment>
                <section className="authBlock">
                    <section className="card col-md-3 mx-auto">
                        <article className="form-block">
                            <h5 className="h5 font-weight-bold p-4">Login to continue</h5>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input type="text" className="form-control" placeholder="enter username" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" className="form-control" placeholder="enter password" required />
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-block btn-outline-primary">Login</button>
                                    </div>
                                    <div className="form-group">
                                        <span>Don't have an account Please
                                            <Link to="/register" className="login-link float-right">Register</Link>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </article>
                    </section>
                </section>
            </Fragment>
        );
    }
}

export default Login;