import { Link } from "react-router-dom";

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
                <p>{price}</p>
            </div>
            {/* <Link to={pathToUrl(Path.GameDetails, { gameId: _id })} className="details-button">Details</Link> */}
        </div>
    );
};