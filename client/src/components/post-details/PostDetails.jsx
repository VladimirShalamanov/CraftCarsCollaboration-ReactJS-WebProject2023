import { useContext, useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as postService from "../../services/postService";
import * as commentService from "../../services/commentService";
import { formatDate } from "../../utils/dateFix";
import { pathToUrl } from "../../utils/pathFix";
import Path from "../../utils/paths";
import reducer from "./commentReducer";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";

export default function PostDetails() {
    const navigate = useNavigate();
    const { postId } = useParams();
    // set username from context
    const { userId, email } = useContext(AuthContext);

    const [post, setPost] = useState({});
    const [comments, dispatch] = useReducer(reducer, []);

    useEffect(() => {
        postService.getOne(postId)
            .then(setPost);

        commentService.getAll(postId)
            .then((res) => {
                dispatch({
                    type: 'GET_ALL_COMMENTS',
                    payload: res,
                });
            });
    }, [postId]);

    const addCommentHandler = async (values) => {
        const newComment = await commentService.create(
            postId,
            values.comment,
        );

        // Username is correct
        newComment.owner = { email };

        dispatch({
            type: 'ADD_COMMENT',
            payload: newComment,
        });
    };

    const onClickDeletePost = async () => {
        // use modal
        const hasConfirm = confirm(`Are you sure you want to delete the post?`);

        if (hasConfirm) {
            await postService.remove(postId);

            navigate(Path.PostList);
        }
    };

    const { values, onChange, onSubmit } = useForm(addCommentHandler, { comment: '', });

    return (
        <section className="post-details">
            <img src={post.imageUrl} />

            <div className="info-section">
                <h1>Username!</h1>
                <h2>Location!</h2>

                {formatDate(post._createdOn)}

                <p>{post.summary}</p>

                {userId === post._ownerId && (
                    <div className="buttons">
                        {/* <Link to={pathToUrl(Path.PostEdit, { postId })} className="button">Edit</Link> */}
                        <button className="button" onClick={onClickDeletePost}>Delete</button>
                    </div>
                )}

                <div className="comments-section">
                    <ul>
                        {comments.map(({ _id, text, owner: { email } }) => (
                            <li key={_id} className="comment">
                                <p><span>{email}</span> {text}</p>
                            </li>
                        ))}
                    </ul>

                    {!comments.length && (
                        <p className="no-comment">No comments.</p>
                    )}
                </div>

                <article className="create-comment">
                    <form className="form" onSubmit={onSubmit}>
                        <textarea name="comment" value={values.comment} onChange={onChange} placeholder="Add comment..."></textarea>
                        <input className="btn submit" type="submit" value="Add" />
                    </form>
                </article>
            </div>

        </section>
    );
};