import { Link } from "react-router-dom";

import { pathToUrl } from "../../../utils/pathFix";
import Path from '../../../utils/paths';

import "./postQuickItem.css";

export default function PostQuickItem({
    _id,
    imageUrl,
}) {
    return (
        <div className="post-quick-item">
            <img src={imageUrl} />

            <Link to={pathToUrl(Path.PostDetails, { postId: _id })} />
        </div>
    );
};