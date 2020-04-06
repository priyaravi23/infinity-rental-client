import React from "react";
import Joi from "joi-browser";
import { getMovie, saveMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Form from "./common/form";
import '../index.css';

class MovieForm extends Form {
    state = {
        data: {
            title: "",
            genreId: "",
            numberInStock: "",
            dailyRentalRate: ""
        },
        genres: [],
        errors: {}
    };

    schema = {
        _id: Joi.string(),
        title: Joi.string()
            .required()
            .label("Title"),
        genreId: Joi.string()
            .required()
            .label("Genre"),
        numberInStock: Joi.number()
            .required()
            .min(0)
            .max(100)
            .label("Number in Stock"),
        dailyRentalRate: Joi.number()
            .required()
            .min(0)
            .max(10)
            .label("Daily Rental Rate")
    };

    componentDidMount() {
        const genres = getGenres();
        this.setState({ genres });

        const movieId = this.props.match.params.id;
        if (movieId === "new") return;

        const movie = getMovie(movieId);
        if (!movie) return this.props.history.replace("/not-found");

        this.setState({ data: this.mapToViewModel(movie) });
    }

    mapToViewModel(movie) {
        return {
            _id: movie._id,
            title: movie.title,
            genreId: movie.genre._id,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate
        };
    }

    doSubmit = () => {
        saveMovie(this.state.data);

        this.props.history.push("/movies");
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
                                            Add Movie
                                        </h3>
                                    </div>

                                    <div className="row">
                                        <p></p>
                                    </div>
                                </div>

                                <div className='card-body'>
                                    <form onSubmit={this.handleSubmit}>
                                        {this.renderInput("title", "Title")}
                                        {this.renderSelect("genreId", "Genre", this.state.genres)}
                                        {this.renderInput("numberInStock", "Number in Stock", "number")}
                                        {this.renderInput("dailyRentalRate", "Rate")}
                                        {this.renderButton("Save")}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default MovieForm;
