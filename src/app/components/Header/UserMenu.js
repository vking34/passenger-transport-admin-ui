import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Notification from '@material-ui/icons/Notifications';
import Info from '@material-ui/icons/Info';
import Warning from '@material-ui/icons/Warning';
import Check from '@material-ui/icons/CheckCircle';
import Error from '@material-ui/icons/DoNotDisturbOn';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Badge from '@material-ui/core/Badge';
import Divider from '@material-ui/core/Divider';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import dummy from 'ba-utils/dummyContents';
import messageStyles from 'ba-components/Messages.scss';
import avatarApi from 'ba-utils/avatars';
import styles from './header-jss';
import { connect } from 'react-redux';
import show from 'ba-utils/show';
import Cookies from 'js-cookie';

class UserMenu extends React.Component {
  state = {
    anchorEl: null,
    openMenu: null
  };

  handleMenu = menu => (event) => {
    this.setState({
      openMenu: this.state.openMenu === menu ? null : menu,
      anchorEl: event.currentTarget
    });
  };

  handleClose = () => {
    this.setState({ anchorEl: null, openMenu: null });
  };

  logout = () =>{
    Cookies.remove('TRANSPORT-JWT', { path : ''});
    localStorage.clear();
    window.location.replace('/');
  }

  render() {
    const { classes } = this.props;
    const { anchorEl, openMenu } = this.state;
    // show(this.props.user);
    return (
      <div className="userMenu">
        <IconButton
          aria-haspopup="true"
          onClick={this.handleMenu('notification')}
          color="inherit"
        >
          <Badge className={classes.badge} badgeContent={4} color="secondary">
            <Notification />
          </Badge>
        </IconButton>
        <Menu
          id="menu-notification"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          className={classes.notifMenu}
          PaperProps={{
            style: {
              width: 350,
            },
          }}
          open={openMenu === 'notification'}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>
            <div className={messageStyles.messageInfo}>
              <Avatar alt="User Name" src={avatarApi[0]} />
              <ListItemText primary={dummy.text.subtitle} secondary={dummy.text.date} />
            </div>
          </MenuItem>
          <Divider inset />
          <MenuItem onClick={this.handleClose}>
            <div className={messageStyles.messageInfo}>
              <Avatar className={messageStyles.icon}>
                <Info />
              </Avatar>
              <ListItemText primary={dummy.text.sentences} className={classes.textNotif} secondary={dummy.text.date} />
            </div>
          </MenuItem>
          <Divider inset />
          <MenuItem onClick={this.handleClose}>
            <div className={messageStyles.messageSuccess}>
              <Avatar className={messageStyles.icon}>
                <Check />
              </Avatar>
              <ListItemText primary={dummy.text.subtitle} className={classes.textNotif} secondary={dummy.text.date} />
            </div>
          </MenuItem>
          <Divider inset />
          <MenuItem onClick={this.handleClose}>
            <div className={messageStyles.messageWarning}>
              <Avatar className={messageStyles.icon}>
                <Warning />
              </Avatar>
              <ListItemText primary={dummy.text.subtitle} className={classes.textNotif} secondary={dummy.text.date} />
            </div>
          </MenuItem>
          <Divider inset />
          <MenuItem onClick={this.handleClose}>
            <div className={messageStyles.messageError}>
              <Avatar className={messageStyles.icon}>
                <Error />
              </Avatar>
              <ListItemText primary="Suspendisse pharetra pulvinar sollicitudin. Aenean ut orci eu odio cursus lobortis eget tempus velit. " className={classes.textNotif} secondary="Jan 9, 2016" />
            </div>
          </MenuItem>
        </Menu>
        <Button onClick={this.handleMenu('user-setting')}>
          <Avatar
            alt={this.props.user.get('full_name')}
            src={this.props.user.get('picture')}
          />
        </Button>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={openMenu === 'user-setting'}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>My Profile</MenuItem>
          <MenuItem onClick={this.handleClose}>My Calendar</MenuItem>
          <MenuItem onClick={this.handleClose}>
            My Inbox
            <ListItemIcon>
              <Badge className={classNames(classes.badge, classes.badgeMenu)} badgeContent={2} color="secondary" />
            </ListItemIcon>
          </MenuItem>
          <Divider />
          <MenuItem onClick={this.logout}>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            Log Out
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

UserMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  force: state,
  user: state.getIn(['userInfo', 'user'])
});

const mapDispatchToProps = dispatch => ({});

const UserMenuMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserMenu);


export default withStyles(styles)(UserMenuMapped);
