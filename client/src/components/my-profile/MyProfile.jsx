import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { formatDate } from "../../utils/dateFix";
import * as postService from "../../services/postService";
import AuthContext from "../../contexts/authContext";
import Path from "../../utils/paths";
import PostListItem from "../post-list/post-list-item/PostListItem";

import "./myProfile.css";

export default function MyProfile() {
    const [posts, setPosts] = useState([]);
    const { userId, email, username, createdProfile } = useContext(AuthContext);

    useEffect(() => {
        postService.getMine(userId)
            .then(res => setPosts(res))
            .catch(error => console.log(error));

        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="my-profile">
            <article className="profile-info">
                <div className="profile-data">
                    <h4>{email}</h4>
                    <h4>{username}</h4>
                    <h5>{formatDate(createdProfile)}</h5>
                    <p>posts: {posts.length}</p>
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