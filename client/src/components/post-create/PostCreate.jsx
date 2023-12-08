import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as postService from "../../services/postService";
import Path from "../../utils/paths";

export default function PostCreate() {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [Path.PostCreate]);

    const onSubmitCreateGame = async (e) => {
        e.preventDefault();

        const newPost = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await postService.create(newPost);

            navigate(Path.MyProfile);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className="create-page">
            <div className="container">
                <form id="create" onSubmit={onSubmitCreateGame}>
                    <h1>Create Post</h1>

                    <label htmlFor="post-image">Image</label>
                    <input type="text" id="imageUrl" name="imageUrl" required placeholder="Upload your image..." />

                    <label htmlFor="post-location">Location</label>
                    <input type="text" id="location" name="location" required placeholder="Bulgaria..." />

                    <label htmlFor="post-summary">Summary</label>
                    <textarea id="summary" name="summary" placeholder="Write something..." ></textarea>

                    <input className="btn submit" type="submit" value="Create post" />
                </form>

                <button className="back-button" onClick={() => navigate(-1)}>Back</button>
            </div>
        </section>
    );
};