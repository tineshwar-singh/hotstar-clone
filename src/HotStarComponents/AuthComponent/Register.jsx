import React, { Component, Fragment } from "react";

import { toast } from "react-toastify";
import md5 from "md5";

import firebase from "../../firebase";

import { Link } from "react-router-dom";
import "./Auth-Styles.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      phone: "",
      password: "",
    };  
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    try {
      let { username, email, phone, password } = this.state;
      e.preventDefault();
      
        //connecting firebase auth provider
        let userData = await firebase.auth().createUserWithEmailAndPassword(email, password);
        console.log(userData);

        userData.user.sendEmailVerification();
        toast.success(`A verification email has been sent to ${email} and please verify your email address`);

        //update profile including user photo, phone number, id whatever
        await userData.user.updateProfile({
            displayName : username,
            photoURL : `https://www.gravatar.com/avatar/${md5(userData.user.email)}?d=identicon`,
            // phoneNumber : phone,
        });

        //store user information in RealTime Database
        //should have to config real time firebase database 
        //connect firebase realtime database
        await firebase.database().ref().child(userData.user.displayName).set({
            email : userData.user.email,
            // phoneNumber : userData.user.phoneNumber,
            displayName : userData.user.displayName,
            photoURL : userData.user.photoURL,
            uid : userData.user.uid,
            registrationDate : new Date().toString(),
        });
        
      this.setState({
        username: "",
        email: "",
        phone: "",
        password: "",
      });
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  render() {
    let { username, email, phone, password } = this.state;
    return (
      <Fragment>
        <section className="authBlock">
          <section className="card col-md-3 mx-auto">
            <article className="form-block">
              <h5 className="h5 font-weight-bold p-4">Register to continue</h5>
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter username"
                      name="username"
                      value={username}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="enter email"
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter phone number"
                      name="phone"
                      value={phone}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="enter password"
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <button className="btn btn-block btn-outline-primary">
                      Register
                    </button>
                  </div>
                  <div className="form-group">
                    <span>
                      Already have an account Please
                      <Link to="/login" className="login-link float-right">
                        Login
                      </Link>
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

export default Register;
