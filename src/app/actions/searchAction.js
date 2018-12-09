export const searchAction = (searchFunct, stringSearch) => {
    return (dispatch) => {
        searchFunct(dispatch, stringSearch);
    };
};