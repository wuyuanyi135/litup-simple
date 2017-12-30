// @flow
import { SWITCH_TAB } from '../actions/NavigationTabsActions';
import { type actionType } from '../utils/Action';

export type navigationTabsStateType = {
  +page: number
};
export type navigationTabsSwitchTabActionType = {
  +type: string,
  +payload: {
    +page: number
  }
};

type State = navigationTabsStateType;
type Action = navigationTabsSwitchTabActionType | actionType;
const initialState: State = { page: 0 };
export default function NavigationTabsReducers(state: State = initialState, action: Action) {
  switch (action.type) {
    case SWITCH_TAB:
      return { ...state, page: action.payload.page };
    default:
      // (action: empty); for assert
      return state;
  }
}
