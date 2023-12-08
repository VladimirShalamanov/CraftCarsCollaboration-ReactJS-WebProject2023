import { useEffect, useState } from "react";

import * as postService from "../../services/postService";
import PostListItem from "./post-list-item/PostListItem";

import "./postList.css";

export default function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll()
            .then(res => setPosts(res))
            .catch(error => console.log(error));

        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="post-gallery-page">
            <div className="title">
                <h1>User Gallery</h1>
                <h3>We be proud of you post anything!</h3>
            </div>

            <div className="post-list">
                {posts.map(p => <PostListItem key={p._id} {...p} />)}

                {!posts.length && <h4 className="empty-articles">No posts yet!</h4>}
            </div>

        </section>
    );
};