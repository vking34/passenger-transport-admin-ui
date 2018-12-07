import { fromJS } from 'immutable';

const initialState = {
    user: {
        full_name: 'Vương',
        picture: 'https://scontent.fhan2-1.fna.fbcdn.net/v/t31.0-8/16300149_1171393902980002_8260090941206613423_o.jpg?_nc_cat=103&_nc_oc=AWOg9QEqduSATTrqOgn2i02J7FU3lBvFraaf01m5IUxFnrt61C6RwLr46FxiqOSF0pHSNDJvj33__Q&_nc_ht=scontent.fhan2-1.fna&oh=82cbb1e7dabdbcf34ea9e6b2d457f409&oe=5CA249E5'
    }
}

const initialImmutableState = fromJS(initialState);

export default function reducer(state = initialImmutableState, action = {}) {
    switch(action.type){
        case 'RELOAD':
            return state;
        default:
            return state;
    }
}