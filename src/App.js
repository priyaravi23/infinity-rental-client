import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Movies from "./components/movies";
import MovieForm from "./components/movieForm";
import TvSeries from "./components/tvSeries";
import NotFound from "./components/notFound";
import NavBar from "./components/navbar";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import MovieCarousel from './components/movieCarousel';
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <ToastContainer />
                <NavBar />
                <Switch>
                    <Route path="/register" component={RegisterForm} />
                    <Route path="/login" component={LoginForm} />
                    <Route path="/movies/:id" component={MovieForm} />
                    <Route path="/movies" component={Movies} />
                    <Route path="/series" component={TvSeries} />
                    <Route path="/not-found" component={NotFound} />
                    <Route path="/movies-app" component={MovieCarousel} />
                    <Redirect from="/" exact to="/movies-app" />
                    <Redirect to="/not-found" />
                </Switch>
            </React.Fragment>
        );
    }
}

export default App;
