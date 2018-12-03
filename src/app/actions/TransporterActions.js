import show from 'ba-utils/show';

import * as types from './actionTypes';
import fetch from 'cross-fetch';

export const fetchAction = (items ,branch) => {
    show(branch);
    return (dispatch) => {
      fetch('https://passenger-transport.herokuapp.com/api/transporter',
        {
            method: 'GET'
        })
              .then(resp => resp.json())
              .then(data => {
                  dispatch({
                    branch,
                    type: `${branch}/${types.FETCH_DATA}`,
                    content: data.content,
                    paging : {
                      total_pages: data.total_pages,
                      total_elements: data.total_elements,
                      last: data.last,
                      first: data.first,
                      number_of_elements: data.number_of_elements,
                      size: data.size,
                      number: data.number,
                    }
                  })
                })
    }   
};

export const addAction = (anchor, branch) => ({
    branch,
    type: `${branch}/${types.ADD_EMPTY_ROW}`,
    anchor
});
export const removeAction = (item, branch) => ({
    branch,
    type: `${branch}/${types.REMOVE_ROW}`,
    item
});
export const updateAction = (event, item, branch) => ({
    branch,
    type: `${branch}/${types.UPDATE_ROW}`,
    event,
    item
});
export const editAction = (item, branch) => ({
    branch,
    type: `${branch}/${types.EDIT_ROW}`,
    item
});
export const saveAction = (item, branch) => ({
    branch,
    type: `${branch}/${types.SAVE_ROW}`,
    item
});
export const closeNotifAction = branch => ({
    branch,
    type: `${branch}/${types.CLOSE_NOTIF}`,
});