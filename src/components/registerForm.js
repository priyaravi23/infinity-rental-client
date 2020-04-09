import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import '../form.css';

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
                <div className='login-container'>
                    <div className="d-flex justify-content-center h-100">
                        <div className='login-card'>
                            <div className="login-card-header">
                                <h3 className='h3-text'>
                                    Sign Up
                                </h3>
                            </div>

                            <div className='login-card-body'>
                                <form onSubmit={this.handleSubmit}>

                                    <div className="input-group form-group">
                                        <div className="form-group input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-crown"></i></span>
                                        </div>

                                        {this.renderInput("name", "")}
                                    </div>

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
                                        {this.renderButton("Register")}
                                    </div>
                                </form>
                            </div>

                            <div className="login-card-footer">
                                <div className='row'>
                                    <p className='font-small text-white mb-2 pt-3'>
                                        or Sign up with
                                    </p>
                                </div>

                                <div className='row awesome-icon'>
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
            </React.Fragment>
        );
    }
}

export default RegisterForm;
