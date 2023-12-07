import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/cars';

export const getAll = async () => {
    // const query = new encodeURIComponent({
    //     select: `_id,imageUrl,make,price`,
    // });
    // const result = await request.get(`${baseUrl}?${query}`);

    const result = await request.get(`${baseUrl}?select=_id%2CimageUrl%2Cmake%2Cprice`);

    return result;
};

export const getOne = async (carId) => {
    const result = await request.get(`${baseUrl}/${carId}`);

    return result;
};

export const getByString = async (carString) => {
    // const query = new encodeURIComponent({
    //     where: `make LIKE "${carString}"`,
    //     select: `_id,imageUrl,make,price`,
    // });
    // const result = await request.get(`${baseUrl}?${query}`);

    const result = await request.get(`${baseUrl}?where=make LIKE "${carString}"&select=_id%2CimageUrl%2Cmake%2Cprice`);

    return result;
};

export const getForQuickView = async () => {
    const query = new URLSearchParams({
        select: `_id,imageUrl,make,price`,
        offset: 0,
        pageSize: 4,
    });

    const result = await request.get(`${baseUrl}?sortBy=price%20desc&${query}`);

    return result;
};