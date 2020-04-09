import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { Link } from 'react-router-dom';
import '../form.css';

class LoginForm extends Form {
    state = {
        data: { username: "", password: "" },
        errors: {}
    };

    schema = {
        username: Joi.string()
            .required()
            .label("Username"),
        password: Joi.string()
            .required()
            .label("Password")
    };

    doSubmit = () => {
        // Call the server
        console.log("Submitted");
    };

    render() {
        return (
            <React.Fragment>
                <div className='login-container'>
                    <div className="d-flex justify-content-center h-100">
                            <div className='login-card'>
                                <div className="login-card-header">
                                    <h3>Sign In</h3>
                                    <div className="d-flex justify-content-end social_icon">
                                        <span><i className="fab fa-facebook-square"></i></span>
                                        <span><i className="fab fa-google-plus-square"></i></span>
                                        <span><i className="fab fa-twitter-square"></i></span>
                                    </div>
                                </div>

                                <div className='login-card-body'>
                                    <form
                                        onSubmit={this.handleSubmit}>

                                        <div className="input-group form-group">
                                            <div className="form-group input-group-prepend">
                                                <span className="input-group-text"><i className="fas fa-user"></i></span>
                                            </div>

                                            {this.renderInput("username", "")}

                                        </div>

                                        <div className="input-group form-group">
                                            <div className="form-group input-group-prepend">
                                                <span className="input-group-text"><i className="fas fa-key"></i></span>
                                            </div>
                                            {this.renderInput("password", "", "password")}
                                        </div>

                                        <div className="form-group">
                                            {this.renderButton("Sign In")}
                                        </div>

                                    </form>
                                </div>

                            <div className="login-card-footer">
                                <div className="d-flex justify-content-center links">
                                    Don't have an account?
                                    <Link to='/register'>
                                        Sign Up
                                    </Link>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <a href="#">Forgot your password?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default LoginForm;
