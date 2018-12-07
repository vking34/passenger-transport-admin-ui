import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import brand from 'ba-utils/brand';
import dummy from 'ba-utils/dummyContents';
import logo from 'ba-images/logo.svg';
import MainMenu from './MainMenu';
import OtherMenu from './OtherMenu';
import styles from './sidebar-jss';
import { connect } from 'react-redux';

const MenuContent = props => {
  const {
    classes,
    turnDarker,
    drawerPaper,
    toggleDrawerOpen,
    loadTransition,
    user
  } = props;
  return (
    <div className={classNames(classes.drawerInner, !drawerPaper ? classes.drawerPaperClose : '')}>
      <div className={classes.drawerHeader}>
        <div className={classNames(classes.brand, classes.brandBar, turnDarker && classes.darker)}>
          <img src={logo} alt={brand.name} />
          <h3>{brand.name}</h3>
        </div>
        <div className={classNames(classes.profile, classes.user)}>
          <Avatar
            alt={user.get('full_name')}
            src={user.get('picture')}
            className={classNames(classes.avatar, classes.bigAvatar)}
          />
          <div>
            <h4>{user.get('full_name')}</h4>
            <span>{dummy.user.title}</span>
          </div>
        </div>
      </div>
      <div className={classes.menuContainer}>
        <MainMenu loadTransition={loadTransition} toggleDrawerOpen={toggleDrawerOpen} />
        <Divider className={classes.divider} />
        <List>
          <OtherMenu toggleDrawerOpen={toggleDrawerOpen} />
        </List>
      </div>
    </div>
  );
};

MenuContent.propTypes = {
  classes: PropTypes.object.isRequired,
  drawerPaper: PropTypes.bool.isRequired,
  turnDarker: PropTypes.bool,
  toggleDrawerOpen: PropTypes.func,
  loadTransition: PropTypes.func,
  user: PropTypes.object.isRequired
};

MenuContent.defaultProps = {
  turnDarker: false
};

MenuContent.defaultProps = {
  toggleDrawerOpen: () => {},
  loadTransition: () => {},
};

const MenuContentStyle = withStyles(styles)(MenuContent);

class Sidebar extends React.Component {
  state = {
    anchor: 'left'
  };

  render() {
    const { anchor } = this.state;
    const {
      classes,
      open,
      toggleDrawerOpen,
      loadTransition,
      turnDarker,
      user
    } = this.props;
    return (
      <Fragment>
        <Hidden lgUp>
          <SwipeableDrawer
            onClose={toggleDrawerOpen}
            onOpen={toggleDrawerOpen}
            open={!open}
            anchor={anchor}
          >
            <MenuContentStyle user={user} drawerPaper toggleDrawerOpen={toggleDrawerOpen} loadTransition={loadTransition} />
          </SwipeableDrawer>
        </Hidden>
        <Hidden mdDown>
          <Drawer
            variant="permanent"
            onClose={toggleDrawerOpen}
            classes={{
              paper: classNames(classes.drawer, classes.drawerPaper, !open ? classes.drawerPaperClose : ''),
            }}
            open={open}
            anchor={anchor}
          >
            <MenuContentStyle user={user} drawerPaper={open} turnDarker={turnDarker} loadTransition={loadTransition} />
          </Drawer>
        </Hidden>
      </Fragment>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleDrawerOpen: PropTypes.func.isRequired,
  loadTransition: PropTypes.func.isRequired,
  turnDarker: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  force: state,
  user: state.getIn(['userInfo', 'user'])
});

const mapDispatchToProps = dispatch => ({});

const SidebarMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

export default withStyles(styles)(SidebarMapped);
