import * as request from "../lib/request";

// const baseUrl = 'http://localhost:3030/data/posts';
const baseUrl = `${import.meta.env.VITE_API_URL}/data/posts`;

export const getAll = async () => {
    const query = new URLSearchParams({
        select: `_id,imageUrl`,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const getOne = async (postId) => {
    const result = await request.get(`${baseUrl}/${postId}`);

    return result;
};

export const getMostRecent = async () => {
    const query = new URLSearchParams({
        select: `_id,imageUrl`,
        offset: 0,
        pageSize: 4,
    });

    const result = await request.get(`${baseUrl}?sortBy=_createdOn%20desc&${query}`);

    return result;
};

// export const getPostWithOwner = async (postId) => {
//     const query = new URLSearchParams({
//         where: `_id="${postId}"`,
//         load: `owner=_ownerId:users`,
//     });
//     const result = await request.get(`${baseUrl}?${query}`);

//     return result;
// };

export const getMine = async (userId) => {
    const query = new URLSearchParams({
        where: `_ownerId="${userId}"`,
        select: `_id,imageUrl`,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const create = async (postData) => {
    const result = await request.post(baseUrl, postData);

    return result;
};

export const edit = async (postId, postData) => {
    const result = await request.put(`${baseUrl}/${postId}`, postData);

    return result;
};

export const remove = async (postId) => await request.remove(`${baseUrl}/${postId}`);