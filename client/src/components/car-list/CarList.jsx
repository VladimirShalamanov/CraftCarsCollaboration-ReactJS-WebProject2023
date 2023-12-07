import { useEffect, useState } from "react";

import * as carService from "../../services/carService";
import CarListItem from "./car-list-item/CarListItem";
import "./carList.css";

export default function CarList() {
    const [cars, setCars] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);

    useEffect(() => {
        carService.getAll()
            .then((res) => setCars(res))
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        carService.getByString(searchInput)
            .then((res) => setFilteredResults(res))
            .catch(error => console.log(error));
    }, [cars, searchInput]);

    return (
        <section className="car-catalog-page">
            <div className="title">
                <h1>Car Catalog</h1>
                <h3>Choose Your Future Car</h3>

                <div className="search-car">
                    <form>
                        <input
                            type="search"
                            name="search"
                            id="search"
                            placeholder="Search by make..."
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            required
                        />
                    </form>
                </div>
            </div>

            <div className="car-list">

                {!filteredResults.length && !searchInput.length &&
                    <>
                        {cars.map(c => <CarListItem key={c._id} {...c} />)}
                    </>
                }

                {filteredResults &&
                    <>
                        {filteredResults.map(c => <CarListItem key={c._id} {...c} />)}
                    </>
                }

                {!cars.length && <h4 className="empty-articles">No cars yet!</h4>}

                {!filteredResults.length && searchInput && <h4 className="empty-articles">No car contains these letters!</h4>}

            </div>


        </section>
    );
};