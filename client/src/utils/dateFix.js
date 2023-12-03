export const formatDateAndHour = (isoDate) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };

    return new Date(isoDate).toLocaleDateString(undefined, options);
};

export const formatDate = (isoDate) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    return new Date(isoDate).toLocaleDateString(undefined, options);
};