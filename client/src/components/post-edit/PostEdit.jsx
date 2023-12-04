import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as postService from "../../services/postService";
import { pathToUrl } from "../../utils/pathFix";
import Path from "../../utils/paths";
import "./postEdit.css";

export default function PostEdit() {
    const navigate = useNavigate();
    const { postId } = useParams();
    const [post, setPost] = useState({
        imageUrl: '',
        location: '',
        summary: '',
    });

    useEffect(() => {
        postService.getOne(postId)
            .then(res => setPost(res));
    }, [postId]);

    const onSubmitEditPost = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await postService.edit(postId, values);

            navigate(pathToUrl(Path.PostDetails, { postId }));
        } catch (error) {
            // Error notification
            console.log(error);

            navigate(Path.Home);
        }
    }

    const onChange = (e) => {
        setPost(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section className="edit-page">
            <form id="edit" onSubmit={onSubmitEditPost}>
                <div className="container">

                    <h1>Edit Post</h1>

                    <label htmlFor="post-image">Image</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={post.imageUrl} onChange={onChange} placeholder="Upload your image..." />

                    <label htmlFor="post-location">Location</label>
                    <input type="text" id="location" name="location" value={post.location} onChange={onChange} placeholder="Bulgaria..." />

                    <label htmlFor="post-summary">Summary</label>
                    <textarea id="summary" name="summary" value={post.summary} onChange={onChange} placeholder="Write something..." ></textarea>

                    <input className="btn submit" type="submit" value="Edit post" />
                    <button className="back-button" onClick={() => navigate(-1)}>Back</button>
                </div>
            </form>
        </section>
    );
};