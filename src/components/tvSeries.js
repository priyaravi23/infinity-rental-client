import React, {Component} from 'react';
import fakeSeriesService from '../services/fakeSeriesService';

class Series extends Component {
    state = {
        series: [],
        filteredSeries: [],
        userInput: ""
    };

    constructor(props) {
        super(props);
        this.fakeSeriesService = new fakeSeriesService();
    }

    componentDidMount() {
        this.getItems();
    }

    getItems() {
        this.fakeSeriesService.retrieveItems().then(series => {
                this.setState(
                    {series: series,
                        filteredSeries: [...series]}
                );
            }
        );
    }

    handleInputChange = (e) => {
        const userInput = e.target.value;
        const re = new RegExp(userInput, 'i');
        const filteredSeries = this.state.series.filter(item => {
            return re.test(item.name);
        });

        this.setState({
            filteredSeries,
            userInput: e.target.value
        });
    };

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className="name">
                                    <input type='text'
                                           autoFocus
                                           className="form-control"
                                           placeholder='Search...'
                                           onChange={this.handleInputChange} />

                                    <div className='grid-container'>
                                        {this.state.filteredSeries.map(item => (
                                            <div key={item.id} className="card bg-light grid-item">
                                                <img className="card-img-top img-cover" src={item.url} alt={item.name} />
                                                <button
                                                    type="button"
                                                    className="btn btn-success">Rent
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Series;
