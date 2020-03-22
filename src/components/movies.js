import React, {Component} from 'react';
import {getMovies} from "../services/fakeMovieService";
import {getGenres} from "../services/fakeGenreService";
import Like from '../components/common/like';
import Pagination from '../components/common/pagination';
import {paginate} from '../utils/paginate';
import ListGroup from '../components/common/listGroup';

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 4
    };


    componentDidMount() {
        const genres = [{ name: 'All Genres'}, ...getGenres()];
        this.setState({
            movies: getMovies(),
            genres
        })
    }


    handleDelete = (movie) => {
        const movies = this.state.movies.filter(item => item._id !== movie._id);
        this.setState({
            movies
        })
    };

    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({
            movies
        })
    };

    handlePageChange = (page) => {
        this.setState({
            currentPage: page
        })
    };

    handleGenreSelect = (genre) => {
        this.setState({
            selectedGenre: genre,
            currentPage: 1
        })
    };

    render() {
        const {length: count} = this.state.movies;
        const {
            movies: allMovies,
            pageSize,
            currentPage,
            genres,
            selectedGenre} = this.state;

        if (count === 0) return <p>There are no movies in the database</p>;

        const filtered = selectedGenre && selectedGenre._id
            ? allMovies.filter(item => item.genre._id === selectedGenre._id)
            : allMovies;

        const movies = paginate(filtered, currentPage, pageSize);

        return (
            <div className='row'>
                <div className="col-3">
                    <ListGroup
                        items={genres}
                        // textProperty='name'
                        // valueProperty='_id'
                        selectedItem={selectedGenre}
                        onItemSelect={this.handleGenreSelect} />
                </div>
                <div className="col">
                    <p>Showing {filtered.length} in the database</p>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th />
                            <th />
                        </tr>
                        </thead>
                        <tbody>
                        {movies.map(movie => (
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td>
                                    <Like
                                        liked={movie.liked}
                                        onClick={() => this.handleLike(movie)} />
                                </td>
                                <td>
                                    <button
                                        onClick={() => this.handleDelete(movie)}
                                        className="btn btn-danger btn-sm">Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <Pagination
                        itemsCount={filtered.length}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange} />
                </div>
            </div>
        );
    }
}

export default Movies;
