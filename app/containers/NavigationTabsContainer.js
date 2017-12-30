// @flow

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NavigationTabs from '../components/NavigationTabs';
import * as navigationTabsActions from '../actions/NavigationTabsActions';
import { type navigationTabsStateType } from '../reducers/NavigationTabsReducer';

function mapStateToProps(state: navigationTabsStateType) {
  return {
    page: state.page
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(navigationTabsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationTabs);
