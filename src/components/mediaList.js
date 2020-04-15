import React from 'react';
import '../index.css';

const MediaList = () => {
    return (
        <React.Fragment>
            <div className='carousel-container'>
                <div className="carousel-card">
                    <br />
                    <div className="row text-center">
                        <div className="col-md-5">
                            <h2><strong>OUR SERVICES</strong></h2>
                            <hr style={{borderTop: '1px solid red'}}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-4 text-sm-center service-block">
                                    <i className="fas fa-film icon" />
                                    <h3>NEW TO BUY / RENT</h3>
                                    <p>Buy OR Rent the latest movies & shows now, and watch anytime, anywhere</p>
                                </div>
                                <div className="col-md-4 text-sm-center service-block">
                                    <i className="fas fa-glass-cheers icon" />
                                    <h3>CURL UP AND ENJOY</h3>
                                    <p>Get reacquainted with some of your favorite films & shows</p>
                                </div>
                                <div className="col-md-4 text-sm-center service-block">
                                    <i className="fas fa-jedi icon" />
                                    <h3>STAR WARS</h3>
                                    <p>Experience the complete galactic saga</p>
                                </div>
                                <div className="col-md-4 text-sm-center service-block">
                                    <i className="fas fa-shopping-cart icon" />
                                    <h3>TOP PRE-ORDERS</h3>
                                    <p>Pre-order now and they'll hit your Library as soon as they're available</p>
                                </div>
                                <div className="col-md-4 text-sm-center service-block">
                                    <i className="fas fa-layer-group icon" />
                                    <h3>RENT A BUNDLE, SAVE A BUNCH</h3>
                                    <p>Binge Bundles: A New EnFlix Exclusive!</p>
                                </div>
                                <div className="col-md-4 text-sm-center service-block">
                                    <i className="fab fa-phoenix-framework icon" />
                                    <h3>DEALS</h3>
                                    <p>Own these movies & shows at great prices, for a limited time only</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default MediaList;
