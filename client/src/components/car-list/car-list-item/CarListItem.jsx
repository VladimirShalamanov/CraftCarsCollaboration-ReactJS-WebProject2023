import { Link } from "react-router-dom";

import Path from "../../../utils/paths";
import "./carListItem.css";

export default function CarListItem({
    _id,
    make,
    imageUrl,
}) {
    return (
        <div className="car-item">
            <img src={imageUrl} />
            <h6>{make}</h6>
            {/* <Link to={pathToUrl(Path.GameDetails, { gameId: _id })} className="details-button">Details</Link> */}
        </div>
    );
};