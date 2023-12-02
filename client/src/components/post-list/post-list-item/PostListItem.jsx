import { Link } from "react-router-dom";

import Path from "../../../utils/paths";
import "./postListItem.css";

export default function PostListItem({
    _id,
    imageUrl,
}) {
    return (
        <div className="post-item">
            <img src={imageUrl} />

            {/* <div className="intro"> 
            </div> */}

            {/* <Link to={pathToUrl(Path.GameDetails, { gameId: _id })} className="details-button">Details</Link> */}
            <Link to={Path.PostDetails} className="details">Button</Link>
        </div>
    );
};