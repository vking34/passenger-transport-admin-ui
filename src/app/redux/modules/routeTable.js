
import {
    FETCH_ROUTES
} from '../../actions/actionTypes';

import { fromJS, List, Map } from 'immutable';
import notif from 'ba-utils/notifMessage';

const initialState = {
    table: {
        content: [
            {
                id: 'a654',
                departure: 'Giap Bap',
                destination: 'Cam Pha',
                stations: 5,
                active: true
              }, {
                id: 's654',
                departure: 'My Dinh',
                destination: 'Hai Phong',
                stations: 3,
                active: true
              }
        ],
        pageable : {},
        total_elements: 0,
        total_pages: 0,
        number: 0,
        size: 0,
        number_of_elements: 0,
        first: true,
        last: true,
        sort: {}
    },
    notifMsg: ''
}

const initalImmutableState = fromJS(initialState);

export default function reducer(state = initalImmutableState, action = {}){
    switch(action.type) {
        case FETCH_ROUTES:
            return state.withMutations((mutableState) => {
                const data = fromJS(action.payload);
                mutableState.set('table', data);
            });
        default:
            return state;
    }
}