import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { pathToUrl } from "../../../utils/pathFix";
import Path from "../../../utils/paths";

import "./carListItem.css";

export default function CarListItem({
    _id,
    make,
    imageUrl,
    price,
}) {
    return (
        <div className="car-item">
            <img src={imageUrl} />

            <div className="intro">
                <h4>{make}</h4>
                <h5>{price} BGN</h5>

                <Link to={pathToUrl(Path.CarDetails, { carId: _id })} className="details">
                    <FontAwesomeIcon icon={faChevronRight} />
                </Link>
            </div>

        </div>
    );
};