// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import NavigationTabsReducer from './NavigationTabsReducer';
// import counter from './counter';

const rootReducer = combineReducers({
  // counter,
  NavigationTabsReducer,
  router,
});

export default rootReducer;
