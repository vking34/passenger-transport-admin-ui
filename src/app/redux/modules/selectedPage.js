import { fromJS } from 'immutable';
import * as page from 'ba-utils/page/page';

const initialState = {
    page: {
        name: page.DASHBOARD.name,
        search_text: page.DASHBOARD.search_text
    }
}

const initialImmutableState = fromJS(initialState);

export default function reducer(state = initialImmutableState, action = {}) {
    switch(action.type){
        case 'REPLACE_PAGE':
            return state.withMutations((mutableState) => {
                // fromJS to convert into mutableSate
                const page = fromJS(action.page);
                mutableState.set('page', page);
            });
        default:
            return state;
    }
}