import { React, useEffect, useState } from "react";

import * as carService from "../../services/carService";
import "./carQuickView.css";

export default function CarQuickView() {
    const [quickCar, setQuickCar] = useState([]);

    // Get Action parametar for quick view
    useEffect(() => {
        carService.getAll()
            .then(res => setQuickCar(res));
    }, []);

    return (
        <article className="car-quick-view">
            <div className="message">
                <h3>Action parametar</h3>
            </div>

            <div className="car-quick-list">
                {/* {quickCar} */}

                {!quickCar.length && <h4 className="empty-articles">No cars yet!</h4>}
            </div>
        </article>
    );
};