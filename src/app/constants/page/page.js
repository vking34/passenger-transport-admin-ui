import fetch from 'cross-fetch';
import * as types from '../../actions/actionTypes';
import { Method } from 'ba-utils/request/header';
import { ROUTE_URL } from 'ba-utils/urls/api';

export const DASHBOARD = {
    name: 'DASHBOARD',
    search_text: 'Search dasboard'
};

const routeBranch = 'routeTable';
const routeSearchFunct = (dispatch, searchString) =>{
    fetch(`${ROUTE_URL}?route=${searchString}`, {
        method: Method.GET
    })
    .then(resp => resp.json())
    .then(data => {
        dispatch({
        routeBranch,
        type: `${routeBranch}/${types.FETCH_DATA}`,
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
    });
};

export const ROUTE = {
    name: 'ROUTE',
    search_text: 'Search by Departure/Destination',
    search_funct: routeSearchFunct
};

export const TRANSPORTER = {
    name: 'TRANSPORTER',
    search_text: 'Search by License Plate'
};


