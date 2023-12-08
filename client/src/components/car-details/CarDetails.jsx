import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as carService from "../../services/carService";

import "./carDetails.css";

export default function CarDetails() {
    const { carId } = useParams();

    const [car, setCar] = useState({});

    useEffect(() => {
        carService.getOne(carId)
            .then(setCar);

        window.scrollTo(0, 0);
    }, [carId]);

    return (
        <section className="car-detail-page">
            <div className="container">

                <div className="intro-car">
                    <h1 className="title">Do you hesitate?</h1>
                    <h4>Come to us for a test drive of a {car.make} completely free of charge.</h4>
                    <h4>This car is desired by most consumers as a {car.category} car.</h4>

                    <div className="car-characteristic">
                        <p>Make: {car.make}</p>
                        <p>Category: {car.category}</p>
                    </div>
                </div>

                <img src={car.imageUrl} />

                <div className="car-info">
                    <h1 className="title">Full Description</h1>
                    <p>{car.summary}</p>
                    <span>Get it now for {car.price} BGN</span>
                </div>

            </div>
        </section>
    );
};

// For future update

{/* <CustomSelect
    label="Job Type"
    name="jobType"
    placeholder="Please select a job"
>
    <option value="">Please select a job type</option>
    <option value="developer">Developer</option>
    <option value="designer">Designer</option>
    <option value="manager">Product Manager</option>
    <option value="other">Other</option>
</CustomSelect> */}