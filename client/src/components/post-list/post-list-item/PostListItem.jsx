import { Link } from "react-router-dom";

import { pathToUrl } from "../../../utils/pathFix";
import Path from "../../../utils/paths";
import "./postListItem.css";

export default function PostListItem({
    _id,
    imageUrl,
}) {
    return (
        <div className="post-item">
            <img src={imageUrl} />
            <Link to={pathToUrl(Path.PostDetails, { postId: _id })} className="details" />
        </div>
    );
};