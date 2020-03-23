import React, {Component} from 'react';
import Like from '../components/common/like';
import TableHeader from '../components/common/tableHeader';
import TableBody from '../components/common/tableBody';

class MoviesTable extends Component {
    columns = [
        { path: 'title', label: 'Title'},
        { path: 'genre.name', label: 'Genre'},
        { path: 'numberInStock', label: 'Stock'},
        { path: 'dailyRentalRate', label: 'Rate'},
        {
            key: 'like',
            content: movie => (
                <Like
                    liked={movie.liked}
                    onClick={() => this.props.onLike(movie)} />
            )
        },
        {
            key: 'delete',
            content: movie => (
                <button
                    onClick={() => this.props.onDelete(movie)}
                    className="btn btn-danger btn-sm">Delete
                </button>
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
            <div>
                <table className="table">
                    <TableHeader
                        columns={this.columns}
                        sortColumn={sortColumn}
                        onSort={onSort} />

                    <TableBody
                        columns={this.columns}
                        data={movies} />
                </table>
            </div>
        );
    }
}

export default MoviesTable;
