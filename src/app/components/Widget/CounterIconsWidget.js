import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AccountBox from '@material-ui/icons/AccountBox';
import PersonAdd from '@material-ui/icons/PersonAdd';
import DirectionsBus from '@material-ui/icons/DirectionsBus';
import Star from '@material-ui/icons/Star';
import { CounterWidget } from './../../components';
import styles from './widget-jss';


class CounterIconWidget extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.rootCounterFull}>
        <Grid container spacing={16}>
          <Grid item md={3} xs={6}>
            <CounterWidget
              color="0277BD"
              start={0}
              end={105}
              duration={3}
              title="New Customers"
            >
              <AccountBox className={classes.counterIcon} />
            </CounterWidget>
          </Grid>
          <Grid item md={3} xs={6}>
            <CounterWidget
              color="388E3C"
              start={0}
              end={3}
              duration={3}
              title="New Transporters"
            >
              <DirectionsBus className={classes.counterIcon} />
            </CounterWidget>
          </Grid>
          <Grid item md={3} xs={6}>
            <CounterWidget
              color="00ACC1"
              start={0}
              end={15}
              duration={3}
              title="New Employees"
            >
              <PersonAdd className={classes.counterIcon} />
            </CounterWidget>
          </Grid>
          <Grid item md={3} xs={6}>
            <CounterWidget
              color="FF5722"
              start={0}
              end={80}
              duration={3}
              title="Average Income"
            >
              <Star className={classes.counterIcon} />
            </CounterWidget>
          </Grid>
        </Grid>
      </div>
    );
  }
}

CounterIconWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CounterIconWidget);
