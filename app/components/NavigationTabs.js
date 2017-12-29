import React, {Component} from 'react';
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

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class NavigationTabs extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Record Explorer" />
            <Tab label="Manage" />
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

NavigationTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavigationTabs);
