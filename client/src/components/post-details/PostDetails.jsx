import { useContext, useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as postService from "../../services/postService";
import * as commentService from "../../services/commentService";
import { formatDateAndHour, formatDate } from "../../utils/dateFix";
import { pathToUrl } from "../../utils/pathFix";
import Path from "../../utils/paths";
import reducer from "./commentReducer";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";
import "./postDetails.css";

export default function PostDetails() {
    const navigate = useNavigate();
    const { postId } = useParams();
    // set username from context
    const { userId, email, isAuthenticated } = useContext(AuthContext);

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
        if (values.comment === '') {
            return alert('Please write!');
        }

        const newComment = await commentService.create(
            postId,
            values.comment,
        );

        // Username view is correct
        newComment.owner = { email };

        dispatch({
            type: 'ADD_COMMENT',
            payload: newComment,
        });

        values.comment = '';
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
                <div className="general-info">
                    <div className="user-info">
                        <h5>Username!</h5>
                        <h6>{post.location}</h6>
                        <p className="date">{formatDateAndHour(post._createdOn)}</p>
                    </div>

                    {userId === post._ownerId && (
                        <div className="buttons">
                            {/* <Link to={pathToUrl(Path.PostEdit, { postId })} className="button">Edit</Link> */}
                            <button className="button" onClick={onClickDeletePost}>Delete</button>
                            <button className="button" onClick={onClickDeletePost}>Delete</button>
                        </div>
                    )}
                </div>

                <p className="summary">{post.summary}</p>

                <div className="comments-section">
                    <ul>
                        {comments.map(({ _id, text, _createdOn, owner: { email } }) => (
                            <li key={_id} className="comment">
                                <p><span>{email}</span> {text}</p>
                                <p className="date">{formatDate(_createdOn)}</p>
                            </li>
                        ))}
                    </ul>

                    {!comments.length && (
                        <p className="no-comment">No comments.</p>
                    )}

                    <article className="create-reacted">
                        <form className="form-comment" onSubmit={onSubmit}>
                            <textarea
                                name="comment"
                                value={values.comment}
                                onChange={onChange}
                                placeholder={isAuthenticated
                                    ? "Add comment..."
                                    : "You must be a registered user to react to a post!"}
                                disabled={isAuthenticated
                                    ? false
                                    : true}
                            ></textarea>
                            <input
                                className="btn submit"
                                type="submit"
                                value="Add"
                                // disabled={true}
                            />
                        </form>
                    </article>
                </div>
            </div>

        </section>
    );
};