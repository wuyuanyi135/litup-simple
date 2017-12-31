// @flow
import React, { Component } from 'react';
import NavigationTabsContainer from './NavigationTabsContainer';
import { getData } from "../database/DataProvider";

type Props = {};
type States = {};
export default class HomePage extends Component<Props, States> {

  constructor() {
    super()
  }

  render() {
    return (
      <NavigationTabsContainer />
    );
  }
}
