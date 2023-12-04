import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import * as postService from "../../services/postService";
import AuthContext from "../../contexts/authContext";
import Path from "../../utils/paths";
import PostListItem from "../post-list/post-list-item/PostListItem";
import PostCreate from "../post-create/PostCreate";
import "./myProfile.css";

export default function MyProfile() {
    const [posts, setPosts] = useState([]);
    const { userId, email } = useContext(AuthContext);

    useEffect(() => {
        postService.getMine(userId)
            .then(res => setPosts(res))
            .catch(error => console.log(error));
    }, []);

    return (
        <section className="my-profile">
            <article className="profile-info">
                <div className="profile-data">
                    <h4>{email}</h4>
                </div>

                <div className="owner-buttons">
                    <Link to={Path.PostCreate} className="button-create-post">Create New Post</Link>
                </div>
            </article>

            <div className="post-list">
                {posts.map(p => <PostListItem key={p._id} {...p} />)}

                {!posts.length && <h4 className="empty-articles">No posts yet!</h4>}
            </div>
        </section>
    );
};