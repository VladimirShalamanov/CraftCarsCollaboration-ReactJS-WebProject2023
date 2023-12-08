import { React, useEffect, useState } from "react";

import * as postService from "../../services/postService";
import PostQuickItem from "./post-quick-item/PostQuickItem";

import "./postQuickView.css";

export default function CarQuickView() {
    const [quickPost, setQuickPost] = useState([]);

    useEffect(() => {
        postService.getMostRecent()
            .then(res => setQuickPost(res));
    }, []);

    return (
        <article className="post-quick-view">
            <div className="message">
                <h2>Most Recent Posts</h2>
            </div>

            <div className="post-quick-list">
                {quickPost.map(post => <PostQuickItem key={post._id} {...post} />)}

                {!quickPost.length && <h4 className="empty-articles">No posts yet!</h4>}
            </div>
        </article>
    );
};