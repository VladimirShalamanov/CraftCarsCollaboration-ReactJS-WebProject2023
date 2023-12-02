import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as postService from "../../services/postService";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";
import Path from "../../utils/paths";

export default function PostDetails() {
    const navigate = useNavigate();
    const { postId } = useParams();
    const { userId, email } = useContext(AuthContext);

    const [post, setPost] = useState({});
    // comm

    useEffect(() => {
        postService.getOne(postId)
            .then(setPost);
        // comm
    }, [postId]);

    // const handler create

    const onClickDeletePost = async () => {
        // use modal
        const hasConfirm = confirm(`Are you sure you want to delete the post?`);

        if (hasConfirm) {
            await postService.remove(postId);

            navigate(Path.PostList);
        }
    };

    // const { values, onChange, onSubmit } = useForm(comm , { comment: '', });

    return (
        <section className="post-details">
            <img src={post.imageUrl} />

            <div className="info-section">
                <h1>Username!</h1>

                {post._createdOn}

                <p>{post.summary}</p>

                <div className="comments-section">
                    <h2>Comments:</h2>
                    {/* <ul>
                        {comments.map(({ _id, text, owner: { email } }) => (
                            <li key={_id} className="comment">
                                <p>{email}: {text}</p>
                            </li>
                        ))}
                    </ul> */}

                    {/* {comments.length === 0 && (
                        <p className="no-comment">No comments.</p>
                    )} */}
                    <p className="no-comment">No comments.</p>
                </div>

                {userId === post._ownerId && (
                    <div className="buttons">
                        {/* <Link to={pathToUrl(Path.GameEdit, { gameId })} className="button">Edit</Link> */}
                        {/* <Link to={`${Path.PostEdit}/${postId}`} className="button">Edit</Link> */}
                        {/* <Link to={pathToUrl(Path.GameDelete, { gameId })} className="button">Delete</Link> */}
                        <button className="button" onClick={onClickDeletePost}>Delete</button>
                    </div>
                )}
            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                {/* <form className="form" onSubmit={onSubmit}>
                    <textarea name="comment" value={values.comment} onChange={onChange} placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form> */}
            </article>

        </section>
    );
};