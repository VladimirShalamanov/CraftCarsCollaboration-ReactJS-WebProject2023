import * as request from "../lib/request";

// const baseUrl = 'http://localhost:3030/data/comments';
const baseUrl = `${import.meta.env.VITE_API_URL}/data/comments`;

export const getAll = async (postId) => {
    const query = new URLSearchParams({
        where: `postId="${postId}"`,
        load: `owner=_ownerId:users`,
    });

    const result = await request.get(`${baseUrl}?${query.toString()}`);

    return result;
};

export const create = async (postId, text) => {
    const newCommet = await request.post(baseUrl, {
        postId,
        text,
    });

    return newCommet;
};