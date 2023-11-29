import { useEffect, useState } from "react";

import * as carService from "../../services/carService";

import CarListItem from "./car-list-item/CarListItem";
import "./carList.css";

export default function CarList() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll()
            .then(res => setCars(res))
            .catch(error => console.log(error));
    }, []);

    return (
        <section className="car-catalog-page">
            <h1>Car Catalog</h1>
            <h3>Choose Your Future Car</h3>

            <div className="car-list">
                {cars.map(c => <CarListItem key={c._id} {...c} />)}
            </div>

            {!cars.length && <h4 className="empty-articles">No cars yet!</h4>}
        </section>
    );
}