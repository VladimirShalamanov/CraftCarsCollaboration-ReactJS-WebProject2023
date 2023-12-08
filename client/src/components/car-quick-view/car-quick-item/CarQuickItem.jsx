import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { pathToUrl } from "../../../utils/pathFix";
import Path from '../../../utils/paths';

import "./carQuickItem.css";

export default function CarQuickItem({
    _id,
    imageUrl,
    make,
    price,
}) {
    return (
        <div className="car-quick-item">
            <img src={imageUrl} />

            <div className="intro">
                <h3>{make}</h3>
                <h4>{price} BGN</h4>

                <Link to={pathToUrl(Path.CarDetails, { carId: _id })}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </Link>
            </div>
        </div>
    );
};