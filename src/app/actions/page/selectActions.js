import show from 'ba-utils/show';

export const selectPage = (page) => {
    return (dispatch) => {
        show(page);
    }
};