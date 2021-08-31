import React from 'react';
import sedans from '../images/icon-sedans.svg';
import suvs from '../images/icon-suvs.svg';
import luxury from '../images/icon-luxury.svg';


const Card = () => {
    return (
        <div className="content">
            <div className="card-body">
                <div className="card-column-1">
                    <div className="icon-1">
                        <img src={sedans} alt="icon-sedan" />
                        <h1 className="column-1-title">SEDANS</h1>
                    </div>
                    <div className="column-1-text">
                        <p>
                            Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.
                        </p>
                    </div>
                    <button className="button-1">Learn More</button>
                </div>
                <div className="card-column-2">
                    <div className="icon-2">
                        <img src={suvs} alt="icon-sedan" />
                        <h1 className="column-2-title">SUVS</h1>
                    </div>
                    <div className="column-2-text">
                        <p>
                            Take an SUV for its spacious interior, power and versatility. Perfect for your next family vacation and off-road adventures.
                        </p>
                    </div>
                    <button className="button-2">Learn More</button>
                </div>
                <div className="card-column-3">
                    <div className="icon-3">
                        <img src={luxury} alt="icon-sedan" />
                        <h1 className="column-3-title">LUXURY</h1>
                    </div>
                    <div className="column-3-text">
                        <p>
                            Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.
                        </p>
                    </div>
                    <button className="button-3">Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Card
