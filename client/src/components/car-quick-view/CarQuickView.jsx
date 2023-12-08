import { React, useEffect, useState } from "react";

import * as carService from "../../services/carService";
import CarQuickItem from "./car-quick-item/CarQuickItem";

import "./carQuickView.css";

export default function CarQuickView() {
    const [quickCar, setQuickCar] = useState([]);

    useEffect(() => {
        carService.getMostExpensive()
            .then(res => setQuickCar(res));
    }, []);

    return (
        <article className="car-quick-view">
            <div className="message">
                <h2>Most expensive cars</h2>
            </div>

            <div className="car-quick-list">
                {quickCar.map(car => <CarQuickItem key={car._id} {...car} />)}

                {!quickCar.length && <h4 className="empty-articles">No cars yet!</h4>}
            </div>
        </article>
    );
};