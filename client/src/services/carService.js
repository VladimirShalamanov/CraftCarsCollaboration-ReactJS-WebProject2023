import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/cars';

export const getAll = async () => {
    const result = await request.get(`${baseUrl}?select=_id%2CimageUrl%2Cmake%2Cprice`);

    return result;
};

export const getOne = async (carId) => {
    const result = await request.get(`${baseUrl}/${carId}`);

    return result;
};

export const getByString = async (carString) => {
    const result = await request.get(`${baseUrl}?where=make LIKE "${carString}"&select=_id%2CimageUrl%2Cmake%2Cprice`);

    return result;
};

export const getForQuickView = async () => {
    const result = await request.get(`${baseUrl}?offset=0&pageSize=4&select=_id%2CimageUrl%2Cmake`);

    return result;
};