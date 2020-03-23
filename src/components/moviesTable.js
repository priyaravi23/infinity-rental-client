import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Like from '../components/common/like';
import Table from '../components/common/table';

class MoviesTable extends Component {
    columns = [
        {
            path: "title",
            label: "Title",
            content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
        },
        { path: "genre.name", label: "Genre" },
        { path: "numberInStock", label: "Stock" },
        { path: "dailyRentalRate", label: "Rate" },
        {
            key: "like",
            content: movie => (
                <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
            )
        }
    ];

    render() {
        const {
            movies,
            onSort,
            sortColumn
        } = this.props;
        return (
            <Table
                columns={this.columns}
                data={movies}
                sortColumn={sortColumn}
                onSort={onSort} />
        );
    }
}

export default MoviesTable;
