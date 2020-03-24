import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { Link } from 'react-router-dom';
import '../index.css';

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
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <div className='card'>
                                <div className="header">
                                    <div className="row">
                                        <h3>
                                            Log in
                                        </h3>
                                    </div>

                                    <div className='row'>
                                        <a href="#!" className="fa-lg p-2 m-2 fb-ic">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                        <a href="#!" className="fa-lg p-2 m-2 tw-ic">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        <a href="#!" className="fa-lg p-2 m-2 gplus-ic">
                                            <i className="fab fa-google-plus-g"></i>
                                        </a>
                                    </div>
                                </div>

                                <div className='card-body'>
                                    <form
                                        onSubmit={this.handleSubmit}>
                                        {this.renderInput("username", "Username")}
                                        {this.renderInput("password", "Password", "password")}

                                        <p className="font-small grey-text d-flex justify-content-end">
                                            Forgot
                                            <a
                                                href="#!"
                                                className="dark-grey-text ml-1 font-weight-bold"
                                            >
                                                Password?
                                            </a>
                                        </p>

                                        {this.renderButton("Sign In")}
                                    </form>
                                </div>

                                <div className="modal-footer">
                                    <p className="font-small grey-text d-flex justify-content-end">
                                        Not a member?
                                        <Link to='/register'  className="blue-text ml-1">

                                            Sign Up
                                        </Link>
                                    </p>
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
