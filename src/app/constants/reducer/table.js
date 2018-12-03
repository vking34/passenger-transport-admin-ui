import { fromJS, List, Map } from 'immutable';

const initialState = {
    content: List([]),
    paging: {
      total_pages: 1,
      total_elements: 2,
      last: true,
      first: false,
      number_of_elements: 2,
      size: 4,
      number: 1,
    },
    notifMsg: '',
};

export const initialImmutableState = fromJS(initialState);

export const initialItem = (keyTemplate, anchor) => {
    const [...rawKey] = keyTemplate.keys();
    const staticKey = {
      id: (+new Date() + Math.floor(Math.random() * 999999)).toString(36),
    };
    for (let i = 0; i < rawKey.length; i += 1) {
      if (rawKey[i] !== 'id' && rawKey[i] !== 'edited') {
        staticKey[rawKey[i]] = anchor[i].initialValue;
      }
    }
    // Push another static key
    staticKey.edited = true;
    return Map(staticKey);
};