import { fromJS, List, Map } from 'immutable';
import notif from 'ba-utils/notifMessage';
import {
  FETCH_DATA,
  ADD_EMPTY_ROW,
  UPDATE_ROW,
  REMOVE_ROW,
  EDIT_ROW,
  SAVE_ROW,
  CLOSE_NOTIF
} from '../../actions/actionTypes';
import show from 'ba-utils/show';
import { initialImmutableState , initialItem } from 'ba-utils/reducer/table';

export default function reducer(state = initialImmutableState, action = {}) {
    const { branch } = action;
    switch (action.type) {
      case `${branch}/${FETCH_DATA}`:
        return state.withMutations((mutableState) => {
            // fromJS to convert into mutableSate
            // List to map elements inside
            // show(action.content);
            const content = List(fromJS(action.content));
            mutableState.set('content', content);
            const paging = fromJS(action.paging);
            mutableState.set('paging', paging);    
        });
      case `${branch}/${ADD_EMPTY_ROW}`:
        return state.withMutations((mutableState) => {
          const raw = state.get('content').last();
          const initial = initialItem(raw, action.anchor);
          mutableState.update('content', content => content.unshift(initial));
        });
      case `${branch}/${REMOVE_ROW}`:
        return state.withMutations((mutableState) => {
          const index = state.get('content').indexOf(action.item);
          mutableState
            .update('content', content => content.splice(index, 1))
            .set('notifMsg', notif.removed);
        });
      case `${branch}/${UPDATE_ROW}`:
        return state.withMutations((mutableState) => {
          const index = state.get('content').indexOf(action.item);
          const cellTarget = action.event.target.name;
          const newVal = type => {
            if (type === 'checkbox') {
              return action.event.target.checked;
            }
            return action.event.target.value;
          };
          mutableState.update('content', content => content
            .setIn([index, cellTarget], newVal(action.event.target.type))
          );
        });
      case `${branch}/${EDIT_ROW}`:
        return state.withMutations((mutableState) => {
          const index = state.get('content').indexOf(action.item);
          mutableState.update('content', content => content
            .setIn([index, 'edited'], true)
          );
        });
      case `${branch}/${SAVE_ROW}`:
        return state.withMutations((mutableState) => {
          const index = state.get('content').indexOf(action.item);
          mutableState
            .update('content', content => content
              .setIn([index, 'edited'], false)
            )
            .set('notifMsg', notif.saved);
        });
      case `${branch}/${CLOSE_NOTIF}`:
        return state.withMutations((mutableState) => {
          mutableState.set('notifMsg', '');
        });
      default:
        return state;
    }
  }