// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 0 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

type Props = {
  classes: object

}

class NavigationTabs extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    value: 0,
  };

  handleChange(event, value) {
    // this.setState({ value });

    this.props.switchTabAction(value ? value : 0);
  }

  render() {
    const { classes, page } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={page} onChange={this.handleChange}>
            <Tab label="Explore" />
            <Tab label="Export" />
          </Tabs>
        </AppBar>
        {/* main content here */}
        {/* {value === 0 && <TabContainer>Record Explorer</TabContainer>}
        {value === 1 && <TabContainer>Manage</TabContainer>}
        {value === 2 && <TabContainer>Export</TabContainer>} */}
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

export default withStyles(styles)(NavigationTabs);
