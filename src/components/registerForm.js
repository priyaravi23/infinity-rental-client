import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import '../index.css';

class RegisterForm extends Form {
    state = {
        data: { username: "", password: "", name: "" },
        errors: {}
    };

    schema = {
        username: Joi.string()
            .required()
            .email()
            .label("Username"),
        password: Joi.string()
            .required()
            .min(5)
            .label("Password"),
        name: Joi.string()
            .required()
            .label("Name")
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
                                        <h3 className='h3-text'>
                                            Sign Up
                                        </h3>
                                    </div>

                                    <div className="row">
                                        <p></p>
                                    </div>
                                </div>

                                <div className='card-body'>
                                    <form onSubmit={this.handleSubmit}>
                                        {this.renderInput("name", "Name")}
                                        {this.renderInput("username", "Username")}
                                        {this.renderInput("password", "Password", "password")}
                                        {this.renderButton("Register")}
                                    </form>
                                </div>

                                <div className='footer'>

                                    <div className='row'>
                                        <p className='font-small text-white mb-2 pt-3'>
                                            or Sign up with
                                        </p>
                                    </div>

                                    <div className='row'>
                                        <a href='#!' className='fa-lg p-2 m-2 fb-ic'>
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                        <a href='#!' className='fa-lg p-2 m-2 tw-ic'>
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        <a href='#!' className='fa-lg p-2 m-2 gplus-ic'>
                                            <i className="fab fa-google-plus-g"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default RegisterForm;
