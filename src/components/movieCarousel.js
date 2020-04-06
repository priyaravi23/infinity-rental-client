import React from 'react';
import MoviesApp from '../images/movies-app.png';
import Movies1 from '../images/movies-1.jpg';
import Movies2 from '../images/movies-2.png';
import Movies3 from '../images/movies-3.png';
import { Link } from 'react-router-dom';
import '../index.css';

const MovieCarousel = () => {
  return (
      <React.Fragment>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
                <li data-target="#carouselExampleIndicators" data-slide-to="1" />
                <li data-target="#carouselExampleIndicators" data-slide-to="2" />
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={MoviesApp} alt="First slide" />

                    <div className="carousel-caption d-none d-md-block">
                        <h2>Rent or Buy</h2>
                        <h5>Movies & TV Series</h5>
                        <Link to='/movies'  className="blue-text ml-1">

                            Browse
                        </Link>
                    </div>
                </div>

                <div className="carousel-item">
                    <img className="d-block w-100" src={Movies1} alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={Movies2} alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={Movies3} alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
            </a>
        </div>
      </React.Fragment>
  )
};

export default MovieCarousel;
