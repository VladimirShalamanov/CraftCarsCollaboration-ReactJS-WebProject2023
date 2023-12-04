import { useContext, useEffect, useState } from "react";

import * as postService from "../../services/postService";
import AuthContext from "../../contexts/authContext";
import PostListItem from "../post-list/post-list-item/PostListItem";
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
                <h4>{email}</h4>

                
            </article>

            <div className="post-list">
                {posts.map(p => <PostListItem key={p._id} {...p} />)}

                {!posts.length && <h4 className="empty-articles">No posts yet!</h4>}
            </div>
        </section>
    );
};