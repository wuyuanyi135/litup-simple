// @flow
import { SWITCH_TAB } from '../actions/NavigationTabsActions';

export type navigationTabsStateType = {
  +page: number
};
export type navigationTabsSwitchTabActionType = {
  +type: string,
  +page: number
};

type State = navigationTabsStateType;
type Action = navigationTabsSwitchTabActionType;
const initialState: State = { page: 0 };
export default function NavigationTabsReducers(state: State = initialState, action: Action) {
  switch (action.type) {
    case SWITCH_TAB:
      return { ...state, page: action.page };
    default:
      return state;
  }
}
