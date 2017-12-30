// @flow
// import { navigationTabsStateType } from "../reducers/NavigationTabsReducer";


export const SWITCH_TAB = 'SWITCH_TAB';

export function switchTabAction(page: number) {
  return {
    type: SWITCH_TAB,
    page
  };
}
