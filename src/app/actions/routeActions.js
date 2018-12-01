import {
    FETCH_ROUTES
} from './actionTypes';
import fetch from 'cross-fetch';

export const fetchRoutes = () => {
    return (dispatch) => {
        fetch('https://passenger-transport.herokuapp.com/api/route',
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json, */*',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
                }
        }
        )
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            dispatch({
                type: FETCH_ROUTES,
                payload: data
                })
            })
    }
};