import React, {Component} from 'react';
import {getMovies} from "../services/fakeMovieService";
import {getGenres} from "../services/fakeGenreService";
import Pagination from '../components/common/pagination';
import {paginate} from '../utils/paginate';
import ListGroup from '../components/common/listGroup';
import MoviesTable from '../components/moviesTable';
import _ from 'lodash';

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 4,
        sortColumn: {
            path: 'title',
            order: 'asc'
        }
    };


    componentDidMount() {
        const genres = [{ _id:'', name: 'All Genres'}, ...getGenres()];
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

    handleSort = (sortColumn) => {
        this.setState({
            sortColumn
        })
    };

    render() {
        const {length: count} = this.state.movies;
        const {
            movies: allMovies,
            pageSize,
            currentPage,
            genres,
            selectedGenre,
            sortColumn
        } = this.state;

        if (count === 0) return <p>There are no movies in the database</p>;

        const filtered = selectedGenre && selectedGenre._id
            ? allMovies.filter(item => item.genre._id === selectedGenre._id)
            : allMovies;

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const movies = paginate(sorted, currentPage, pageSize);

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
                    <MoviesTable
                        movies={movies}
                        onLike={this.handleLike}
                        onDelete={this.handleDelete}
                        onSort={this.handleSort}
                        sortColumn={sortColumn}/>
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
