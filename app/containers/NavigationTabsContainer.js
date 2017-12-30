// @flow

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NavigationTabs from '../components/NavigationTabs';
import * as navigationTabsActions from '../actions/NavigationTabsActions';
import { type navigationTabsStateType } from '../reducers/NavigationTabsReducer';

type _navigationTabsStateType = { NavigationTabsReducer: navigationTabsStateType };
function mapStateToProps(state: _navigationTabsStateType) {
  return {
    page: state.NavigationTabsReducer.page
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(navigationTabsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationTabs);
